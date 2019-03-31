const emptyEl = document.querySelector('[data-cell=emptyCell]');
// Создаём массив, откуда будем брать рандомный квадрат

function randomCountGenerator(){
  let randomCount = Math.random() * 15;
  randomCount = Math.round(randomCount);
  return randomCount;
}

const imgEl = document.createElement('div');
// imgEl.src = '../img/goblin.png'; // картинка
imgEl.id = 'goblin';

function goblinAnim(){
  if (document.getElementById('goblin') !== null){
    if (!Element.prototype.remove) {
      Element.prototype.remove = function remove() {
        if (this.parentNode) {
          this.parentNode.removeChild(this);
        }
      };
    }

    imgEl.remove();
  } 
  
  const randomPos = emptyEl.children[randomCountGenerator()];

  randomPos.appendChild(imgEl); // вставляем картинку в рандомное место 
}

const timer = setInterval(function() {
  goblinAnim();
}, 1000);
