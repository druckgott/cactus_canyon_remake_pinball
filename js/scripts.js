// 1. Mermaid mit den ausgelagerten Daten füllen
const container = document.getElementById('mermaid-container');
if (container) {
    container.textContent = GameData.mermaidDefinition;
}
// 2. Slider Logik (unverändert)
const slider = document.getElementById('comparison-slider');
const overlay = document.getElementById('overlay-div');
if(slider) {
    slider.addEventListener('input', (e) => {
        overlay.style.width = e.target.value + "%";
    });
}
// 3. Marker Logik (nutzt jetzt GameData)
function onNodeClick(nodeId) {
    const data = GameData.coordinates[nodeId]; // Greift auf data.js zu
    const marker = document.getElementById('marker');
   
    if (data && marker) {
        marker.style.left = data.x + "%";
        marker.style.top = data.y + "%";
       
        marker.classList.remove('hidden');
        marker.classList.remove('pulse-animation');
       
        void marker.offsetWidth; // Trigger Reflow für Neustart der Animation
       
        marker.classList.add('pulse-animation');
       
        setTimeout(() => {
            marker.classList.add('hidden');
        }, 3000);
    }
}
 