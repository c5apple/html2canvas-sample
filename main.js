"use strict";

(function () {
  document.getElementById('capture').addEventListener('click', async () => {
    const elements = document.getElementById("input");
    const options = {
      // see https://html2canvas.hertzen.com/configuration
      width: 300
    };

    await html2canvas(elements, options).then(canvas => {
      document.getElementById('output').appendChild(canvas)
    });
  });
})();
