// Task 1: Verification Log
console.log("Status Manager Started");

// Global variable for timer
let intervalId = null;

// DOM selections
const mainTitle = document.querySelector("#main-title");
const toggleButton = document.getElementById("toggle-button");
const statusOutput = document.querySelector("#status-output");
const timerButton = document.getElementById("timer-button");
const controlPanel = document.getElementById("control-panel");

/* ======================================= */
// Task 3: Modify Content on Load
mainTitle.innerHTML = "DOM Project: Ready!";

/* ======================================= */
// Task 4: Attribute Modification
toggleButton.setAttribute("data-action", "status-toggle");

/* ======================================= */
// Task 9: Highlight List Items
function highlightListItems() {
  const items = document.querySelectorAll("#item-list li");

  items.forEach(function (item) {
    item.style.color = "blue";
  });
}

// Run on load
highlightListItems();

/* ======================================= */
// Task 8: Create Timestamp
function createTimestamp() {
  const span = document.createElement("span");
  span.innerHTML = "Updated at: " + new Date().toLocaleTimeString();
  statusOutput.appendChild(span);
}

/* ======================================= */
// Tasks 5, 6, 7: Toggle Function
function toggleStatus(e) {
  // Task 6: Prevent default anchor behavior
  e.preventDefault();

  // Toggle visibility
  statusOutput.classList.toggle("hidden");

  // Check visibility
  const isVisible = !statusOutput.classList.contains("hidden");

  if (isVisible) {
    // Task 7: Change background
    mainTitle.style.backgroundColor = "yellow";

    // Task 8: Add timestamp
    createTimestamp();
  } else {
    mainTitle.style.backgroundColor = "";
  }
}

// Event listener
toggleButton.addEventListener("click", toggleStatus);

/* ======================================= */
// Task 10: Timer Functions
function startFlashing() {
  if (intervalId !== null) return; // prevent multiple timers

  intervalId = setInterval(() => {
    controlPanel.classList.toggle("hidden");
  }, 500);
}

function stopFlashing() {
  clearInterval(intervalId);
  intervalId = null;
}

// Event bindings
timerButton.addEventListener("click", startFlashing);
timerButton.addEventListener("dblclick", stopFlashing);