// Select all `.box` elements on the page.
const boxes = document.querySelectorAll('.box');

// Add a scroll event listener to the window.
window.addEventListener('scroll', checkBoxes);

// Call the checkBoxes() function on page load.
checkBoxes();

function checkBoxes() {
  // Calculate the trigger bottom value.
  const triggerBottom = window.innerHeight / 5 * 4;

  // Iterate over the `boxes` NodeList and animate each box.
  boxes.forEach(box => {
    // Calculate the top position of the box.
    const boxTop = box.getBoundingClientRect().top;

    // If the box's top position is less than the trigger bottom value, add the `show` class to the box.
    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      // Otherwise, remove the `show` class from the box.
      box.classList.remove('show');
    }
  });
}
