    // Get the DOM.
    const player1 = document.querySelector('.player-1');
    const player2 = document.querySelector('.player-2');
    const player1Time = document.querySelector('.player1 h1');
    const player2Time = document.querySelector('.player2 h1');
    const audio = document.querySelector('#clickSound');
    const resetBtn = document.querySelector('.btn');
    const customBtn = document.querySelector('.btn-custom');

    // get time time from the URL
    const indexOfTime1 = location.href.indexOf('=');
    const and = location.href.indexOf('&');
    const indexOfInc = location.href.lastIndexOf('=');
    const indexOfTime2 = location.href.indexOf('$');
    
    const getTime = +location.href.slice(indexOfTime1+1, and);
    const getInc = +location.href.substr(indexOfInc+1, 1) + 1;
    const getTime2 = +location.href.slice(indexOfTime2+1);

    let count = 0;

    // Get the total time in seconds
    let totalTimeForPlayer1 = getTime * 60;
    let totalTimeForPlayer2 = getTime2 * 60;

    let clear1;
    let clear2;
    
    // Events
    player1.addEventListener('click', (e) => {
        if (count !== 0) {
            totalTimeForPlayer1 += getInc;
            player1.innerHTML = displayTime(totalTimeForPlayer1);
            player2.innerHTML = displayTime(totalTimeForPlayer2--);
            
            player2.className = 'player-2 active';
            player1.className = 'player-1 disable';
            
            audio.play();
            audio.player1Time = 0;
            
            clear2 = setInterval(timeForPlayer2, 1000);
            clearInterval(clear1);
        } else {
            console.log('running  equal to from play 1');
            player2.className = 'player-2 active';
            player1.className = 'player-1 disable';

            audio.play();
            audio.player1Time = 0;

            clear2 = setInterval(timeForPlayer2, 1000);
            clearInterval(clear1);
        }
        count++;
        console.log(count);
    });
    
    player2.addEventListener('click', (e) => {
        if (count !== 0) {
            totalTimeForPlayer2 += getInc;
            player2.innerHTML = displayTime(totalTimeForPlayer2);
            player1.innerHTML = displayTime(totalTimeForPlayer1--);
            console.log(totalTimeForPlayer2);
            
            player1.className = 'player-1 active';
            player2.className = 'player-2 disable';
            
            audio.play();
            audio.player1Time = 0;
            
            clear1 = setInterval(timeForPlayer1, 1000);
            clearInterval(clear2);
        } else {
            console.log('running  equal to from play 2');
            player1.className = 'player-1 active';
            player2.className = 'player-2 disable';
            
            audio.play();
            audio.player1Time = 0;
            
            clear1 = setInterval(timeForPlayer1, 1000);
            clearInterval(clear2);
        }
        count++;
    });

    resetBtn.addEventListener('click', () => {
        location.reload();
    });

    // Functions
    function displayTime(s) {
        const min = Math.floor(s / 60);
        const finalMin = min < 10 ? `0${min}` : min;
        const sec = s % 60;
        const finalSec = sec < 10 ? `0${sec}` : sec;

        return `<h1>${finalMin}:${finalSec}</h1>`;
    }

    function timeForPlayer1() {
        player1.innerHTML = displayTime(totalTimeForPlayer1);
        if (totalTimeForPlayer1 === 0) {
            player1.className = 'player-2 timeup';
            return ''
        }
        totalTimeForPlayer1 -= 1;
    };

    timeForPlayer1();

    function timeForPlayer2() {
        player2.innerHTML = displayTime(totalTimeForPlayer2);
        if (totalTimeForPlayer2 === 0) {
            player2.className = 'player-2 timeup';
            return '';
        };

        totalTimeForPlayer2 -= 1;
    };

    timeForPlayer2();