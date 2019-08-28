document.addEventListener('DOMContentLoaded', function (event) {
//---------------------------------------------//
//     const Furry = require('./furry.js')
//     const Coin = require('./coin.js')
//     const Game = require('./game.js')
//     const idSetInterval = require('./game.js')
     document.addEventListener('keydown', function (event) {
        game.arrowMovements(event);
    });
    var idSetInterval;
//Function constructor for Fury
class Fury {
    constructor (x, y, direction) {
            this.x = 0;
            this.y = 0;
            this.direction = "right";
        }
}
//Function constructor for Coin
class Coin {
    constructor(x, y) {
            this.x = Math.floor(Math.random() * 10);
            this.y =Math.floor(Math.random() * 10);
    }
}
//Function constructor for Game
class Game {
    constructor(board, furry, coin, score) {
            this.board = document.querySelector("#board").querySelectorAll("div");
            this.furry = new Fury();
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
            game.moveFurry();
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
            scoreDisplay.style.display = 'none';
            boardDisplay.style.display = 'none';
            document.querySelector("#over").style.display = 'inline-block';
            document.querySelector('#over strong').innerText = this.score;
        };
    };

};
    const game = new Game();

    var scoreDisplay = document.querySelector("#score");
    var boardDisplay = document.querySelector("#board");
    var startButton = document.querySelector("#startGame");

        startButton.addEventListener('click', function (event) {
            game.startGame();
            console.log(this);
            scoreDisplay.style.display = 'block';
            boardDisplay.style.display = 'block';
            document.querySelector("#startButton").style.display = 'none';
        });

//module.exports = game;
//--------------------------------------------//
});
