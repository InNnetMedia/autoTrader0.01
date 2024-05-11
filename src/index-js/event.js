const moreOptions = document.getElementById("car-more-options");
const hiddenGrid = document.querySelector(".grid2");
let moreOptionTxt = document.getElementById("more-less-options");
let hiddenGridVisible = false;

const category = document.getElementsByName("vehicle");
let currentCategory = category[0];
currentCategory.style.backgroundColor = "#0987eb";


category.forEach((element,index) => {
    element.addEventListener("click",() => {
        element.style.backgroundColor = "#0987eb";
        currentCategory.style.backgroundColor = "#0067ca";
        currentCategory = category[index];

    })
})




moreOptions.addEventListener("click", () => {
    if(!hiddenGridVisible){
        hiddenGrid.style.display = "grid";
        moreOptionTxt.textContent = "- Less Options";
        hiddenGridVisible = true;
    }else{
        hiddenGrid.style.display = "none";
        moreOptionTxt.textContent = "+ More Options";
        hiddenGridVisible = false;
    }
})