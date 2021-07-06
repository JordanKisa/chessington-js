import Piece from './piece';
import Square from "../square";
import Board from "../board";
import King from "./king";

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        var position = board.findPiece(this)
        var moves = []
        var lmoves =
            [
                [2,1],[1,2],
                [-2,1],[1,-2],
                [-1,2],[2,-1],
                [-2,-1],[-1,-2]
            ]

        for(var i = 0; i < lmoves.length; i++){
            const xdisplacemant = lmoves[i][0]
            const ydisplacement = lmoves[i][1]

            if(!board.validIndex(
                position.row+xdisplacemant,
                position.col + ydisplacement)){
                continue
            }

            const opposing = board.getPiece(Square.at(
                position.row+xdisplacemant,
                position.col+ydisplacement))

            if (opposing !== undefined &&
                (opposing.player === this.player ||
                opposing instanceof King)){

                continue
            }

            moves.push(Square.at(
                position.row+xdisplacemant,
                position.col+ydisplacement))

        }

        return moves

    }
}
