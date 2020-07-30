function playGame(argPlayerInput) {
  let randomNumber = Math.floor(Math.random() * 3 + 1);

  /*if(randomNumber == 1) {
    computerMove = 'kamień';
  }
  else if (randomNumber  == 2) {
      computerMove = 'papier';
  }
  else if (randomNumber  == 3) {
      computerMove = 'nożyce';
  }
  printMessage ('Mój ruch to: ' + computerMove);*/

  let computerMove = getMoveName(randomNumber);

  /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

  /*if(playerInput == '1'){
    playerMove = 'kamień';
  }
  else if (playerInput =='2'){
    playerMove ='papier' ;
    }
  else if (playerInput =='3') {
    playerMove ='nożyce' ;
  }

  printMessage('Twój ruch to: ' + playerMove);*/

  let playerMove = getMoveName(randomNumber);

  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return 'kamień';
    }
    else if (argMoveId == 2) {
      return 'papier';
    }
    else if (argMoveId == 3) {
      return 'nożyce';
    }
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
  function displayResult(argComputerMove, argPlayerMove) {
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
      printMessage('Ty wygrywasz!');
    }
    else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
      printMessage('Ty przegrywasz!');
    }
    else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
      printMessage('Remis! Zagrajmy jeszcze raz!');
    }
    else if (argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch') {
      printMessage('Wybierz 1, 2 lub 3!');
    }
    if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
      printMessage('Ty wygrywasz!');
    }
    else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
      printMessage('Ty przegrywasz!');
    }
    else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
      printMessage('Remis! Zagrajmy jeszcze raz!');
    }
    else if (argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch') {
      printMessage('Wybierz 1, 2 lub 3!');
    }
    if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
      printMessage('Ty wygrywasz!');
    }
    else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
      printMessage('Ty przegrywasz!');
    }
    else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
      printMessage('Remis! Zagrajmy jeszcze raz!');
    }
    else if (argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch') {
      printMessage('Wybierz 1, 2 lub 3!');
    }
  }
clearMessages();
displayResult(computerMove, playerMove);
}


document.getElementById('play-rock').addEventListener('click', function () {
  playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function () {
  playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function () {
  playGame(3);
});



