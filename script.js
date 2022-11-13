import anime from 'animejs/lib/anime.es.js';

var animation = anime.timeline({
    autoplay: false
});

animation.add ({
    targets: '#btn',
    top: '1000px',
    duration: 500,
    easing: 'easeInOutSine'
})

.add ({
    targets: '#text',
    marginRight: -5000,
    duration: 1000,
    easing: 'easeInOutSine'
})


.add ({
    targets: '#sky',
    top: '0px',
    duration: 1000,
    easing: 'easeInOutSine'
})

.add ({
    targets: '#mountain_behind',
    bottom: '0px',
    duration: 1000,
    easing: 'easeInOutSine'
})

.add ({
    targets: '#sun',
    top: '0px',
    duration: 1000,
    easing: 'easeInOutSine'
})

.add ({
    targets: '#text2',
    marginRight: 200,
    bottom: '205',
    duration: 1000,
    easing: 'easeInOutSine'
})

.add ({
    targets: '#mountain_front',
    bottom: '0px',
    duration: 1000,
    easing: 'easeInOutSine'
})

.add ({
    targets: '#btn',
    top: '60%',
    left: '38%',
    duration: 500,
    easing: 'easeInOutBack'
})


document.querySelector('#btn').onclick = animation.play;