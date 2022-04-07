import React from 'react';

// COMPONENTS
import UiButton from '../../components/funcComponents/ui/uiButton/UiButton';

// STYLES
import './Home.css';


function Home() {

   let game = {
      options: ['rock', 'paper', 'scissors'],
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
      console.log('player:', player);
      console.log('cpu:', cpu);

      if (player === 'rock') {
         // if player chooses rock
         if (cpu === 'paper') {
            game.cpuScore++;
         } else if (cpu === 'scissors') {
            game.playerScore++;
         }
      } else if (player === 'paper') {
         // if player chooses paper
         if (cpu === 'scissors') {
            game.cpuScore++;
         } else {
            game.playerScore++;
         }
      } else if (player === 'scissors') {
         // if player chooses scissors
         if (cpu === 'rock') {
            game.cpuScore++;
         } else {
            game.playerScore++;
         }
      }

      console.log(`player: ${game.playerScore} - cpu: ${game.cpuScore}`);
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
      assignPoints(playerChoice, cpuChoice);
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
