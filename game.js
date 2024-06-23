class Cell {
    constructor(value) {
        this.value = value;
        this.state = 'normal'; // normal, enabled, disabled
    }

    reset() {
        this.state = 'normal';
    }

    enable() {
        this.state = 'enabled';
    }

    disable() {
        this.state = 'disabled';
    }

    isDisabled() {
        return this.state === 'disabled';
    }

    isEnabled() {
        return this.state === 'enabled';
    }

    isNormal() {
        return this.state === 'normal';
    }
}

class Board {
    constructor(dimension) {
        this.dimension = dimension;

        this.cells = [];

        for (let i = 0; i < dimension * dimension; i++) {
            this.cells.push(new Cell(Math.floor(Math.random() * 9 + 1)));
        }

        this.generate();
    }

    getCell(row, col) {
        return this.cells[row * this.dimension + col];
    }

    setCell(row, col, value) {
        this.cells[row * this.dimension + col] = value;
    }

    getColSum(col) {
        let sum = 0;
        for (let row = 0; row < this.dimension; row++) {
            sum += this.getCell(row, col).value;
        }
        return sum;
    }

    getRowSum(row) {
        let sum = 0;
        for (let col = 0; col < this.dimension; col++) {
            sum += this.getCell(row, col).value;
        }
        return sum;
    }

    generate() {
        for (let i = 0; i < this.cells.length; i++) {
            this.cells[i] = new Cell(Math.floor(Math.random() * 9 + 1));
        }
    }

}


class Game {
    constructor(dimension) {
        this.board = new Board(dimension);
        console.log(this.board);
    }

    start() {
        console.log('Game started');
        for (let i = 0; i < this.board.dimension; i++) {
            for (let j = 0; j < this.board.dimension; j++) {
                let cell = this.board.getCell(i, j);
                document.getElementById('cell-' + i + '-' + j).innerText = cell.value;
                console.log(this.board.getCell(i, j));
            }
        }
        for (let i = 0; i < this.board.dimension; i++) {
            document.getElementById('sum-row-' + i).innerText = this.board.getRowSum(i);
            document.getElementById('sum-col-' + i).innerText = this.board.getColSum(i);
        }
    }

    toggleCell(row, col) {
        let cell = this.board.getCell(row, col);
        let element = document.getElementById('cell-' + row + '-' + col)
        if (cell.isEnabled()) {
            cell.disable();
            element.classList.remove('is-success');
            element.classList.add('is-danger');
        } else if (cell.isDisabled()) {
            element.classList.remove('is-danger');
            cell.reset();
        } else if (cell.isNormal()) {
            cell.enable();
            element.classList.remove('is-danger');
            element.classList.add('is-success');
        }
    }
}