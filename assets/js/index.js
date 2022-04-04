const mainElement = document.querySelector('main');

const metcast = [
    { day: 'Пн', date: 4, img: './assets/img/sun.jpg', temp: '+8' },
    { day: 'Вт', date: 5, img: './assets/img/rain.jpg', temp: '+6' },
    { day: 'Ср', date: 6, img: './assets/img/rain.jpg', temp: '+8' },
    { day: 'Чт', date: 7, img: './assets/img/sun.jpg', temp: '+10' },
    { day: 'Пт', date: 8, img: './assets/img/sun.jpg', temp: '+12' },
    { day: 'Сб', date: 9, img: './assets/img/rain.jpg', temp: '+7' },
    { day: 'Вс', date: 10, img: './assets/img/sun.jpg', temp: '+6' }
];

mainElement.innerHTML = weekComponent(metcast);