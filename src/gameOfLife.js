function totalNeighbour(grid, x, y) {
    let count = 0;
    for (let i = x - 1; i <= x + 1; i++) {
        if (i >= 0 && i < grid.length) {
            for (let j = y - 1; j <= y + 1; j++) {
                if ((j >= 0 && j < grid[x].length) ? count = count + grid[i][j] : count = count + 0);
            }
        }
    }
    count = count - grid[x][y]
    return count
}

module.exports = {
    totalNeighbour
}

// let array = [7,5,2,7,8,-2,25,25]
// const a = array.sort((a,b)=>a-b)
// const b = []
// b.push(a.pop())
// b.push(a.shift())
// b.push(a.pop())
// b.push(a.shift())
// b.push(a.pop())
// b.push(a.shift())
// b.push(a.pop())
// b.push(a.shift())
// console.log(a)
// console.log(b)
