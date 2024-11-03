// Инициализация model-viewer внутри AR маркера с использованием A-Frame
AFRAME.registerComponent('html-model-viewer', {
    init: function () {
        // Создаем элемент <model-viewer>
        const modelViewer = document.createElement('model-viewer');
        modelViewer.setAttribute('src', 'models/test_motions_default.glb');
        modelViewer.setAttribute('ar', '');
        modelViewer.setAttribute('ar-modes', 'webxr scene-viewer quick-look');
        // modelViewer.setAttribute('camera-controls', '');
        modelViewer.setAttribute('autoplay', '');
        // modelViewer.setAttribute('auto-rotate', '');
        modelViewer.style.width = '100%';
        modelViewer.style.height = '100%';

        // Добавляем model-viewer внутрь a-entity
        this.el.appendChild(modelViewer);
    }
});

// Показ/скрытие AR-сцены при обнаружении маркера
const arScene = document.querySelector('a-scene');
const marker = document.querySelector('a-marker');

marker.addEventListener('markerFound', () => {
    arScene.style.display = 'block';  // Показать AR-сцену
});

marker.addEventListener('markerLost', () => {
    arScene.style.display = 'none';   // Скрыть AR-сцену
});