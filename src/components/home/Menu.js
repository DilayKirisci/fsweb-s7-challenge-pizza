import React from "react";
import s from "./Home.module.css";
import { Link } from "react-router-dom";

export default function Menu() {
	const navItems = [
		{
			src: "../../src/Assets/esnek/mini-buttons/1.png.svg",
			title: "Ramen",
		},
		{
			src: "../../src/Assets/esnek/mini-buttons/2.png.svg",
			title: "Pizza",
		},
		{
			src: "../../src/Assets/esnek/mini-buttons/3.png.svg",
			title: "Burger",
		},
		{
			src: "../../src/Assets/esnek/mini-buttons/4.png.svg",
			title: "Kizartmalar",
		},
		{
			src: "../../src/Assets/esnek/mini-buttons/5.png.svg",
			title: "Fast Food",
		},
		{
			src: "../../src/Assets/esnek/mini-buttons/6.png.svg",
			title: "Gazli Icecekler",
		},
	];
	const foodItems = [
		{
			url: "../../src/Assets/esnek/mini-buttons/1.png.svg",
			title: "Terminal Pizza",
			rate: 4.9,
			comment: 200,
			price: 60,
		},
		{
			url: "../../src/Assets/esnek/mini-buttons/2.png.svg",
			title: "Position Absolute Pizza",
			rate: 4.9,
			comment: 928,
			price: 85,
		},
		{
			url: "../../Assets/esnek/mini-buttons/3.png.svg",
			title: "useEffect Tavuklu Burger",
			rate: 4.9,
			comment: 462,
			price: 75,
		},
	];
	return (
		<>
			<div className={s.cardContainer}>
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
						<button className={s.navButton}>
							<img src={item.src} alt={index} />
							<span className={s.itemTitle}>{item.title}</span>
						</button>
					))}
				</div>
			</div>

			<div className={s.foodCardContainer}>
				<div className={s.foodCard}>
					{foodItems.map((food, index) => (
						<button className={s.foodCardButton}>
							<img src={food.src} alt={index} />
							<div className={s.foodCardText}>
								<div className={s.foodCardTitle}>{food.title}</div>
								<div className={s.foodCardInfo}>
									<span>{food.rate}</span>
									<span>{food.comment}</span>
									<span>
										{food.price} {"\u20BA"}{" "}
									</span>
									<span></span>
								</div>
							</div>
						</button>
					))}
				</div>
			</div>
		</>
	);
}
