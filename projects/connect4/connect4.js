class Connect4 {
    constructor(selector) {
        this.ROWS = 6;
        this.COLS = 7;
        this.player = 'red';
        this.selector = selector;
        this.isGameOver = false;
        this.createGrid();
        this.setupEventListeners();
    }
createGrid() {
    const $board = $(this.selector);
    $board.empty();
    this.isGameOver = false;
    this.player = 'red';
    for (let row = 0; row < this.ROWS; row++) {
        const $row = $('<div>')
        .addClass('row');
        for (let col = 0; col < this.COLS; col++){
            const $col = $('<div>')
            .addClass('col empty-space')
            .attr('data-col', col)  //gives the index of the column in console (0-5)
            .attr('data-row', row); //gives the index of the row in console (0-6)
            $row.append($col);
        }
        $board.append($row);              
       }
    }

    setupEventListeners() {
        const $board = $(this.selector);
        const that = this;
        function findLastEmptyCell(col) {
            const cells = $(`.col[data-col='${col}']`);
            for (let i = cells.length -1; i >=0; i--) {
                const $cell = $(cells[i]);
                if ($cell.hasClass('empty-space')){
                    return $cell;
                }

            }
            return null;
        }

        $board.on('mouseenter', '.col.empty-space', function() {
            if (that.isGameOver) return; // prevent normal behaviour continuing after win state achieved
            const col = $(this).data('col');
            const $lastEmptyCell = findLastEmptyCell(col); 
            $lastEmptyCell.addClass(`next-${that.player}`);
            console.log(col);
        })
        
        $board.on('mouseleave', '.col', function(){
            $('.col').removeClass(`next-${that.player}`);
        })

        $board.on("click", ".col.empty-space", function (){
            if (that.isGameOver) return;
            const col = $(this).data("col");
            const row = $(this).data("row");
            const $lastEmptyCell = findLastEmptyCell(col);
            $lastEmptyCell.removeClass(`empty-space next-${that.player}`);
            $lastEmptyCell.addClass(that.player);
            $lastEmptyCell.data('player', that.player);

            const winner = that.checkForWinner(row, col);
            
            if (winner) {
                    that.isGameOver = true;
                    alert(`Game Over! ${that.player} has won.`);
                    $(".col.empty-space").removeClass('empty-space');
                    return;
            }

            that.player = (that.player === "red") ? "Dark" : "Light";
            $(this).trigger("mouseenter");
        });
    }
    
    checkForWinner(row, col) {
        const that = this;

        function $getCell(i, j) {
            return $(`.col[data-row='${i}'][data-col='${j}']`);
        }

        

        function checkDirection(direction) {
            let total = 0;
            let i = row + direction.i;
            let j = col + direction.j;
            let $next = $getCell(i, j);
            while (i >= 0 && 
                i < that.ROWS && 
                j >= 0 && 
                j < that.COLS &&
                $next.data('player') === that.player) 
                {
                    total ++;
                    i += direction.i;
                    j += direction.j;
                    $next = $getCell(i, j);
                }
                return total;
        }

        

        function checkWin(directionA, directionB) {
            const total = 1 +
            checkDirection(directionA) +
            checkDirection(directionB);
            if (total >= 4) {
                return that.player;
            } 
            else {
              return null; 
            }
        }

        function checkVerticals() {
            return checkWin({i: -1, j: 0}, {i: 1, j: 0});
        }

        function checkHorizontals() {
            return checkWin({i: 0, j: -1}, {i: 0, j: 1});
        }
        
        function checkdiagonalBLtoTR() {
            return checkWin({i: 1, j: -1}, {i: 1, j: 1});
        }

        function checkDiagonalBRtoTL() {
            return checkWin({i: 1, j: 1}, {i: -1, j: -1});
        }

        return checkVerticals() || 
        checkHorizontals() || 
        checkdiagonalBLtoTR() || 
        checkDiagonalBRtoTL()
    }

    restart() {
        this.createGrid();
    }
}
