function changeColor(index) {
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }
    links[index].classList.add("active");
}
function changeContent(index) {
    var contents = document.querySelectorAll('.main-content > div');
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }
    contents[index].style.display = 'block';
}
