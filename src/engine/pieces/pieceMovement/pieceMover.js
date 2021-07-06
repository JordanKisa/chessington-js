import Square from "../../square";
import King from "../king";

export default class pieceMover{
    static generateLateralMovements(board, piece, canCapture){
        var position = board.findPiece(piece)
        var moves = []
        //up
        for(let j = 1; j < 8; j++){
            const captured = pieceMover.capturable(board, piece, position.row, position.col+j)
            if (!board.validIndex(position.row,position.col+j) ||
                (board.getPiece(Square.at(position.row, position.col+j)) !== undefined &&
                !(canCapture && captured))){
                break
            }
            moves.push(Square.at(position.row ,position.col+j))
            if (captured){
                break
            }
        }
        //down
        for(let j = -1; j > -8; j--){
            const captured = pieceMover.capturable(board, piece, position.row, position.col+j)
            if (!board.validIndex(position.row,position.col+j) ||
                (board.getPiece(Square.at(position.row, position.col+j)) !== undefined &&
                    !(canCapture && captured))){
                break
            }
            moves.push(Square.at(position.row ,position.col+j))
            if (captured){
                break
            }
        }
        //left
        for (let i = 1; i < 8; i++){
            const captured = pieceMover.capturable(board, piece, position.row+i, position.col)
            if (!board.validIndex(position.row+i,position.col) ||
                (board.getPiece(Square.at(position.row+i, position.col)) !== undefined &&
                    !(canCapture && captured))){
                break
            }
            moves.push(Square.at(position.row+i,position.col))
            if (captured){
                break
            }
        }
        //right
        for (let i = -1; i > -8; i--){
            const captured = pieceMover.capturable(board, piece, position.row+i, position.col)
            if (!board.validIndex(position.row+i,position.col) ||
                (board.getPiece(Square.at(position.row+i, position.col)) !== undefined &&
                    !(canCapture && captured))){
                break
            }
            moves.push(Square.at(position.row+i,position.col))
            if (captured){
                break
            }
        }

        return moves
    }

    static capturable(board, piece, rowindex, colindex) {
        if (!board.validIndex(rowindex,colindex)){
            return false
        }
        const blockingPeice = board.getPiece(Square.at(rowindex,colindex))
        if (blockingPeice === undefined){
            return false
        }
        return blockingPeice.player !== piece.player && !(blockingPeice instanceof King)

    }

    static generateDiagonalMovements(board, piece, canCapture){
        const position = board.findPiece(piece);
        const moves = [];
        // UP /
        for(let j = 1; j < 8; j++){
            const captured = pieceMover.capturable(board, piece, position.row+j, position.col+j)
            if (!board.validIndex(position.row+j,position.col+j) ||
                (board.getPiece(Square.at(position.row+j, position.col+j)) !== undefined &&
                    !(canCapture && captured))){
                break
            }

            moves.push(Square.at(position.row+j ,position.col+j))
            if (captured){
                break
            }
        }
        // down /
        for(let j = -1; j > -8; j--){
            const captured = pieceMover.capturable(board, piece, position.row+j, position.col+j)
            if (!board.validIndex(position.row+j,position.col+j) ||
                (board.getPiece(Square.at(position.row+j, position.col+j)) !== undefined &&
                    !(canCapture && captured))){
                break
            }
            moves.push(Square.at(position.row+j ,position.col+j))
            if (captured){
                break
            }
        }
        // Up \
        for (let i = 1; i < 8; i++){
            const captured = pieceMover.capturable(board, piece, position.row+i, position.col-i)
            if (!board.validIndex(position.row+i,position.col-i) ||
                (board.getPiece(Square.at(position.row+i, position.col-i)) !== undefined &&
                    !(canCapture && captured))){
                break
            }
            moves.push(Square.at(position.row+i,position.col-i))
            if (captured){
                break
            }
        }
        // down \
        for (let i = -1; i > -8; i--){
            const captured = pieceMover.capturable(board, piece, position.row+i, position.col-i)
            if (!board.validIndex(position.row+i,position.col-i) ||
                (board.getPiece(Square.at(position.row+i, position.col-i)) !== undefined &&
                    !(canCapture && captured))){
                break
            }
            moves.push(Square.at(position.row+i,position.col-i))
            if (captured){
                break
            }
        }


        return moves
    }

}