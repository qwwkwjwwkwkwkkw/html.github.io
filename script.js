function myFunction(){//定义函数
    alert("hello word");//显示hello word弹窗
    let userInput = prompt("请输入您的名字");//要求用户输入名字
    alert("你好:"+ userInput);//显示用户输入的名字
}

// 模拟进度条变化（该部分由通义千问生成）
document.addEventListener("DOMContentLoaded", function() {
    const notification = document.querySelector('.notification');
    const countdownElement = document.getElementById('countdown');
    let countdown = 5;

    // 设置定时器，在5秒后关闭通知
    const countdownInterval = setInterval(() => {
        if (countdown > 0) {
            countdown--;
            countdownElement.textContent = countdown;
        } else {
            clearInterval(countdownInterval);
            notification.style.display = 'none';
        }
    }, 1000);
});
