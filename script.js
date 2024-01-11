const resort = document.querySelector(`.collection1`);

resort.addEventListener(`mouseover`, (e) => {
    const target = e.target;
    const img = document.querySelector(`.resort`);
    const name = document.querySelector(`.name1`);
    
    if (target.className === `resort` || target.className === `name1`) {
        img.style.opacity = '0.5';
        name.style.opacity = `1`;
    }
});

resort.addEventListener('mouseout', (e) => {
    const img = document.querySelector('.resort');
    const name = document.querySelector(`.name1`);
    img.style.opacity = '1';
    name.style.opacity = `0`;
});

const fall = document.querySelector('.collection2');

fall.addEventListener('mouseover', (e) => {
    const target = e.target;
    const img = document.querySelector('.fall');
    const name = document.querySelector('.name2');
    
    if (target.className === 'fall' || target.className === 'name2') {
        img.style.opacity = '0.5';
        name.style.opacity = '1';
    }
});

fall.addEventListener('mouseout', (e) => {
    const img = document.querySelector('.fall');
    const name = document.querySelector('.name2');
    img.style.opacity = '1';
    name.style.opacity = '0';
});
