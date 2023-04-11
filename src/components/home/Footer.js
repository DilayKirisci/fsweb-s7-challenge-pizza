import s from "./Home.module.css";
import React from "react";
export default function Footer() {
	return (
		<div className={s.footerContainer}>
			<div className={s.footerContact}>
				<h2 className={s.footerContactTitle}>
					Teknolojik <br /> Yemekler
				</h2>
				<p className={s.adress}>
					<img src={require("../../Assets/esnek/icon-1.png")} alt="locaton" />{" "}
					341 LondenBerryRoad <br /> IStanbul Turkiye{" "}
				</p>
				<p className={s.email}>
					<img src={require("../../Assets/esnek/icon-2.png")} alt="locaton" />
					aciktim@teknolojikyemekler.com{" "}
				</p>
				<p className={s.phone}>
					<img src={require("../../Assets/esnek/icon-3.png")} alt="locaton" />
					+90 216 123 45 67{" "}
				</p>
			</div>
			<div className={s.footerMenuItems}>
				<h4 className={s.footerMenuItemTitle}>Sicacik Yemekler</h4>
				<p className={s.footerMenuItem}> Terminal Pizza </p>
				<p className={s.footerMenuItem}> 5 Kisilik Hackatlon Pizza </p>
				<p className={s.footerMenuItem}> useEffect Tavuk Burger </p>
				<p className={s.footerMenuItem}> Beyaz Console Frosty </p>
				<p className={s.footerMenuItem}> Testler Gecti Mutlu Burger </p>
				<p className={s.footerMenuItem}> Posion Absolute Aci Burger </p>
			</div>
			<div className={s.footerInsta}></div>
		</div>
	);
}
