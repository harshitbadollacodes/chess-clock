let buttons = document.querySelectorAll('button');
let submitBtn = document.querySelector('form');
let customBtn = document.querySelector('.btn-custom');
let form = document.querySelector('form');

function timeForPlayers(t1, t2, i) {
    return location.assign(`./clock.html?time1=${t1}&inc=${i}&time2$${t2}`);
}

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (!button.classList.contains('btn-custom')) {
            let time = e.target.dataset.time;
            let inc = e.target.dataset.inc;
            timeForPlayers(time, time, inc);
        }
    });
});

submitBtn.addEventListener('submit', (e) => {
    e.preventDefault();
    let time1 = e.target.elements.p1.value;
    let time2 = e.target.elements.p2.value;
    let inc = e.target.elements.inc.value;
    timeForPlayers(time1, time2, inc);
});

customBtn.addEventListener('click', (e) => {
    form.className = 'show';
}); 

