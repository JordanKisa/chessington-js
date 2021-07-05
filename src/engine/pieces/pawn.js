import Piece from './piece';
import Square from "../square";
import Player from "../player";

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        var position = board.findPiece(this)
        var moves = []
        if (this.player === Player.WHITE && position.row < 7){
            moves.push(Square.at(position.row+1, position.col))
            if(position.row === 1){
                moves.push(Square.at(position.row+2, position.col))
            }
        } else if (this.player === Player.BLACK && position.row > 0){
            moves.push(Square.at(position.row-1, position.col))
        }
        return moves;
    }
}
