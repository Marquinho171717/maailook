export function homeProducts() {
    let clothes = [];
    for (let i = 0; i < 10; i++) {
        const items = {
            name: `clothes ${i + 1}`,
            price: 250,
            img: document.createElement("img"),
            img_src: "../img/istockphoto-1411678076-1024x1024.jpg"
        };
        items.img.src = items.img_src;
        items.img.className = "img-class";
        clothes.push(items);
    }
    var div = document.getElementById("home-container");
    var img_div = document.createElement("div");
    img_div.className = "imgarray-div";
    for (let i = 0; i < 10; i++) {
        img_div === null || img_div === void 0 ? void 0 : img_div.appendChild(clothes[i].img);
        div === null || div === void 0 ? void 0 : div.appendChild(img_div);
    }
}
