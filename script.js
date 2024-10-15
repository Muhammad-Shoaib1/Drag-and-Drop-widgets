let lists = document.querySelectorAll(".list");
let rightBox = document.querySelector(".right");
let leftBox = document.querySelector(".left");

lists.forEach(list => {
  list.addEventListener("dragstart", function (e) {
    let selected = e.target;
    setTimeout(() => { selected.classList.add("hidden"); }, 0);

    rightBox.addEventListener("dragover", function (e) {
      e.preventDefault();
      rightBox.classList.add("over");
    });

    rightBox.addEventListener("dragleave", function () {
      rightBox.classList.remove("over");
    });

    rightBox.addEventListener("drop", function (e) {
      e.preventDefault();
      rightBox.classList.remove("over");
      rightBox.appendChild(selected);
      selected.classList.remove("hidden");
      selected = null;
    });

    leftBox.addEventListener("dragover", function (e) {
      e.preventDefault();
      leftBox.classList.add("over");
    });

    leftBox.addEventListener("dragleave", function () {
      leftBox.classList.remove("over");
    });

    leftBox.addEventListener("drop", function (e) {
      e.preventDefault();
      leftBox.classList.remove("over");
      leftBox.appendChild(selected);
      selected.classList.remove("hidden");
      selected = null;
    });
  });

  list.addEventListener("dragend", function () {
    list.classList.remove("hidden");
  });
});
