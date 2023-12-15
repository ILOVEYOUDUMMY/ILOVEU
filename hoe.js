document.getElementById('heartButton').addEventListener('click', displayLoveMessage);

function displayLoveMessage() {
    alert('I love you dumbfuck')

}

var cuteBackgrounds = [
    'url("nn.png")',
    'url("pppp.png")',
    'url("cum.png")',
    'url("pussy.png")',
    
  ];

  var currentBackground = 0;

  function changeBackground() {
    currentBackground = (currentBackground + 1) % cuteBackgrounds.length;
    document.body.style.backgroundImage = cuteBackgrounds[currentBackground];
  }