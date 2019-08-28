const Coin = require('./coin.js');
const Furry = require('./furry.js');
const game = require('./app.js');

var idSetInterval;
class Game {
    constructor(board, furry, coin, score) {
        this.board = document.querySelector("#board").querySelectorAll("div");
        this.furry = new Furry();
        this.coin = new Coin();
        this.score = 0;
        this.index = function (x, y) {
            return x + (y * 10);
        };
    }
    showFurry() {
        this.hideVisibleFurry();
        return this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');
    };
    hideVisibleFurry() {
        for(var i = 0; i < this.board.length; i++){
            this.board[i].classList.remove('furry');
        };
    };
    showCoin () {
        return this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');
    };
    moveFurry () {
        if( this.furry.direction === "right") {
            this.furry.x = this.furry.x + 1;
        } else if ( this.furry.direction === "left") {
            this.furry.x = this.furry.x - 1;
        }else if ( this.furry.direction === "up") {
            this.furry.y = this.furry.y - 1;
        }else if( this.furry.direction === "down") {
            this.furry.y = this.furry.y + 1;
        };
        this.gameOver();
        this.checkCoinCollision();
        this.showCoin();
        this.showFurry();
    };
    startGame () {
        idSetInterval = setInterval(function () {
            game.showFurry();
        }, 250);

    };
    arrowMovements(event) {
        event.which || event.keyCode
        switch (event.which) {
            case 37:
                this.furry.direction = 'left';
                break;
            case 38:
                this.furry.direction = 'up';
                break;
            case 39:
                this.furry.direction = 'right';
                break;
            case 40:
                this.furry.direction = 'down';
                break;
        };
    };
    checkCoinCollision() {
        if (this.furry.x === this.coin.x && this.furry.y === this.coin.y) {
            this.board[this.index(this.coin.x, this.coin.y)].classList.remove('coin');
            this.score ++;
            document.querySelector("#score strong").innerText = this.score;
            this.coin = new Coin();
            game.showCoin();
        };
    };
    gameOver() {
        if (this.furry.x <0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {
            this.hideVisibleFurry();
            function stopInterval() {
                clearInterval(idSetInterval);
            };
            stopInterval();
            document.querySelector("#board").style.display = 'none';
            document.querySelector("#score").style.display = 'none';
            document.querySelector("#over").style.display = 'inline-block';
        };
    };
};

module.exports = Game;
module.exports = idSetInterval;