// Constants
const ROWS = 30;
const COLS = 40;

// State variables
let grid = [];
let running = false;
let intervalId = null;
let generation = 0;
let speed = 200;

// TODO: Initialize the grid with all dead cells (false)
// Create a 2D array of size ROWS x COLS
function initGrid() {
    // Your code here
}

// TODO: Create DOM elements for each cell and render the current grid state
// Each cell should have the class 'cell' and data attributes for row/col
// Add 'alive' class to cells where grid[i][j] is true
function renderGrid() {
    // Your code here
}

// TODO: Toggle a cell's state when clicked (only when not running)
// Get row and col from event target's dataset
// Update both the grid array and the DOM
function toggleCell(e) {
    // Your code here
}

// TODO: Count the number of live neighbors for a cell at (row, col)
// Check all 8 surrounding cells (including diagonals)
// Make sure to check array bounds
function countNeighbors(row, col) {
    // Your code here
    return 0;
}

// TODO: Calculate and render the next generation
// Rules:
// - Live cell with 2-3 neighbors: survives
// - Dead cell with exactly 3 neighbors: becomes alive
// - All other cells: die or stay dead
// Important: Create a new grid, don't modify the current one directly
function nextGeneration() {
    // Your code here
}

// TODO: Start the simulation
// Set running to true, disable/enable appropriate buttons
// Use setInterval to call nextGeneration at the current speed
function start() {
    // Your code here
}

// TODO: Stop the simulation
// Set running to false, enable/disable appropriate buttons
// Clear the interval
function stop() {
    // Your code here
}

// TODO: Clear the grid (only when not running)
// Reset all cells to dead and generation to 0
function clear() {
    // Your code here
}

// TODO: Generate a random pattern (only when not running)
// Set each cell to alive with ~30% probability
// Reset generation to 0
function randomize() {
    // Your code here
}

// TODO: Update the generation counter display
function updateGeneration() {
    // Your code here
}

// TODO: Update the speed and restart interval if running
function updateSpeed(value) {
    // Your code here
}

// Event listeners (already set up for you)
document.getElementById('startBtn').addEventListener('click', start);
document.getElementById('stopBtn').addEventListener('click', stop);
document.getElementById('clearBtn').addEventListener('click', clear);
document.getElementById('randomBtn').addEventListener('click', randomize);
document.getElementById('speedSlider').addEventListener('input', (e) => {
    updateSpeed(e.target.value);
});

// Initialize on load
initGrid();

