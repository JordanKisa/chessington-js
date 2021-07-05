import Piece from './piece';
import pieceMover from "./pieceMovement/pieceMover";

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        return pieceMover.generateDiagonalMovements(board,this)
    }
}
