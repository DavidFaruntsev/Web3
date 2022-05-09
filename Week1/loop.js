const container = document.querySelector('main');


function makeRows(rows, cols) {

  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "slot";
  };
};

makeRows(6, 6);


