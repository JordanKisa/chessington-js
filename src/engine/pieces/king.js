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
                    !board.validIndex(position.row+i, position.col+j)){
                    continue
                }
                const opposing = board.getPiece(Square.at(
                    position.row+i,
                    position.col+j))

                if (opposing !== undefined &&
                    (opposing.player === this.player ||
                        opposing instanceof King)){

                    continue
                }
                moves.push(Square.at(position.row+i,position.col+j))
            }
        }
        return moves
    }
}
