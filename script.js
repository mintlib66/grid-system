const container = document.querySelector(".container");
const items = document.querySelectorAll(".item");


//입력요소
const container_width = document.querySelector("#container-width");
const container_height = document.querySelector("#container-height");
const quantity = document.querySelector("#quantity");
const row_gap = document.querySelector("#row-gap");
const column_gap = document.querySelector("#column-gap");
const row_gap_unit = document.querySelector("#row-gap-unit");
const column_gap_unit = document.querySelector("#column-gap-unit");

const grid_template_rows = document.querySelector("#grid-template-rows");
const grid_template_columns = document.querySelector("#grid-template-columns");

const box_option_select = document.querySelectorAll(".option_select");
let box_selected = 0;
let item_quantity = [9, 1];


//함수
function updateContainerCSize(){
    container.style.width = `${container_width.value}`;
    container.style.height = `${container_height.value}`;
}
function updateGap(){
    container.style.rowGap = `${row_gap.value}${row_gap_unit.value}`;
    container.style.columnGap = `${column_gap.value}${column_gap_unit.value}`;
}
function updateTemplate(){
    container.style.gridTemplateRows = `${grid_template_rows.value}`;
    container.style.gridTemplateColumns = `${grid_template_columns.value}`;
}

function toggleSelect(event){
    box_option_select.forEach(select => 
        select.classList.remove("selected")
    );
    event.target.classList.add("selected");

    if(event.target.classList.contains("i0")){
        box_selected = 0;
        quantity.value = item_quantity[0];
    }else if(event.target.classList.contains("i1")){
        box_selected = 1;
        quantity.value = item_quantity[1];
    }
}

function updateItemQuantity(){
    let item_code = "";
    item_quantity[box_selected] = quantity.value;

    for(let i=0; i<item_quantity[0]; i++){
        item_code += `<div class="item"><span class="item-text">${i+1}</span></div>\n`;
    }
    for(let i=0; i<item_quantity[1]; i++){
        item_code += `<div class="item i1"><span class="item-text">${i+1}</span></div>\n`;
    }
    container.innerHTML = item_code;
}



//이벤트 리스너
container_width.addEventListener("input", updateContainerCSize);
container_height.addEventListener("input", updateContainerCSize);
quantity.addEventListener("input", updateItemQuantity);

row_gap.addEventListener("input", updateGap);
row_gap_unit.addEventListener("change", updateGap);
column_gap.addEventListener("input", updateGap);
column_gap_unit.addEventListener("change", updateGap);

grid_template_rows.addEventListener("input", updateTemplate);
grid_template_columns.addEventListener("input", updateTemplate);

box_option_select.forEach((select)=> select.addEventListener("click", toggleSelect));
quantity.addEventListener("input", updateItemQuantity);

