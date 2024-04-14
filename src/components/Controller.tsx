import { ChangeEvent, useState } from "react";

import workerUrl from "../worker?worker&url";

const worker = new Worker(workerUrl, { type: "module" });

export default function Controller() {
	const [itemId, setItemId] = useState<string | undefined>(undefined);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setItemId(e.target.value);
	};

	const handleClick = async () => {
		if (itemId === undefined) {
			return;
		}

		if (window.Notification.permission !== "granted") {
			window.Notification.requestPermission().then((perm) => {
				if (perm === "granted") {
					worker.postMessage("Hello world");
				}
			});
		} else {
			worker.postMessage("Hello world");
		}
	};
	return (
		<div>
			<input onChange={handleChange} />
			<button onClick={handleClick}>알림으로 이동</button>
		</div>
	);
}
