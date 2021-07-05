import Piece from './piece';
import Square from "../square";

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        var position = board.findPiece(this)
        var moves = []
        //up
        for(let j = 1; j < 8; j++){
            if (!board.validIndex(position.col+j) ||
                board.getPiece(Square.at(position.row, position.col+j)) !== undefined){
                break
            }
            moves.push(Square.at(position.row ,position.col+j))
        }
        //down
        for(let j = -1; j > -8; j--){
            if (!board.validIndex(position.col+j) ||
                board.getPiece(Square.at(position.row, position.col+j)) !== undefined){
                break
            }
            moves.push(Square.at(position.row ,position.col+j))
        }
        //left
        for (let i = 1; i < 8; i++){
            if (!board.validIndex(position.row+i) ||
                board.getPiece(Square.at(position.row+i, position.col)) !== undefined){
                continue
            }
            moves.push(Square.at(position.row+i,position.col))
        }
        //right
        for (let i = -1; i > -8; i--){
            if (!board.validIndex(position.row+i) ||
                board.getPiece(Square.at(position.row+i, position.col)) !== undefined){
                continue
            }
            moves.push(Square.at(position.row+i,position.col))
        }

        return moves
    }
}
