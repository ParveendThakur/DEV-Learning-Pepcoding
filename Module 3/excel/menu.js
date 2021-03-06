let bold = document.querySelector(".bold");
let italic = document.querySelector(".italic");
let underline = document.querySelector(".underline");

bold.addEventListener("click",function(){
    setFontStyle("bold",bold);
})

italic.addEventListener("click",function(){
    setFontStyle("italic",italic);
})

underline.addEventListener("click",function(){
    setFontStyle("underline",underline);
})


function setFontStyle(StyleName,element){
    if(lastSelectedCell){
        let {rowId,colId} = getRowIdColIdFromElement(lastSelectedCell);
        let cellObject = db[rowId][colId];
        if(cellObject.fontStyle[styleName]){
            if(styleName == "bold"){
                lastSelectedCell.style.fontWeight = "normal";
            }else if(styleName == "italic"){
                lastSelectedCell.style.fontStyle = "normal";
            }else{
                lastSelectedCell.style.textDecoration = "none";

            }
        }else{
            if(styleName == "bold"){
                lastSelectedCell.style.fontWeight = "bold";
            }else if(styleName == "italic"){
                lastSelectedCell.style.fontStyle = "italic"
            }else{
                lastSelectedCell.style.textDecoration = "underline";
            }
        }
        cellObject.fontStyle[styleName] = !cellObject.fontStyle[styleName];

    }
}