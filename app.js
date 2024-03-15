const grid = document.querySelector('.grid');
const gridCreator = function(row,column){
    for(let i = 0; i<row*column;i++){
        continue;
    }
}
const createDiv = function(str='0'){
    const newDiv = document.createElement("div")
    newDiv.classList.add("grid-block",`${str}`);
    grid.appendChild(newDiv);
}