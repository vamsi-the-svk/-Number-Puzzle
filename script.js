const tiles = document.querySelectorAll('.tile');

let dragged = null;

tiles.forEach(tile => {
  tile.addEventListener('dragstart', function () {
    dragged = tile;
  });

  tile.addEventListener('dragover', function (e) {
    e.preventDefault(); // Needed to allow drop
  });

  tile.addEventListener('drop', function () {
    if (dragged !== this) {
      // Swap contents
      let temp = this.innerHTML;
      this.innerHTML = dragged.innerHTML;
      dragged.innerHTML = temp;
    }
  });
});
