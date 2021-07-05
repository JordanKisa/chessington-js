import Piece from './piece';
import Square from "../square";

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
            var xdisplacemant = lmoves[i][0]
            var ydisplacement = lmoves[i][1]

            if(position.row + xdisplacemant < 0 ||
                position.row + xdisplacemant > 7 ||
                position.col + ydisplacement < 0 ||
                position.col + ydisplacement > 7){
                continue
            }

            moves.push(Square.at(
                position.row+xdisplacemant,
                position.col+ydisplacement))

        }

        return moves

    }
}
