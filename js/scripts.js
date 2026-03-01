// js/scripts.js

document.addEventListener('DOMContentLoaded', () => {

  // ===============================
  // 1️⃣ Alle Playfield-Bilder anklickbar machen (Modal)
  // ===============================
  document.querySelectorAll('.playfield-img').forEach(div => {
    const imgUrl = div.dataset.img;
    div.style.backgroundImage = `url(${imgUrl})`;
    div.addEventListener('click', () => {
      const modalImg = document.getElementById('modalImage');
      modalImg.src = imgUrl;
      const modal = new bootstrap.Modal(document.getElementById('imageModal'));
      modal.show();
    });
  });


  // ===============================
  // 2️⃣ Commit-Info + aktuelles Jahr
  // ===============================
  document.getElementById('year').textContent = new Date().getFullYear();

  fetch('commit.txt')
    .then(response => response.text())
    .then(text => {
      const shortHash = text.trim().slice(0, 7);
      document.getElementById('commit-info').innerText = `🔧Commit: ${shortHash}`;
    })
    .catch(err => {
      console.error('Could not load commit.txt:', err);
      document.getElementById('commit-info').innerText = 'Commit info not available';
    });


  // ===============================
  // 3️⃣ Druckbilder unter Tabellenzeilen einfügen
  // ===============================
  document.querySelectorAll('.phase-table tbody tr').forEach(tr => {
    const imgDiv = tr.querySelector('td:nth-child(2) .playfield-img');
    const firstTd = tr.querySelector('td:first-child');

    if (imgDiv && firstTd) {
      const printImg = document.createElement('img');
      printImg.src = imgDiv.dataset.img;
      printImg.classList.add('print-img'); // nur für Druck
      firstTd.appendChild(printImg);
    }
  });


  // ===============================
  // 4️⃣ Bildskalierung über Input steuern
  // ===============================
  const imgScaleInput = document.getElementById('img-scale');

  function updatePrintScale() {
    const val = imgScaleInput.value;
    document.documentElement.style.setProperty('--print-img-scale', val + 'vh');
  }

  if (imgScaleInput) {
    imgScaleInput.addEventListener('input', updatePrintScale);
    updatePrintScale(); // initial
  }


  // ===============================
  // 5️⃣ Druckbutton
  // ===============================
  const printBtn = document.getElementById('print-btn');
  if (printBtn) {
    printBtn.addEventListener('click', () => window.print());
  }

});