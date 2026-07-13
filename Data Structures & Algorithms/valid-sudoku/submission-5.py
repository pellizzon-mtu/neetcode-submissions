class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        
        #1- check row
        for row in range(len(board)):
            seen_map = set()
            for col in range(len(board[row])):
                if board[row][col] in seen_map:
                    return False
                elif board[row][col] != ".":
                    seen_map.add(board[row][col])
 

        #2- check col
        for col in range(len(board[0])):
            seen_map = set()
            for row in range(len(board)):
                if board[row][col] in seen_map:
                    return False
                elif board[row][col] != ".":
                   seen_map.add(board[row][col])
                    
        #3- check 3x3 space

        for rowChunk in range(0, len(board), 3):
            for colChunk in range(0, len(board), 3):
                seen_map = set()
                for row in range(rowChunk, rowChunk + 3):
                    for col in range(colChunk, colChunk + 3):
                        if board[row][col] in seen_map:
                            return False
                        elif board[row][col] != ".":
                            seen_map.add(board[row][col])

        return True
                