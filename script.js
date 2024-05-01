const tabsBtns = document.querySelectorAll(".tabs-nav button" );
const tabsitem = document.querySelectorAll(".tabs-item");
// скрытие табов
function hidetabs() {
    tabsitem.forEach(item =>item.classList.add("hide"));
    tabsBtns.forEach(item =>item.classList.remove("active"));
}
// делает кнопку активной
function showtab(index) {
    tabsitem[index].classList.remove("hide");
    tabsBtns[index].classList.add("active");
}
hidetabs();
showtab(0)
tabsBtns.forEach((btn , index)=>btn.addEventListener("click",()=> {
    hidetabs();
    showtab(index);
}))
//якори
const anchors = document.querySelectorAll(".header-nav a");
anchors.forEach(anc =>{
anc.addEventListener("click", function (event){
    event.preventDefault();
    const id = anc.getAttribute("href");
    const elem =document.querySelector(id);
    window.scroll({
        top:elem.offsetTop- 85,
        behavior: 'smooth'
    })
});
});