const images = [
    "./station.jfif",
    "./station1.jpeg"
]
const container = document.getElementById("container");
function render() {
    let hello = "";
    for (let i = 0; i < images.length; i++) {
        hello += `<img class="team-img" src="${images[i]}" alt="hello" />`


    }
    container.innerHTML = hello;
}
render();