self.onmessage = async (event: MessageEvent<any>) => {
	console.log({ event });
	const noti = new self.Notification("title", {
		body: "body",
	});

	noti.onclick = () => {
		self.location.hash = "#test";
	};
};
