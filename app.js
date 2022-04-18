let cardsArray = [
    { 'name': 'CSS', 'img': 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d', },
    {    'name': 'HTML',    'img': 'https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg',  },
    {    'name': 'jQuery',    'img': 'https://www.thegoodypet.com/wp-content/uploads/2020/10/Black-Cat-Breeds-3-1200x910.jpg',  },
    {    'name': 'JS',    'img': 'https://i.ytimg.com/vi/mZ_CDMyz374/maxresdefault.jpg',  },
    {    'name': 'Node',    'img': 'https://i.natgeofe.com/n/6490d605-b11a-4919-963e-f1e6f3c0d4b6/sumatran-tiger-thumbnail-nationalgeographic_1456276.jpg',  },
    {    'name': 'Photo Shop',    'img': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg',  },
    {    'name': 'PHP',    'img': 'https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg',  },
    {    'name': 'Python',    'img': 'https://www.bengalcats.co/wp-content/uploads/2017/02/thor-bengal-cat-1.jpg',  },
    {    'name': 'Ruby',    'img': 'https://www.aspcapetinsurance.com/media/2360/bengal-cat-facts.jpg',  },
    {    'name': 'Sass',    'img': 'https://images.squarespace-cdn.com/content/v1/53adb125e4b094aac18a8ee7/1471238222853-6B7BXX6FQN2XB7MPDEHF/ke17ZwdGBToddI8pDm48kIrItN_b4uSKg9KOuSlFp6JZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpw9bsp5IqLvX_9A1Z2sMdjklEn7Yye1_I_PnKM7Id3jC-tT4El-BrkuOKqKFZDNuRs/F1+Savannah+Cat',  },
    {    'name': 'Sublime',    'img': 'https://images.squarespace-cdn.com/content/v1/53adb125e4b094aac18a8ee7/1471469561799-RM9U016DQXSYF90KM78Q/ke17ZwdGBToddI8pDm48kMIbgE0a1Z-zE1popRzjSZVZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzd_mswhSykw5PXtPcwYd1Lm_ahcGVK87m5-sZwHA_jUzFD-prToDidOTVvwW3LKLo/F1hybridsSavannahs-August+14%2C+2016-6.jpg',  },
    {    'name': 'Wordpress',    'img': 'https://www.rover.com/blog/wp-content/uploads/2019/05/savannah-cat-big-ears.jpg',  },
    ];


let gameGrid = cardsArray.concat(cardsArray);

gameGrid.sort(function(){
    return 0.5 - Math.random();
})


let game = document.querySelector('#game-board');
let grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

for (i = 0; i < gameGrid.length; i++) {
    let card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = gameGrid[i].name;

    let front = document.createElement('div');
    front.classList.add('front');

    let back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage = `url(${gameGrid[i].img})`;

    
    // score.classList.add('score');

    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
    


};

let firstGuess = '';
let secondGuess = '';

let count = 0;
let previousTarget = null;
let delay = 1200;
let finish;




match = () => {
    let score = document.createElement('div');
    score.classList.add('score');
    let scoreDivs = document.querySelectorAll('.score');
    let scoreCount = scoreDivs.length;
    let selected = document.querySelectorAll('.selected');
    
    for (i = 0; i < selected.length; i++) {
        selected[i].classList.add('match');
        selected[i].classList.add('score');
        grid.appendChild(score);
        
        
    };
    if (scoreCount > 1) {
        
        endGame()
    }


};

endGame = () => {

    let winner = document.createElement('div');
    winner.classList.add('winner-pic');
    console.log("win")
    grid.appendChild(winner);
    // document.querySelector('winner-pic').style.display = "flex";
};


resetGuesses = () => {
    firstGuess = '';
    secondGuess = '';
    count = 0;
    previousTarget = null;

    let selected = document.querySelectorAll('.selected');
    for (i = 0; i < selected.length; i++) {
        selected[i].classList.remove('selected');
    }
};
grid.addEventListener('click', function(event) {
    let clicked = event.target;
    if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('match') || clicked.parentNode.classList.contains('selected')) {
        return;
    }
    if (count < 2) {
        count++;
        
        if (count === 1) {
            firstGuess = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add('selected');
            
        }else {
            secondGuess = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add('selected');
            if (firstGuess != ''&& secondGuess != '') {
                if (firstGuess === secondGuess) {
                    setTimeout(match, delay);
                    setTimeout(resetGuesses, delay);
                    
                    // if (firstGuess || secondGuess === finish) {
                        if (event > 1) {
                            console.log("finish");
                        }
                        // endGame();
                        // console.log('Finish')
                    // }
                }else {
                    setTimeout(resetGuesses, delay);
                    
                    
                    
                }
                
                

            }
            previousTarget = clicked;
            

        }
    }

}
);

// gemeEnd = () => {
// console.log('finished');
    
//     finish = document.querySelectorAll('.card');
    
// if ((background = '#6589F9')) {
//     console.log("finished");
// };

// };




