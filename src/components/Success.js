import React from "react";
import s from "./Success.module.css";

import { useLocation } from "react-router-dom";

export default function Success() {
	const { data } = useLocation().state;
	console.log(data);
	return (
		<div className={s.successContainer}>
			<h1 className={s.successTitle}>Teknolojik Yemekler</h1>
			<span className={s.successOrn}>lezzetin yolda</span>
			<p className={s.successSubtitle}> SIPARISINIZ ALINDI!</p>
			<hr />
			<div className={s.summary}>
				<h2>{data.type}</h2>
				<div className={s.orderSum}>
					<p>
						Boyut: <span>{data.size}</span>
					</p>

					<p>
						Hamur: <span> {data.dough}</span>{" "}
					</p>
					<p>
						Ek Malzemeler: <span> {data.materials}</span>
					</p>
				</div>
				<div className={s.orderPrice}>
					<p>Siparis Toplam</p>
					<p>
						Ek Malzemeler: {data.materials.length * 5}
						{"\u20BA"}
					</p>
					<p>
						Ek Malzemeler: {data.price}
						{"\u20BA"}
					</p>
				</div>
			</div>
		</div>
	);
}
