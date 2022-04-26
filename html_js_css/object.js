let hello = {
    title: 'Hello like a king ',
    price: 10.23,
    favchar: 'c',
    list: ["hello", "world"],
    awesome: true,
    images: ["img/tabletop.jpg", "img/station1.jpeg"],
    object: function () {
        console.log("hello world");
    }

}
console.log(hello.images[0]);
hello.object();