// Text Adventure Game
const start = `WELCOME TO THE INDIANA JONES TEXT ADVENTURE GAME! Please press return to start the game.`;

const enter = "Please enter 1 or 2 for your answer";

const gameOver = "Sorry GAME OVER!";

const q1 = `You are trying to steal a golden idol from an Aztec temple. Should you...
1. Just grab the idol and run
OR
2. Quickly grab the idol and replace it with a bag of sand
${enter}`;

const gameOver1 = `You are immediately hit with a poison dart. ${gameOver}`;

const q2 = `The temple is crumbling down as you attempt to escape. You come to a large gap you must cross. Should you...
1. Just try to jump across
OR
2. Grab the rope and swing across
${enter}`;

const gameOver2 = `The rope snaps and you fall to your death. ${gameOver}`;

const q3 = `You are almost out! However, a giant boulder has been released behind you and it's coming fast! Should you...
1. Run as fast as you can to out run the boulder
OR
2. Try to get out of the way of the boulder and let it pass you by
${enter}`;

const gameOver3 = `You trip and fall when trying to get out of the way and the boulder crushes you. ${gameOver}`;

const q4 = `You escape the temple alive, but the idol is taken from you. Later you are confronted by expert swordsman who is ready to attack you. Should you...
1. Use your whip to fight
OR
2. Just shoot him with your gun
${enter}`;

const gameOver4 = `Despite your incredible whip skills, they are no match for his elite sword skills. You lose the fight and your life. ${gameOver}`;

const q5 = `You shoot the swordsman and win the fight. However, you are captured and the villains have stolen the Lost Ark of the Covenant and they are about to open it. Should you...
1. Turn away and close your eyes
OR
2. Look into the Ark when it is opened
${enter}`;

const gameOver5 = `You looked at the Ark and melted like butter in a microwave! ${gameOver}`;

const win = `When the Ark opened the villains were literally melted! It was crazy, but thankfully you had your eyes closed and were not affected.
CONGRATULATIONS! THE VILLAINS HAVE BEEN DEFEATED AND YOU HAVE WON!!!`;

// Alerts the user to start the game
alert(start);

// Sets the value of userInput to the user's entry
let userInput = prompt(q1);

// NESTED CONDITIONAL STATEMENTS
// 1ST Conditional Statement
// NOTE: Prompts return the value entered as a string. That is why double equals == is used instead of triple equals (AKA Strict Equality)
if (userInput == 1){
  userInput = prompt(q2);

  // 2ND Conditional Statement
  if (userInput == 1){
    userInput = prompt(q3);

    // 3RD Conditional Statement
    if (userInput == 2){
      userInput = prompt(q4);

      // 4TH Conditional Statement
      if (userInput == 1){
        userInput = prompt(q5);

        // 5TH Conditional Statement
        if (userInput == 2){
          alert(win);
        } else {
          alert(gameOver5);
        }

      } else {
        alert(gameOver4);
      }

    } else {
      alert(gameOver3);
    }

  } else {
    alert(gameOver2);
  }

} else {
  alert(gameOver1);
}