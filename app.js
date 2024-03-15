/* The checkpoints for this app:
    -create a function to create divs and append them to the grid
        + take x amount of columns
        + on each column, fill with the number of rows 
        + append the column to the grid
    -create a function to handle forms for increases and decreases in grid size.
        + take the desired numbers from a form
         and use gridCreator
        + handle resizing of grid boxes so that boxes
         shrink when a large amount is created.
        + set the minimum to 2 and determine max amount   
    -create a function to change the color of boxes that are selected. 
        + set a hover eventlistener to each box
        + on click, set the desired color
        + on hover, change the background color to the desired color
    -create a gradient function that increases darkness by 10% intervals
        + on click, change the background of the button to show it is active
        + change the set color to rgba and set a to 10%
    -create a rainbow paint function
        + on click, change the background of the button to show it is active
        + change the set color to a randomizer 
            *randomizer uses math.random for each rgb (0-255) setting
    -create an erase and reset function
*/
const grid = document.querySelector('.grid');
const gridCreator = function(numOfBoxes,classTarget){
    for(let i = 1; i<=numOfBoxes;i++){
        const newCol = document.createElement('div');
        newCol.classList.add(`column-${i.toString()}`);
        grid.appendChild(newCol);
        for(let n = 1; n<=numOfBoxes;n++){
            createDiv(`box-${n.toString()}`,`column-${i.toString()}`);
        }
    }
}
const createDiv = function(str='0',classTarget){
    const newDiv = document.createElement("div");
    newDiv.classList.add("grid-block",`${str}`);
    document.querySelector('.'+classTarget).appendChild(newDiv);
}
gridCreator(16,'grid');