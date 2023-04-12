import s from "./Order.module.css";
import React from "react";
// import { Link } from "react-router-dom";
export default function Deliver(props) {
	const {
		onFormSubmit,
		extra,
		price,
		disabled,
		onIncreaseAmount,
		onDecreaseAmount,
		count,
		sum,
	} = props;

	return (
		<>
			<div className={s.deliverContainer}>
				<div className={s.deliverButton}>
					<button className={s.buttonIncrease} onClick={onIncreaseAmount}>
						+
					</button>
					<span className={s.itemCount}>{count}</span>
					<button className={s.buttonDesrease} onClick={onDecreaseAmount}>
						-
					</button>
				</div>
				<div className={s.deliverSum}>
					<h2>Siparis Toplam</h2>
					<div>
						<p>Secimler</p>

						<p>
							{extra} {"\u20BA"}
						</p>
					</div>
					<div>
						<p>Toplam</p>
						{extra === 0 ? (
							<p>
								{price} {"\u20BA"}
							</p>
						) : (
							<p>
								{sum} {"\u20BA"}
							</p>
						)}
					</div>
					<button onClick={onFormSubmit} disabled={disabled}>
						Sipars Ver!
					</button>
				</div>
			</div>
		</>
	);
}
