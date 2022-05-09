function update() {
    var select = document.getElementById('choose');
    var option = select.options[select.selectedIndex];
    console.log(option);   
    console.log(option.value);
    select.addEventListener("click", () => {
        document.body.style.backgroundColor="blue";
        
    })
    var lol=lol.addEventListener("load",function() { changeBackground('red');
            return lol; })



}
update()
