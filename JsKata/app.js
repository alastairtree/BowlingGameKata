
function Game() {
    var rolls = [];
    this.roll = function (pins) {
        rolls.push(pins);
    };

    this.score = function () {
        var total = 0;
        var firstRollIndexPerFrame = 0;

        for (var frameIndex = 0; frameIndex < 10; frameIndex++) {

            total += firstRoll(firstRollIndexPerFrame);

            if (isAStrike(firstRollIndexPerFrame)) {
                total += strikeBonus(firstRollIndexPerFrame);
                firstRollIndexPerFrame++;
                continue;
            }

            total += secondRoll(firstRollIndexPerFrame);

            if (isASpare(firstRollIndexPerFrame)) {
                total += spareBonus(firstRollIndexPerFrame);
            }

            firstRollIndexPerFrame += 2;
        }
       
        return total;
    };

    function firstRoll(rollIndex) {
        return rolls[rollIndex];
    }

    function secondRoll(rollIndex) {
        return rolls[rollIndex+1];
    }

     function spareBonus(rollIndex) {
         return rolls[rollIndex + 2];
     }

     function strikeBonus(rollIndex) {
         return rolls[rollIndex + 1] + rolls[rollIndex + 2];
     }

    function isASpare(rollIndex) {
        return firstRoll(rollIndex) + secondRoll(rollIndex) === 10;
    }

    function isAStrike(rollIndex) {
        return firstRoll(rollIndex) === 10;
    }
}