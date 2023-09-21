const $select = document.querySelectorAll('.select');

$select.forEach(select => { select.addEventListener('click', startGame); });

function startGame(event) {
  const $gameResult = document.querySelector('#gameResult');
  
  const playerOption = setPlayerOption(event);
  const computerOption = setComputerOption();
  
  if(playerOption === computerOption) {
    $gameResult.innerHTML = `Jogador escolheu ${playerOption}, o computador escolheu ${computerOption}. Houve um empate!`;
    return;
  }
  if(playerOption === 'pedra' && computerOption === 'tesoura') {
    $gameResult.innerHTML = `Jogador escolheu ${playerOption}, o computador escolheu ${computerOption}. Jogador venceu! &#x1F973;&#x1F973;&#x1F973;`;
    return;
  }
  if(playerOption === 'tesoura' && computerOption === 'papel') {
    $gameResult.innerHTML = `Jogador escolheu ${playerOption}, o computador escolheu ${computerOption}. Jogador venceu! &#x1F973;&#x1F973;&#x1F973;`;
    return;
  }
  if(playerOption === 'papel' && computerOption === 'pedra') {
    $gameResult.innerHTML = `Jogador escolheu ${playerOption}, o computador escolheu ${computerOption}. Jogador venceu! &#x1F973;&#x1F973;&#x1F973;`;
    return;
  }
  $gameResult.innerHTML = `Jogador escolheu ${playerOption}, o computador escolheu ${computerOption}. Computador venceu! &#x1F973;&#x1F973;&#x1F973;`;
}
  
function setPlayerOption(event) {
  const playerOption = event.target.id;
  
  return playerOption;
}
  
function setComputerOption() {
  const options = ['pedra', 'papel', 'tesoura'];
  const randomNumber = Math.floor(Math.random() * 3);
  const computerOption = options[randomNumber];
    
  return computerOption;
}