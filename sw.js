if ("serviceWorker" in navigator) {
	window.addEventListener("load", () => {
		console.log("??");
		navigator.serviceWorker.register("/sw.js", { scope: "/" });
	});
}

self.addEventListener("activate", async () => {
	console.log("service worker activate");
});

self.addEventListener("push", (event) => {
	const options = {
		body: event.data.text(),
		icon: "/path/to/your/icon.png", // Replace with your icon path
	};
	event.waitUntil(self.registration.showNotification("Your App Name", options));
});

self.addEventListener("notificationclick", (e) => {
	console.log(e);
});
