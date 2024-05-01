const bckgEffectWrapper = document.querySelector(".background-effect");
// const bckgEffectWrapperHead = document.querySelector(".background-effect-head");

for (let i = 0; i < 2500; i++) {
	let newDiv = document.createElement("div");
	bckgEffectWrapper.append(newDiv);
}

// for (let i = 0; i < 300; i++) {
// 	let newDiv = document.createElement("div");
// 	newDiv.className = "dotWrap";
// 	let innerDot = document.createElement("div");
// 	innerDot.className = "innerDot";
// 	newDiv.append(innerDot);
// 	bckgEffectWrapperHead.append(newDiv);
// }
