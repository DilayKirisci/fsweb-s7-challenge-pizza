import s from "./Home.module.css";
import React from "react";
import { Link } from "react-router-dom";
const navItems = [
	{
		url: "../../src/Assets/esnek/mini-buttons/1.png.svg",
		title: "Ramen",
	},
	{
		url: "../../src/Assets/esnek/mini-buttons/2.png.svg",
		title: "Pizza",
	},
	{
		url: "../../src/Assets/esnek/mini-buttons/3.png.svg",
		title: "Burger",
	},
	{
		url: "../../src/Assets/esnek/mini-buttons/4.png.svg",
		title: "Kizartmalar",
	},
	{
		url: "../../src/Assets/esnek/mini-buttons/5.png.svg",
		title: "Fast Food",
	},
	{
		url: ".../../src/Assets/esnek/mini-buttons/6.png.svg",
		title: "Gazli Icecekler",
	},
];

export default function Banner(props) {
	return (
		<>
			<div className={s.bannerContainer}>
				<h1 className={s.bannerTitle}>Teknolojik Yemekler</h1>
				<h3 className={s.bannerOrn}>firsati kacirma</h3>
				<h2 className={s.bannerSubTitle}>
					KOD ACIKTIRIR <br /> PIZZA, DOYURUR{" "}
				</h2>

				<Link to="/menu" className={s.bannerLink}>
					{" "}
					Aciktim
				</Link>
			</div>
			<div className={s.navbarContainer}>
				{navItems.map((item, index) => (
					<div className={s.navDiv} key={index}>
						<img src={item.url} alt={index} />
						<span>{item.title}</span>
					</div>
				))}
			</div>
		</>
	);
}
