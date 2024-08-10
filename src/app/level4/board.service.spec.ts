import { BoardService } from "./board.service";

describe('Board service', () => {
    it('can compare two numbers', () => {
        expect(1).toBe(1);
    })

    it('can set pieces on the board', () => {
        const board = new BoardService();
    
        board.set(0, 0);
        expect(board.boardContent[0][0]).toBe(1);
    
        board.set(1, 0);
        expect(board.boardContent[0][1]).toBe(2);
    });
    
    //Make sure that muiltiple set operations on the same cell are ignored.
    it('ignores duplicate calls to set for the same call', () => {
        const board = new BoardService();
    
        board.set(0, 0);
        board.set(0, 0);
        expect(board.boardContent[0][0]).toBe(1);
    });
})


