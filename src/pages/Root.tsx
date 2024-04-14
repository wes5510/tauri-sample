import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useEffect } from "react";
import { useStore } from "../store";
import Controller from "../components/Controller";

export default function Root() {
	/*
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }
  */

	const setFocusItemId = useStore((state) => state.setFocusItemId);

	useEffect(function handleHash() {
		const handleHashChange = () => {
			setFocusItemId(window.location.hash.replace("#", ""));
		};

		window.addEventListener("hashchange", handleHashChange);
		return () => {
			window.removeEventListener("hashchange", handleHashChange);
		};
	}, []);

	return (
		<div>
			<Header />
			<Controller />
			<Outlet />
		</div>
	);
}
