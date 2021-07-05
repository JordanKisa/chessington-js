import Piece from './piece';
import pieceMover from "./pieceMovement/pieceMover";

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        return pieceMover.generateLateralMovements(board,this,true)
    }
}
