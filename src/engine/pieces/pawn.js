import Piece from './piece';
import Square from "../square";
import Player from "../player";
import King from "./king";

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        var position = board.findPiece(this)
        var moves = []
        if (this.player === Player.WHITE && position.row < 7 &&
            board.getPiece(Square.at(position.row+1, position.col)) === undefined){
            moves.push(Square.at(position.row+1, position.col))

            for(let x = -1; x < 2; x=x+2){
                if(!board.validIndex(position.row+1,position.col+x)){
                    continue
                }
                const opposing = board.getPiece(Square.at(position.row+1,position.col+x))
                if (opposing !== undefined &&
                    (opposing.player !== this.player &&
                        !(opposing instanceof King))){

                    moves.push(Square.at(position.row+1,position.col+x))
                }
            }
            if(position.row === 1 &&
                board.getPiece(Square.at(position.row+2, position.col)) === undefined) {
                moves.push(Square.at(position.row + 2, position.col))
            }
        } else if (this.player === Player.BLACK && position.row > 0 &&
            board.getPiece(Square.at(position.row-1, position.col)) === undefined){
            moves.push(Square.at(position.row-1, position.col))
            for(let x = -1; x < 2; x=x+2){
                if(!board.validIndex(position.row-1,position.col+x)){
                    continue
                }
                const opposing = board.getPiece(Square.at(position.row-1,position.col+x))
                if (opposing !== undefined &&
                    (opposing.player !== this.player &&
                        !(opposing instanceof King))){

                    moves.push(Square.at(position.row-1,position.col+x))
                }
            }
            if (position.row === 6 &&
                board.getPiece(Square.at(position.row-2, position.col)) === undefined){
                moves.push((Square.at(position.row-2,position.col)))
            }
        }
        return moves;
    }
}
