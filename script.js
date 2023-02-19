/* fatimah's scripts */
const plugin_scroll_container = document.querySelector(".plugins__scroll");
const [first, second, third] = plugin_scroll_container.children;
let firstClone = first.cloneNode(true);
let secondClone = second.cloneNode(true);
let thirdClone = third.cloneNode(true);
if (window.innerWidth > 1450) {
	plugin_scroll_container.appendChild(firstClone);
	plugin_scroll_container.appendChild(secondClone);
	plugin_scroll_container.appendChild(thirdClone);
}
window.addEventListener("resize", (e) => {
	if (window.innerWidth > 1450) {
		console.log(typeof plugin_scroll_container);
		if (!plugin_scroll_container[firstClone]) {
			plugin_scroll_container.appendChild(firstClone);
			plugin_scroll_container.appendChild(secondClone);
			plugin_scroll_container.appendChild(thirdClone);
		}
	} else {
		firstClone.remove();
		secondClone.remove();
		thirdClone.remove();
	}
});

/* amer's scripts */
const paymentMethods = document.querySelectorAll(
	".solar__payment-method--logo"
);
paymentMethods.forEach((icon) => {
	icon.addEventListener("mouseenter", () => {
		console.log("entered the icon");
		// icon.style.transform = "scale(1.8)";
		icon.style.height = "80px";
		icon.style.width = "80px";
	});
	icon.addEventListener("mouseleave", () => {
		icon.style.height = "49px";
		icon.style.width = "49px";
	});
});
let observer = new IntersectionObserver((entries) => {
	let [image] = entries;
	console.log(image);
	if (!image.isIntersecting) {
		image.target.style.transform = "translateY(500px)";
	} else {
		image.target.style.transform = "translateY(80px)";
	}
});
const imageDashboard = document.querySelector(".dashboard__big--image");
observer.observe(imageDashboard);
