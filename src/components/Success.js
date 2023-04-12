import React from "react";
import s from "./Success.module.css";

export default function Success() {
	return (
		<div className={s.successContainer}>
			<h1 className={s.successTitle}>Teknolojik Yemekler</h1>
			<p className={s.successSubtitle}>
				{" "}
				TEBRIKLER! <br /> SIPARISINIZ ALINDI!
			</p>
		</div>
	);
}
