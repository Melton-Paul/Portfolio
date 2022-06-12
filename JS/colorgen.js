const genColors = document.getElementById("generateColors");
const colorContainer = document.getElementById("colorContainer");
const colorLabels = document.getElementById("colorLabelsContainer");
let colorArray = [];

function renderColor() {
  colorHtml = colorArray
    .map((color) => {
      return `<div class=color id="${color}" style="background:${color}"></div>`;
    })
    .join(``);
  colorLabelHtml = colorArray
    .map((color) => {
      return `<label for="${color}" class="colorLabel">${color}</label>`;
    })
    .join(``);
  colorContainer.innerHTML = colorHtml;
  colorLabels.innerHTML = colorLabelHtml;
}

function getData(data) {
  colorArray = data.colors.map((item) => {
    return item.hex.value;
  });
}

fetch("https://www.thecolorapi.com/scheme?hex=F55A5A&mode=monochrome")
  .then((res) => res.json())
  .then((data) => {
    getData(data);
    renderColor();
  });

genColors.addEventListener("click", function () {
  const colorTheme = document.getElementById("colorTheme").value;
  let colorWheel = document.getElementById("colorWheel").value;
  const regexp = new RegExp("#");
  colorWheel = colorWheel.replace(regexp, ``);

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorWheel}&mode=${colorTheme}`
  )
    .then((res) => res.json())
    .then((data) => {
      getData(data);
      renderColor();
    });
});
