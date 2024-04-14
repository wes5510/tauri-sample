import Item from "../components/Item";
import { ITEMS } from "../const";

export default function One() {
	return (
		<div>
			<h1>One</h1>
			<ul>
				{ITEMS.map((id) => (
					<Item key={id} id={id} />
				))}
			</ul>
		</div>
	);
}
