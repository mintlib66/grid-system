const container = document.querySelector(".container");
const items = document.querySelectorAll(".item");

const quantity = document.querySelector("#quantity");
const row_gap = document.querySelector("#row-gap");
const column_gap = document.querySelector("#column-gap");
const row_gap_unit = document.querySelector("#row-gap-unit");
const column_gap_unit = document.querySelector("#column-gap-unit");

let item_quantity = 9;

//함수
function updateItemQuantity(){
    let item_code = "";
    for(let i=0; i<quantity.value; i++){
        item_code += `<div class="item"><span class="item-text">${i+1}</span></div>\n`;
    }
    container.innerHTML = item_code;
}
function updateGap(){
    container.style.rowGap = `${row_gap.value}${row_gap_unit.value}`;
    container.style.columnGap = `${column_gap.value}${column_gap_unit.value}`;
}

//이벤트 리스너
quantity.addEventListener("input", updateItemQuantity);

row_gap.addEventListener("input", updateGap);
row_gap_unit.addEventListener("change", updateGap);
column_gap.addEventListener("input", updateGap);
column_gap_unit.addEventListener("change", updateGap);
