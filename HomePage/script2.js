// script.js
function moveCar(language) {
    const car = document.getElementById('car');
    const infoDisplay = document.getElementById('infoDisplay');
    
    switch (language) {
        case 'EN':
            car.style.transform = 'translateX(0px)';
            infoDisplay.textContent = 'Information in English...';
            break;
        case 'JP':
            car.style.transform = 'translateX(100px)';
            infoDisplay.textContent = '情報は日本語で...';
            break;
        case 'CN':
            car.style.transform = 'translateX(200px)';
            infoDisplay.textContent = '信息以中文显示...';
            break;
    }
}
