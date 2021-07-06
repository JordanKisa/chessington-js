import Piece from './piece';
import pieceMover from "./pieceMovement/pieceMover";

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const lateral = pieceMover.generateLateralMovements(board,this,true)
        const diagonal = pieceMover.generateDiagonalMovements(board,this,true)
        return [].concat(lateral,diagonal);
    }
}
