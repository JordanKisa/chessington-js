import Square from "../../square";

export default class pieceMover{
    static generateLateralMovements(board, piece){
        var position = board.findPiece(piece)
        var moves = []
        //up
        for(let j = 1; j < 8; j++){
            if (!board.validIndex(position.row,position.col+j) ||
                board.getPiece(Square.at(position.row, position.col+j)) !== undefined){
                break
            }
            moves.push(Square.at(position.row ,position.col+j))
        }
        //down
        for(let j = -1; j > -8; j--){
            if (!board.validIndex(position.row,position.col+j) ||
                board.getPiece(Square.at(position.row, position.col+j)) !== undefined){
                break
            }
            moves.push(Square.at(position.row ,position.col+j))
        }
        //left
        for (let i = 1; i < 8; i++){
            if (!board.validIndex(position.row+i,position.col) ||
                board.getPiece(Square.at(position.row+i, position.col)) !== undefined){
                continue
            }
            moves.push(Square.at(position.row+i,position.col))
        }
        //right
        for (let i = -1; i > -8; i--){
            if (!board.validIndex(position.row+i,position.col) ||
                board.getPiece(Square.at(position.row+i, position.col)) !== undefined){
                continue
            }
            moves.push(Square.at(position.row+i,position.col))
        }

        return moves
    }

    static generateDiagonalMovements(board, piece){
        const position = board.findPiece(piece);
        const moves = [];
        // UP /
        for(let j = 1; j < 8; j++){
            if (!board.validIndex(position.row+j,position.col+j) ||
                board.getPiece(Square.at(position.row+j, position.col+j)) !== undefined){
                break
            }
            moves.push(Square.at(position.row+j ,position.col+j))
        }
        // down /
        for(let j = -1; j > -8; j--){
            if (!board.validIndex(position.row+j,position.col+j) ||
                board.getPiece(Square.at(position.row+j, position.col+j)) !== undefined){
                break
            }
            moves.push(Square.at(position.row+j ,position.col+j))
        }
        // Up \
        for (let i = 1; i < 8; i++){
            if (!board.validIndex(position.row+i,position.col-i) ||
                board.getPiece(Square.at(position.row+i, position.col-i)) !== undefined){
                continue
            }
            moves.push(Square.at(position.row+i,position.col-i))
        }
        // down \
        for (let i = -1; i > -8; i--){
            if (!board.validIndex(position.row+i,position.col-i) ||
                board.getPiece(Square.at(position.row+i, position.col-i)) !== undefined){
                continue
            }
            moves.push(Square.at(position.row+i,position.col-i))
        }


        return moves
    }

}