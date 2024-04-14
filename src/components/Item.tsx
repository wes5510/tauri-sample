import { useEffect, useRef } from "react";
import { useStore } from "../store";

export interface ItemProps {
	id: string;
}

export default function Item({ id }: ItemProps) {
	const isFocused = useStore((state) => state.isFocused(id));
	const ref = useRef<HTMLLIElement>(null);

	useEffect(
		function handleFocus() {
			if (ref.current === null || !isFocused) {
				return;
			}

			ref.current.scrollIntoView({
				behavior: "instant",
				block: "center",
				inline: "center",
			});
			ref.current.focus();
		},
		[isFocused, id, ref.current]
	);

	return <li ref={ref}>{id}</li>;
}
