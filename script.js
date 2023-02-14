/* fatimah's scripts */

/* amer's scripts */

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
