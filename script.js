const tiles = document.querySelectorAll('.tile');

let dragged = null;

tiles.forEach(tile => {
  tile.addEventListener('dragstart', function () {
    dragged = tile;
  });

  tile.addEventListener('dragover', function (e) {
    e.preventDefault(); 
  });

  tile.addEventListener('drop', function () {
    if (dragged !== this) {
      let temp = this.innerHTML;
      this.innerHTML = dragged.innerHTML;
      dragged.innerHTML = temp;
    }
  });
});
