document.addEventListener("DOMContentLoaded", () => {
    const modelViewer = document.getElementById("ar-model");
    const audioPlayer = document.getElementById("background-audio");

    // Инициализация MindAR
    const mindArViewer = new MindAR.ImageTarget({
        container: document.getElementById("ar-container"),
        imageTargetSrc: "assets/marker.mind"
    });

    // Событие при обнаружении метки
    mindArViewer.on("targetFound", () => {
        modelViewer.style.display = "block";  // Показать 3D модель
        audioPlayer.play();                   // Воспроизвести аудио
    });

    // Событие при потере метки
    mindArViewer.on("targetLost", () => {
        modelViewer.style.display = "none";   // Скрыть 3D модель
        audioPlayer.pause();                  // Остановить аудио
    });

    // Запуск AR просмотра
    mindArViewer.start();
});