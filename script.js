function update() {
    var select = document.getElementById('choose');
    var option = select.options[select.selectedIndex];

    var lol=option.text;
    console.log(option.text);
    document.body.style.backgroundColor=lol;
    console.log(document.body.style.backgroundColor=lol);
}
update()
