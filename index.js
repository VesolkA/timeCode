let timerId; // переменная, которая будет хранить ID таймера

const startButton = document.getElementById("start");
startButton.addEventListener('click', function () {
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ setInterval
    if (!timerId) { // запускаем таймер только если он еще не запущен
      timerId = setInterval(updateClock, 1000);
  }// запускаем  updateClock() каждую секунду
});

const stopButton = document.getElementById("stop");
stopButton.addEventListener('click', function () {
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ clearInterval
    if (timerId) { // останавливаем таймер, если он запущен
      clearInterval(timerId);
      timerId = null; // сбрасываем ID таймера, чтобы можно было снова запустить
  }
});

function updateClock() {
    const clock = document.getElementById('clock');
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ new Date()
    const now = new Date();
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    clock.textContent = hours + ':' + minutes + ':' + seconds;
}
