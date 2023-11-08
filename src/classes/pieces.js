// Image imports
import P from "../../images/pieces/pawn_w.svg"
import p from "../../images/pieces/pawn_b.svg"
import N from "../../images/pieces/knight_w.svg"
import n from "../../images/pieces/knight_b.svg"
import B from "../../images/pieces/bishop_w.svg"
import b from "../../images/pieces/bishop_b.svg"
import R from "../../images/pieces/rook_w.svg"
import r from "../../images/pieces/rook_b.svg"
import K from "../../images/pieces/king_w.svg"
import k from "../../images/pieces/king_b.svg"
import Q from "../../images/pieces/queen_w.svg"
import q from "../../images/pieces/queen_b.svg"


// Classes for chess pieces
class chessPiece {
    constructor(name, color, letter, image, moves, threatens, defends, threatenedBy, defendedBy, evaluation) {
        this.name = "";
        this.color = "";
        this.letter = "";
        this.moves = [];
        this.threatens = [];
        this.defends = [];
        this.threatenedBy = [];
        this.defendedBy = [];
        this.evaluation = {};
    }
}

export class pawn extends chessPiece {
    constructor(color, image, moves, threatens, defends, threatenedBy, defendedBy, evaluation) {
        super(color, image, moves, threatens, defends, threatenedBy, defendedBy, evaluation);
        this.name = "Pawn";
        this.letter = "P";
    }
}

export class knight extends chessPiece {
    constructor(color, image, moves, threatens, defends, threatenedBy, defendedBy, evaluation) {
        super(color, image, moves, threatens, defends, threatenedBy, defendedBy, evaluation);
        this.name = "Knight";
        this.letter = "N";
    }
}

export class bishop extends chessPiece {
    constructor(color, moves, threatens, defends, threatenedBy, defendedBy, evaluation) {
        super(color, moves, threatens, defends, threatenedBy, defendedBy, evaluation);
        this.name = "Bishop";
        this.letter = "B";
    }
}

export class rook extends chessPiece {
    constructor(color, image, moves, threatens, defends, threatenedBy, defendedBy, evaluation) {
        super(color, image, moves, threatens, defends, threatenedBy, defendedBy, evaluation);
        this.name = "Rook";
        this.letter = "R";
    }
}

export class queen extends chessPiece {
    constructor(color, image, moves, threatens, defends, threatenedBy, defendedBy, evaluation) {
        super(color, image, moves, threatens, defends, threatenedBy, defendedBy, evaluation);
        this.name = "Queen";
        this.letter = "Q";
    }
}

export class king extends chessPiece {
    constructor(color, image, moves, threatens, defends, threatenedBy, defendedBy, evaluation) {
        super(color, image, moves, threatens, defends, threatenedBy, defendedBy, evaluation);
        this.name = "King";
        this.letter = "K";
    }
}