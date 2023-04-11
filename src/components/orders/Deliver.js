import s from "./Order.module.css";
import React from "react";
export default function Deliver(props) {
	let count = 1;
	const { onFormSubmit, extra, price, base, pizzas } = props;
	console.log(price);

	return (
		<>
			<div className={s.deliverContainer}>
				<div className={s.deliverButton}>
					<button className={s.buttonIncrease}>+</button>
					<span className={s.itemCount}>{count}</span>
					<button className={s.buttonDesrease}>-</button>
				</div>
				<div className={s.deliverSum}>
					<h2>Siparis Toplam</h2>
					<div>
						<p>Secimler</p>

						<p>{extra}</p>
					</div>
					<div>
						<p>Toplam</p>
						{extra === 0 ? <p>{pizzas[0].price}</p> : <p>{price}</p>}
					</div>
					<button onClick={onFormSubmit}>Sipars Ver!</button>
				</div>
			</div>
		</>
	);
}
