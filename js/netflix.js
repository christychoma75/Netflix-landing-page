const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

//select tab content item
function selectItem(e) {
	removeBorder();
	removeShow();
	//Add border to curreent tab
	this.classList.add("tab-border");
	//Grab content item from the DOM
	const tabContentItems = document.querySelector(`#${this.id}-content`);
	// Add show class
	tabContentItems.classList.add("show");
}

function removeBorder() {
	tabItems.forEach(item => item.classList.remove("tab-border"));
}
function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove("show");
	});
}

//listen for tab click
tabItems.forEach(item => item.addEventListener("click", selectItem));
