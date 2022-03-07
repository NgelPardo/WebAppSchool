const rd1 = document.getElementById("rd1");
const rd2 = document.getElementById("rd2");
const rd5 = document.getElementById("rd5");
const rd6 = document.getElementById("rd6");
const rd9 = document.getElementById("rd9");
const rd10 = document.getElementById("rd10");
const rd11 = document.getElementById("rd11");
const rd12 = document.getElementById("rd12");
const rd13 = document.getElementById("rd13");
const rd14 = document.getElementById("rd14");
const rd15 = document.getElementById("rd15");
const rd16 = document.getElementById("rd16");
const rd17 = document.getElementById("rd17");
const rd18 = document.getElementById("rd18");
const rd19 = document.getElementById("rd19");
const rd20 = document.getElementById("rd20");
const rd23 = document.getElementById("rd23");
const rd24 = document.getElementById("rd24");
const rd25 = document.getElementById("rd25");
const rd26 = document.getElementById("rd26");
const rd29 = document.getElementById("rd29");
const rd30 = document.getElementById("rd30");
const rd31 = document.getElementById("rd31");
const rd32 = document.getElementById("rd32");
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");
const div4 = document.getElementById("div4");
const div5 = document.getElementById("div5");
const div6 = document.getElementById("div6");
const div7 = document.getElementById("div7");
const div8 = document.getElementById("div8");
const div9 = document.getElementById("div9");
const div10 = document.getElementById("div10");
const div11 = document.getElementById("div11");
const div12 = document.getElementById("div12");
const div13 = document.getElementById("div13");
const div14 = document.getElementById("div14");
const div15 = document.getElementById("div15");
const div16 = document.getElementById("div16");
const div17 = document.getElementById("div17");
const div18 = document.getElementById("div18");
const div19 = document.getElementById("div19");
const div21 = document.getElementById("div21");
const div23 = document.getElementById("div23");
const div24 = document.getElementById("div24");
const div25 = document.getElementById("div25");
const div26 = document.getElementById("div26");
const ip1 = document.getElementById("ip1");
const ip2 = document.getElementById("ip2");

rd1.addEventListener("click",(e)=>{
	if (rd1.checked==true) {
		div1.removeAttribute("hidden");
	}
});

rd2.addEventListener("click",(e)=>{
	if (rd2.checked==true) {
		div1.setAttribute("hidden",true);
	}
});

rd5.addEventListener("click",(e)=>{
	if (rd5.checked==true) {
		div2.removeAttribute("hidden");
		div3.setAttribute("hidden",true);
	}	
});

rd6.addEventListener("click",(e)=>{
	if (rd6.checked==true) {
		div2.setAttribute("hidden",true);
		div3.removeAttribute("hidden");
	}
});

rd9.addEventListener("click",(e)=>{
	if (rd9.checked==true) {
		div5.removeAttribute("hidden");
		div4.setAttribute("hidden",true);
	}	
});

rd10.addEventListener("click",(e)=>{
	if (rd10.checked==true) {
		div5.setAttribute("hidden",true);
		div4.removeAttribute("hidden");
	}
});

rd11.addEventListener("click",(e)=>{
	if (rd11.checked==true) {
		div7.removeAttribute("hidden");
		div6.setAttribute("hidden",true);
	}	
});

rd12.addEventListener("click",(e)=>{
	if (rd12.checked==true) {
		div7.setAttribute("hidden",true);
		div6.removeAttribute("hidden");
	}
});

rd13.addEventListener("click",(e)=>{
	if (rd13.checked==true) {
		div9.removeAttribute("hidden");
		div10.removeAttribute("hidden");
		div11.removeAttribute("hidden");
		div8.setAttribute("hidden",true);

		div9.style.display = "grid";
	}	
});

rd14.addEventListener("click",(e)=>{
	if (rd14.checked==true) {
		div9.setAttribute("hidden",true);
		div10.setAttribute("hidden",true);
		div11.setAttribute("hidden",true);
		div8.removeAttribute("hidden");

		div9.style.display = "none";
	}
});

rd15.addEventListener("click",(e)=>{
	if (rd15.checked==true) {
		div13.removeAttribute("hidden");
		div12.setAttribute("hidden",true);
	}	
});

rd16.addEventListener("click",(e)=>{
	if (rd16.checked==true) {
		div13.setAttribute("hidden",true);
		div12.removeAttribute("hidden");
	}
});

rd17.addEventListener("click",(e)=>{
	if (rd17.checked==true) {
		div15.removeAttribute("hidden");
		div14.setAttribute("hidden",true);
	}	
});

rd18.addEventListener("click",(e)=>{
	if (rd18.checked==true) {
		div15.setAttribute("hidden",true);
		div14.removeAttribute("hidden");
	}
});

rd19.addEventListener("click",(e)=>{
	if (rd19.checked==true) {
		div17.removeAttribute("hidden");
		div16.setAttribute("hidden",true);
	}	
});

rd20.addEventListener("click",(e)=>{
	if (rd20.checked==true) {
		div17.setAttribute("hidden",true);
		div16.removeAttribute("hidden");
	}
});

rd23.addEventListener("click",(e)=>{
	if (rd23.checked==true) {
		div19.removeAttribute("hidden");
		div18.setAttribute("hidden",true);
	}	
});

rd24.addEventListener("click",(e)=>{
	if (rd24.checked==true) {
		div19.setAttribute("hidden",true);
		div18.removeAttribute("hidden");
	}
});

rd25.addEventListener("click",(e)=>{
	if (rd25.checked==true) {
		div21.removeAttribute("hidden");
		ip1.setAttribute("hidden",true);
		ip2.removeAttribute("hidden");
	}	
});

rd26.addEventListener("click",(e)=>{
	if (rd26.checked==true) {
		div21.removeAttribute("hidden");
		ip2.setAttribute("hidden",true);
		ip1.removeAttribute("hidden");
	}
});

rd29.addEventListener("click",(e)=>{
	if (rd29.checked==true) {
		div24.removeAttribute("hidden");
		div23.setAttribute("hidden",true);
	}	
});

rd30.addEventListener("click",(e)=>{
	if (rd30.checked==true) {
		div24.setAttribute("hidden",true);
		div23.removeAttribute("hidden");
	}
});

rd31.addEventListener("click",(e)=>{
	if (rd31.checked==true) {
		div26.removeAttribute("hidden");
		div25.setAttribute("hidden",true);
	}	
});

rd32.addEventListener("click",(e)=>{
	if (rd32.checked==true) {
		div26.setAttribute("hidden",true);
		div25.removeAttribute("hidden");
	}
});