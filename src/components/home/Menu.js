import React from "react";
import s from "./Home.module.css";
import { Link } from "react-router-dom";
import ramen from "../../Assets/esnek/mini-buttons/1.png.svg";
import pizza from "../../Assets/esnek/mini-buttons/2.png.svg";
import burger from "../../Assets/esnek/mini-buttons/3.png.svg";
import kizartmalar from "../../Assets/esnek/mini-buttons/4.png.svg";
import fastFood from "../../Assets/esnek/mini-buttons/5.png.svg";
import gazliIcecekler from "../../Assets/esnek/mini-buttons/6.png.svg";
import food1 from "../../Assets/esnek/food-1.png";
import food2 from "../../Assets/esnek/food-2.png";
import food3 from "../../Assets/esnek/food-3.png";

export default function Menu() {
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
	const foodItems = [
		{
			url: food1,
			title: "Terminal Pizza",
			rate: 4.9,
			comment: 200,
			price: 60,
		},
		{
			url: food2,
			title: "Position Absolute Pizza",
			rate: 4.9,
			comment: 928,
			price: 85,
		},
		{
			url: food3,
			title: "UseEffect Tavuklu Burger",
			rate: 4.9,
			comment: 462,
			price: 75,
		},
	];
	return (
		<>
			<div className={s.cardContainer} id="menu">
				<div className={s.card1}>
					<h2 className={s.cardTitle}>
						Ozel <br /> Lezzetus
					</h2>
					<p className={s.cardName}>Position: Absolute Aci Burger</p>
					<button className={s.cardButton}>
						<Link to="/order" className={s.orderLink}>
							SIPARIS VER
						</Link>
					</button>
				</div>
				<div className={s.cards}>
					<div className={s.card2}>
						<h2 className={s.cardTitle}>
							Hackathlon <br /> Burger Menu
						</h2>
						<button className={s.cardButton}>
							<Link to="/order" className={s.orderLink}>
								SIPARIS VER
							</Link>
						</button>
					</div>
					<div className={s.card3}>
						<h2 className={s.cardTitle}>
							<span>Coooook</span> hizli <br /> npm gibi kurye{" "}
						</h2>
						<button className={s.cardButton}>
							<Link to="/order" className={s.orderLink}>
								SIPARIS VER
							</Link>
						</button>
					</div>
				</div>
			</div>
			<div className={s.foodContainer}>
				<span>en cok paketlenen menuler</span>
				<h2>Aciktiran Kodlara Doyuran Lezzetler</h2>
				<div className={s.foodButton}>
					{navItems.map((item, index) => (
						<button className={s.navButton} id={"menuNav" + index}>
							<img src={item.url} alt={item.title} />
							<span className={s.itemTitle}>{item.title}</span>
						</button>
					))}
				</div>
			</div>

			<div className={s.foodCardContainer}>
				<div className={s.foodCard}>
					{foodItems.map((food, index) => (
						<Link to="/order" className={s.foodCardButton} id={"menu" + index}>
							<img src={food.url} alt={food.title} className={s.foodCardImg} />
							<div className={s.foodCardText}>
								<div className={s.foodCardTitle}>{food.title}</div>
								<div className={s.foodCardInfo}>
									<span>{food.rate}</span>
									<span>({food.comment})</span>
									<span>
										{food.price} {"\u20BA"}{" "}
									</span>
									<span></span>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</>
	);
}
