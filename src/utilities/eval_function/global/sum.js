export default function sum(pos, func, param) {
    let sum = 0;
    for (let x = 0; x < 8; x++) for (let y = 0; y < 8; y++) sum += func(pos, { x: x, y: y }, param);
    return sum;
}