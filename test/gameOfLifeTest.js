const gameOfLife = require('../src/gameOfLife.js');
const expect = require('chai').expect;
const grid = [
    [0, 1, 0, 0],
    [1, 1, 1, 1],
    [1, 1, 1, 0]
]
describe('gameOfLife', function () {
    describe('#totalNeighbour', function () {
        it('Total Neighbour', function () {
            expect(gameOfLife.totalNeighbour(grid, 0, 0)).to.equal(3);
            expect(gameOfLife.totalNeighbour(grid, 0, 1)).to.equal(3);
            expect(gameOfLife.totalNeighbour(grid, 0, 2)).to.equal(4);
            expect(gameOfLife.totalNeighbour(grid, 0, 3)).to.equal(2);
            expect(gameOfLife.totalNeighbour(grid, 1, 0)).to.equal(4);
            expect(gameOfLife.totalNeighbour(grid, 1, 1)).to.equal(6);
            expect(gameOfLife.totalNeighbour(grid, 1, 2)).to.equal(5);
            expect(gameOfLife.totalNeighbour(grid, 1, 3)).to.equal(2);
            expect(gameOfLife.totalNeighbour(grid, 2, 0)).to.equal(3);
            expect(gameOfLife.totalNeighbour(grid, 2, 1)).to.equal(5);
            expect(gameOfLife.totalNeighbour(grid, 2, 2)).to.equal(4);
            expect(gameOfLife.totalNeighbour(grid, 2, 3)).to.equal(3);
        })
    })
})