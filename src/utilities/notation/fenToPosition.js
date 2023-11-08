function formatFEN(unformattedFEN) {
    // Converting string to an array
    let formattedFEN = unformattedFEN.split('')

    // loop to convert FEN numbers to dashes
    let counter = 0
    for (let character of formattedFEN) {
            if (character === ' ') {
                break
            }

            if (Number(character)) {
                formattedFEN.splice(counter, 1)
                for (let i = 0; i < character; i++) {
                    formattedFEN.splice(counter, 0, '-')
                }
            }
            counter++
    }

    // Loop to remove slashes from board portion of FEN
    counter = 0
    for (let character of formattedFEN) {
        if (character === '/') {
            formattedFEN.splice(counter, 1)
        }
        counter++
    }
    return formattedFEN
}


function makePositionFromFEN(FENarg) {
    let fen = formatFEN(FENarg)

    // pos object to return
    let position = {
        board: [],
        castleRights: [false, false, false, false],
        enPassantCandidates: null,
        whiteToMove: true,
        moveCounters: []
    }

    let boardArray = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ]

    for (let rank = 0; rank < 8; rank++) {
        for (let file = 0; file < 8; file++) {
            boardArray[file][rank] = fen.shift()
        }
    }
    position.board = boardArray

    // removing blank space 
    fen.shift()

    // determining whose move it is
    if(fen[0] === 'w') {
        fen.splice(0, 2)
    } else {
        position.whiteToMove = false
        fen.splice(0, 2)
    }
    

    // Castling rights
        // I need to confirm that the eval function expects it in the order I provide it
    let counter = 0
    for (let index of fen) {
        if (index === 'K') {
            position.castleRights[0] = true
            counter++
        } else if (index === 'Q') {
            position.castleRights[1] = true
            counter++
        } else if (index === 'k') {
            position.castleRights[2] = true
            counter++
        } else if (index === 'q') {
            position.castleRights[3] = true
            counter++
        } else if (index === ' ') {
            counter++
            for (let i = 0; i < counter; i++) {
                fen.shift()
            }
            break
        }
    }


    // en passant target square
        // how does the eval function expect this to be formatted?
    if (fen[0] !== '-') {
        position.enPassantCandidates = [null, null]
        
        switch (true) {
            case fen[0].includes('a'):
                position.enPassantCandidates[0] = 0
                break

            case fen[0].includes('b'):
                position.enPassantCandidates[0] = 1
                break
            
            case fen[0].includes('c'):
                position.enPassantCandidates[0] = 2
                break
            
            case fen[0].includes('d'):
                position.enPassantCandidates[0] = 3
                break

            case fen[0].includes('e'):
                position.enPassantCandidates[0] = 4
                break
            
            case fen[0].includes('f'):
                position.enPassantCandidates[0] = 5
                break
            
            case fen[0].includes('g'):
                position.enPassantCandidates[0] = 6
                break

            case fen[0].includes('h'):
                position.enPassantCandidates[0] = 7
                break
        }

        switch (true) {
            case fen[1].includes('6'):
                position.enPassantCandidates[1] = 2
                break

            case fen[1].includes('3'):
                position.enPassantCandidates[1] = 5
                break
        }
        fen.splice(0, 3)
    } else {
        fen.splice(0, 2);
    }

    // Setting halfmove and fullmove counters
    position.moveCounters[0] = fen[0];
    position.moveCounters[1] = fen[2];

    return position
}




export default makePositionFromFEN