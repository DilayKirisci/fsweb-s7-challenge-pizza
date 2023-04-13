import s from "./Order.module.css";
import React from "react";
import { Link } from "react-router-dom";
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
					<h3>Siparis Toplam</h3>
					<div className={s.secimler}>
						<p>Secimler</p>

						<p>
							{extra} {"\u20BA"}
						</p>
					</div>
					<div className={s.toplam}>
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
					<div className={s.submitButton}>
						<button
							onClick={onFormSubmit}
							disabled={disabled}
							id="submitOrder"
							className={s.submitOrder}
						>
							Sipars Ver!
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
