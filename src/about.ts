
export function aboutImg(){
	const div = document.getElementById("about-container");
	const img = document.createElement("img");

	const img_div = document.createElement("div");

	img_div.className = "img-div";

	img.src = "../img/istockphoto-533833660-1024x1024.jpg";

	img_div?.appendChild(img);
	div?.appendChild(img_div);
}

export function aboutText(){
	const div = document.getElementById("about-container");
	const text = document.createElement("p");

	text.className = "about-text"

	text.textContent = "Omnis corrupti ipsum dolor qui soluta. Commodi amet velit sunt. Porro pariatur assumenda itaque architecto. Nesciunt dolore id reprehenderit nisi fugiat eligendi esse est.Facilis tempora non repellendus commodi repellendus explicabo et. Aut ut eos sunt culpa. Nulla iure non iste recusandae ut sapiente esse consequatur.Earum possimus et ut quia molestiae quos. Est placeat sint qui voluptatum amet. Voluptatem non minus modi. Aspernatur ducimus architecto blanditiis. Pariatur quidem quo ex incidunt et. Magni ipsam aut voluptas quaerat tenetur molestiae ut eum.Fugit expedita non perspiciatis placeat soluta occaecati. Voluptates quam nulla aut illo non. Aut officiis dolorem numquam dolorum rerum incidunt harum quidem.Nulla ullam harum nemo ipsa. Voluptatem nihil exercitationem quos temporibus similique. Minima non iure voluptas molestiae officiis laborum. Quia molestiae nihil sint nemo et dolores.";

	div?.appendChild(text);
}


