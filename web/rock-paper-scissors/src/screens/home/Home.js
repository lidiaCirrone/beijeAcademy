import React from 'react';

// COMPONENTS
import UiButton from '../../components/funcComponents/ui/uiButton/UiButton';

// STYLES
import './Home.css';


function Home() {

   let game = {
      options: ['rock', 'paper', 'scissors'],
      outcomes: // possible outcomes, [whose score][player choice][cpu choice]
         [
            [
               [0, 0, 1],
               [1, 0, 0],
               [0, 1, 0]
            ],
            [
               [0, 1, 0],
               [0, 0, 1],
               [1, 0, 0]
            ]
         ],
      player: [],
      cpu: [],
      moves: 0,
      playerScore: 0,
      cpuScore: 0
   }

   function resetGame() {
      console.clear();
      game.player = [];
      game.cpu = [];
      game.moves = 0;
      game.playerScore = 0;
      game.cpuScore = 0;
   }

   function assignPoints(player, cpu) {
      game.playerScore += game.outcomes[0][player][cpu];
      game.cpuScore += game.outcomes[1][player][cpu];

      console.log('player:', game.options[player]);
      console.log('cpu:', game.options[cpu]);
      console.log(`player: ${game.outcomes[0][player][cpu]} - cpu: ${game.outcomes[1][player][cpu]}`);
      console.log(`TOTAL SCORE ${game.playerScore} - ${game.cpuScore}`);
      console.log('-');

      if (game.moves === 3) {
         if (game.playerScore === game.cpuScore) {
            alert('It\'s a tie!');
         } else if (game.playerScore > game.cpuScore) {
            alert('You won!');
         } else {
            alert('You lost :(');
         }
         resetGame();
      }
   }

   function randomPick() {
      let pick = Math.floor(Math.random() * game.options.length);
      return game.options[pick];
   }

   function cpuMove() {
      let cpuGame = randomPick();
      game.cpu.push(cpuGame);
      return cpuGame;
   }

   function playerMove(playerChoice) {
      game.player.push(playerChoice);
      let cpuChoice = cpuMove();
      game.moves++;
      let playerChoiceIndex = game.options.indexOf(playerChoice);
      let cpuChoiceIndex = game.options.indexOf(cpuChoice);
      assignPoints(playerChoiceIndex, cpuChoiceIndex);
   }

   return (
      <main>

         <UiButton
            label={game.options[0]}
            callback={playerMove}
         />

         <UiButton
            label={game.options[1]}
            callback={playerMove}
         />

         <UiButton
            label={game.options[2]}
            callback={playerMove}
         />

      </main>
   );
}

export default Home;
