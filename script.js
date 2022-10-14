const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

// if you want an empty screen before you scroll, remove checkBoxes();
checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    // MDN for explanation of getBoundingClientRect()
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
