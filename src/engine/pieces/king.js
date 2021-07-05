import Piece from './piece';
import Square from "../square";

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const position = board.findPiece(this);
        const moves = [];
        for(let i = -1; i < 2; i++){
            for(let j = -1; j < 2; j++){
                if((i === 0 && j === 0) ||
                    position.row + i < 0 ||
                    position.row + i > 7 ||
                    position.col + j < 0 ||
                    position.col + j > 7){
                    continue
                }
                moves.push(Square.at(position.row+i,position.col+j))
            }
        }
        return moves
    }
}
