# Conway's Game of Life - Coding Challenge

## Overview
Implement Conway's Game of Life, a cellular automaton simulation where cells live, die, or multiply based on simple rules. This challenge tests your ability to work with 2D arrays, implement algorithms, and handle DOM manipulation.

## The Rules
Conway's Game of Life follows these rules for each generation:

1. **Survival**: A live cell with 2 or 3 live neighbors survives to the next generation
2. **Death by Isolation**: A live cell with fewer than 2 live neighbors dies
3. **Death by Overcrowding**: A live cell with more than 3 live neighbors dies
4. **Birth**: A dead cell with exactly 3 live neighbors becomes alive

Neighbors are the 8 cells surrounding a given cell (horizontally, vertically, and diagonally).

## Requirements

### Grid
- Create a 30×40 grid of cells
- Each cell can be either alive (filled) or dead (empty)
- Users should be able to click cells to toggle them on/off when the simulation is stopped

### Controls
Implement the following buttons:
- **Start**: Begin the simulation (advance generations automatically)
- **Stop**: Pause the simulation
- **Clear**: Reset the grid to all dead cells
- **Random**: Fill the grid with a random pattern

### Additional Features
- **Speed Control**: A slider to adjust simulation speed (50ms to 1000ms between generations)
- **Generation Counter**: Display the current generation number
- **Button States**: Disable/enable buttons appropriately (e.g., can't clear while running)

## Technical Specifications

### Grid Dimensions
- Rows: 30
- Columns: 40
- Cell size: 15px × 15px

### Data Structure
- Use a 2D array to represent the grid state
- `true` = alive cell, `false` = dead cell

### Algorithm
- For each generation, calculate the next state based on the current state
- Count neighbors for each cell (check all 8 surrounding cells)
- Apply the rules to determine which cells live or die
- Update the entire grid simultaneously (don't update cells one at a time)

## Files Provided

### `index.html`
Complete HTML structure with all necessary elements and IDs

### `style.css`
Complete styling - no changes needed

### `script.js`
Starter code with:
- Constants and variables declared
- Function stubs for you to implement
- Event listeners already set up

## What You Need to Implement

Complete the following functions in `script.js`:

1. **`initGrid()`** - Initialize the grid array with all dead cells
2. **`renderGrid()`** - Create DOM elements for the grid and render current state
3. **`toggleCell(e)`** - Toggle a cell's state when clicked
4. **`countNeighbors(row, col)`** - Count live neighbors for a given cell
5. **`nextGeneration()`** - Apply Game of Life rules and update the grid
6. **`start()`** - Begin the simulation
7. **`stop()`** - Pause the simulation
8. **`clear()`** - Reset the grid
9. **`randomize()`** - Generate a random pattern
10. **`updateGeneration()`** - Update the generation counter display
11. **`updateSpeed(value)`** - Handle speed slider changes

## Tips

- Remember to create a **new grid** for the next generation rather than modifying the current one in place
- Don't forget to check array bounds when counting neighbors
- Use `setInterval` for automatic generation advancement
- Make sure to clear intervals when stopping

## Evaluation Criteria

Your solution will be evaluated on:
- **Correctness**: Does it follow the Game of Life rules accurately?
- **Code Quality**: Is the code clean, readable, and well-organized?
- **Edge Cases**: Does it handle boundary conditions properly?
- **User Experience**: Do the controls work smoothly?
- **Efficiency**: Is the algorithm reasonably performant?

## Time Limit
You have **20-30 minutes** to complete this challenge.

## Testing Your Solution

Try these patterns to verify your implementation:
- **Blinker**: 3 horizontal cells that oscillate between horizontal and vertical
- **Glider**: A 5-cell pattern that moves across the grid diagonally
- **Block**: A 2×2 square that remains stable

Good luck!