document.body.addEventListener('click', showNextText);  // 確保這行代碼在 script.js 中

let currentIndex = 1;

function showNextText() {
    let currentText = document.getElementById(`text${currentIndex}`);
    let nextText = document.getElementById(`text${currentIndex + 1}`);

    if (currentText) {
        currentText.style.display = 'none';  // 隱藏當前顯示的段落
    }

    if (nextText) {
        nextText.style.display = 'block';  // 顯示下一段
        currentIndex++;
    } else {
        // 如果沒有下一段，顯示輸入和按鈕
        document.getElementById('email').style.display = 'block';
        document.getElementById('subscribe').style.display = 'block';
    }
}

function subscribe() {
    let email = document.getElementById('email').value;
    console.log(`訂閱郵件: ${email}`);  // 日後可擴展成發送郵件到伺服器
}
