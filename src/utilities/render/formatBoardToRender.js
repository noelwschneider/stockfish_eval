export default function formatBoardToRender({board, whiteToMove}) {
    const formattedBoard = new Array(8);
    for (let i = 0; i < 8; i++) {
      formattedBoard[i] = new Array(8);
    }

  if (whiteToMove) {
    for (let rank = 0; rank < 8; rank++) {
        for (let file = 0; file < 8; file++) {
          formattedBoard[rank][file] = board[file][rank]
        }
    }
  } 
  else {
    for (let rank = 0; rank < 8; rank++) {
      for (let file = 0; file < 8; file++) {
        formattedBoard[rank][file] = board[7-file][7-rank]
      }
    }
  }

  return formattedBoard
}