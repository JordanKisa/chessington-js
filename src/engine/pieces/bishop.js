import Piece from './piece';
import Square from "../square";

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        var position = board.findPiece(this)
        var moves = []
        for(let j = -7; j < 8; j++){
            if ((j === 0)
                || position.col + j < 0 || position.col + j > 7
                || position.row + j < 0 || position.row + j > 7){

                continue
            }
            moves.push(Square.at(position.row+j,position.col+j))
        }
        for(let j = -7; j < 8; j++){
            if ((j === 0)
                || position.col + j < 0 || position.col + j > 7
                || position.row - j < 0 || position.row - j > 7){

                continue
            }
            moves.push(Square.at(position.row-j,position.col+j))
        }

        return moves
    }
}
