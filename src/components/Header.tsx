import { Link } from "react-router-dom";

export default function Header() {
	return (
		<div>
			<Link to="/one">One</Link>
			<span> | </span>
			<Link to="/two">Two</Link>
		</div>
	);
}
