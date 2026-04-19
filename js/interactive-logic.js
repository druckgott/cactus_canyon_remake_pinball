const slider = document.getElementById('comparison-slider');
const overlay = document.getElementById('overlay-div');

if (slider) {
    slider.addEventListener('input', (e) => {
        overlay.style.width = e.target.value + "%";
    });
}

function onNodeClick(nodeId) {
    const data = GameData.coordinates[nodeId];
    const marker = document.getElementById('marker');

    if (data && marker) {
        marker.style.left = data.x + "%";
        marker.style.top = data.y + "%";

        marker.classList.remove('hidden');
        marker.classList.remove('pulse-animation');

        void marker.offsetWidth;

        marker.classList.add('pulse-animation');

        setTimeout(() => {
            marker.classList.add('hidden');
        }, 3000);
    }
}