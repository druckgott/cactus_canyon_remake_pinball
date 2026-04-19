const slider = document.getElementById('comparison-slider');
const overlay = document.getElementById('overlay-div');
let markerTimeout; // Variable außerhalb speichern, um Timer zu resetten

if (slider) {
    slider.addEventListener('input', (e) => {
        overlay.style.width = e.target.value + "%";
    });
}

function onNodeClick(nodeId) {
    // FIX 1: Pfad anpassen (playfieldCoords statt playfieldCoords.coordinates)
    const data = playfieldCoords[nodeId]; 
    const marker = document.getElementById('marker');

    if (data && marker) {
        // Position setzen
        marker.style.left = data.x + "%";
        marker.style.top = data.y + "%";

        // Animation zurücksetzen
        marker.classList.remove('hidden');
        marker.classList.remove('pulse-animation');
        
        // Trick: Reflow erzwingen, damit die Animation neu startet
        void marker.offsetWidth; 

        marker.classList.add('pulse-animation');

        // FIX 2: Bestehenden Timer löschen, falls man schnell nacheinander klickt
        if (markerTimeout) clearTimeout(markerTimeout);

        markerTimeout = setTimeout(() => {
            marker.classList.add('hidden');
        }, 3000);
    }
}