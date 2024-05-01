const bckgEffectWrapper = document.querySelector(".background-effect");
const listItems = document.querySelectorAll(".list-item");
const mainPageWrapper = document.querySelector(".mainPageWrapper");
const contacts = document.querySelector(".contacts-wrapper");
const aboutCompany = document.querySelector(".about-company-wrapper");
const readyCases = document.querySelector(".ready-cases-wrapper");
const vremya = document.querySelector(".vremya");
const titlle = document.querySelector(".titlle");

for (let i = 0; i < 2500; i++) {
	let newDiv = document.createElement("div");
	bckgEffectWrapper.append(newDiv);
}

listItems.forEach((listItem, index) => {
	listItem.addEventListener("click", () => {
		vremya.style.display = "block";
		titlle.style.display = "none";

		if (listItem.classList.contains("head-company")) {
			mainPageWrapper.style.display = "none";
			contacts.style.display = "none";
			readyCases.style.display = "none";
			aboutCompany.style.display = "block";

			listItems.forEach((item) => {
				item.style.color = "rgba(117, 127, 147, 1)";
			});
			listItems[index].style.color = "white";
		} else if (listItem.classList.contains("head-contact")) {
			mainPageWrapper.style.display = "none";
			aboutCompany.style.display = "none";
			readyCases.style.display = "none";
			contacts.style.display = "flex";

			listItems.forEach((item) => {
				item.style.color = "rgba(117, 127, 147, 1)";
			});
			listItems[index].style.color = "white";
		} else if (listItem.classList.contains("head-service")) {
			mainPageWrapper.style.display = "none";
			aboutCompany.style.display = "none";
			contacts.style.display = "none";
			readyCases.style.display = "block";
			vremya.style.display = "none";
			titlle.style.display = "block";

			listItems.forEach((item) => {
				item.style.color = "rgba(117, 127, 147, 1)";
			});
			listItems[index].style.color = "white";
		} else if (listItem.classList.contains("head-case")) {
			aboutCompany.style.display = "none";
			contacts.style.display = "none";
			readyCases.style.display = "none";
			mainPageWrapper.style.display = "block";

			listItems.forEach((item) => {
				item.style.color = "rgba(117, 127, 147, 1)";
			});
			listItems[index].style.color = "white";
		}
	});
});
