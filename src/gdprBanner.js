const GDPRBanner = (() => {
	const cookieDuration = 28;
	const cookieName = 'sitepenCookieConsent';
	const cookieValue = 'accepted';

	function createAcceptCookie() {
		var date = new Date();
		date.setTime(date.getTime() + cookieDuration * 24 * 60 * 60 * 1000);
		document.cookie = `${cookieName}=${cookieValue}; expires=${date.toGMTString()}; path=/`;
	}

	function removeBanner() {
		var element = document.getElementById('gdpr');
		element.parentNode.removeChild(element);
	}

	function showBanner() {
		const bannerDiv = document.createElement('div');
		document.body.appendChild(bannerDiv);
		bannerDiv.outerHTML = `<div id='gdpr' class='gdprBanner'>
			We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.
			<button type='button' class='gdprButton' onclick="GDPRBanner.accept();">OK</button>
			<a class='gdprButton' href="/privacy-policy">Privacy Policy</a>
		</div>`;
	}

	function checkCookie() {
		const acceptedCookieValue = `${cookieName}=${cookieValue}`;
		return document.cookie.indexOf(acceptedCookieValue) > -1;
	}

	if (!checkCookie()) {
		showBanner();
	}

	return {
		accept() {
			createAcceptCookie();
			removeBanner();
		}
	};
})();
