export function homeProducts(){

	type products = {
		name:    string;
		price:   number;
		img:     HTMLImageElement;
		img_src: string;
	}


	let clothes: products[] = [];

	for(let i = 0; i < 10; i++){
		const items: products = {
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

	for (let i = 0; i < 10; i++){
		img_div?.appendChild(clothes[i].img);
		div?.appendChild(img_div);
	}


}


