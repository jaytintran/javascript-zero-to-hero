let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");
let btn_close = document.querySelector(".close-modal");
let btns_open = document.querySelectorAll(".show-modal");

for (let i = 0; i < btns_open.length; i++) {
	btns_open[i].addEventListener("click", () => {
		modal.classList.remove("hidden");
	});
}
