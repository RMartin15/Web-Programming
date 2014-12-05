var alert;
var diceRoll = function () {
        "use strict";
        return 1 + Math.floor(6 * Math.random());
    };
function rollDice() {
    "use strict";
    alert(diceRoll() + "\n"
        + diceRoll() + "\n"
        + diceRoll() + "\n"
        + diceRoll
        );
}
