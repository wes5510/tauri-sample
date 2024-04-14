import Item from "../components/Item";
import { ITEMS } from "../const";

export default function Two() {
	return (
		<div>
			<h1>Two</h1>
			<ul>
				{ITEMS.map((id) => (
					<Item key={id} id={id} />
				))}
			</ul>
		</div>
	);
}
