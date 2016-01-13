/// <reference path="Scripts/_references.js" />

describe("my bowling score calculator", function () {
    var game;

    beforeEach(function() {
        game = new Game();
    });

    it("should score zero when i miss every pin", function() {
        rollBalls(game, 0, 20);
        expect(game.score()).toBe(0);
    });

    it("returns 20 if a 1 has been rolled on every throw", function() {
        rollBalls(game, 1, 20);
        expect(game.score()).toBe(20);
    });

    it("rolling one spare adds the bonus from the next roll to the score", function () {

        game.roll(5);
        game.roll(5);

        rollBalls(game, 1, 18);

        expect(game.score()).toBe(29);
    });

    it("doesnt add bonus from prev roll if it wasnt a spare", function() {

        game.roll(5);
        game.roll(4);
        game.roll(6);
        game.roll(1);

        rollBalls(game, 1, 16);

        expect(game.score()).toBe(32);
    });

    it("rolling one strike adds the bonus from the next 2 rolls to the score", function () {
        game.roll(10);

        rollBalls(game, 1, 18);

        expect(game.score()).toBe(30);
    });

    it("should score 300 in a pefect game", function () {
        rollBalls(game, 10, 12);
        expect(game.score()).toBe(300);
    });

    function rollBalls(game, score, times) {
        for (var throwIndex = 0; throwIndex < times; throwIndex++) {
            game.roll(score);
        }
    }
}); 