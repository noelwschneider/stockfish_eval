export default function board(pos, x, y) {
    if (x >= 0 && x <= 7 && y >= 0 && y <= 7) return pos.board[x][y];
    return "x";
}