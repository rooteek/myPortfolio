let btn = document.getElementById("next-btn");
let rArrow = document.getElementById("arrow");

// btn.addEventListener('mouseenter', function () {
//     // rArrow.style.display = "inline";
//     // rArrow.style.transition ="display 0.5s"
// })
// btn.addEventListener('mouseleave', function () {

//     // document.getElementById("arrow").style.display = "none";
// })


let dropDronHeading = document.getElementById("heading-click");
let headingMenu = document.getElementById("heading-menu-id");
dropDronHeading.addEventListener('click', function () {
    // console.log("click")
    dropDronHeading.classList.toggle("heading-rotate");
    // console.log(headingMenu)
    headingMenu.classList.toggle("heading-menu-show");
});
