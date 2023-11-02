export default function sum(pos, func, param) {
    var sum = 0;
    for (var x = 0; x < 8; x++) for (var y = 0; y < 8; y++) sum += func(pos, { x: x, y: y }, param);
    return sum;
}