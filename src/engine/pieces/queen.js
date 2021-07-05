import Piece from './piece';
import pieceMover from "./pieceMovement/pieceMover";

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const lateral = pieceMover.generateLateralMovements(board,this)
        const diagonal = pieceMover.generateDiagonalMovements(board,this)
        return [].concat(lateral,diagonal);
    }
}
