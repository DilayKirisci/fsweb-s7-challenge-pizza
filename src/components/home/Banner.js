import s from "./Home.module.css";
import React from "react";
import { Link } from "react-router-dom";
import ramen from "../../Assets/esnek/mini-buttons/1.png.svg";
import pizza from "../../Assets/esnek/mini-buttons/2.png.svg";
import burger from "../../Assets/esnek/mini-buttons/3.png.svg";
import kizartmalar from "../../Assets/esnek/mini-buttons/4.png.svg";
import fastFood from "../../Assets/esnek/mini-buttons/5.png.svg";
import gazliIcecekler from "../../Assets/esnek/mini-buttons/6.png.svg";

const navItems = [
	{
		url: ramen,
		title: "Ramen",
	},
	{
		url: pizza,
		title: "Pizza",
	},
	{
		url: burger,
		title: "Burger",
	},
	{
		url: kizartmalar,
		title: "Kizartmalar",
	},
	{
		url: fastFood,
		title: "Fast Food",
	},
	{
		url: gazliIcecekler,
		title: "Gazli Icecekler",
	},
];

export default function Banner() {
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
					<div className={s.navDiv} key={"nav" + index}>
						<img src={item.url} alt={index} />
						<span>{item.title}</span>
					</div>
				))}
			</div>
		</>
	);
}
