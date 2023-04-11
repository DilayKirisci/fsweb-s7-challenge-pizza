import s from "./Home.module.css";
import React from "react";
import Banner from "./Banner";

import Menu from "./Menu";
import Footer from "./Footer";

export default function Home() {
	return (
		<>
			<Banner />
			<Menu />
			<Footer />
		</>
	);
}
