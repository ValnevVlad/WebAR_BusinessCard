const video = document.getElementById('video');
const modelViewer = document.getElementById('arModel');

// Запрос на доступ к камере
navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
    .then(stream => {
        video.srcObject = stream;
        video.play();
        scanFrame(); // Запуск функции для анализа кадров
    })
    .catch(err => {
        console.error("Ошибка доступа к камере:", err);
    });

// Функция для захвата и анализа каждого кадра
function scanFrame() {
    if (video.readyState === video.HAVE_ENOUGH_DATA) {
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height);

        if (code) {
            // Если QR-код обнаружен, отображаем модель
            modelViewer.style.display = 'block';
            video.style.display = 'none';
        } else {
            requestAnimationFrame(scanFrame);
        }
    } else {
        requestAnimationFrame(scanFrame);
    }
}