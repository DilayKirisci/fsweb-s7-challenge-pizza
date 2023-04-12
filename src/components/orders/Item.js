import s from "./Order.module.css";
import React from "react";
import orderBanner from "../../Assets/esnek/esnek-form-banner.png";
import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";
export default function Item(props) {
	const { pizzas, onFormChange } = props;

	return (
		<>
			<div className={s.item}>
				{/* <div className={s.orderBanner}>
					<img src={orderBanner} alt="banner" />
				</div> */}
				<h2 className={s.itemTitle}>Positon Absolute Aci Pizza</h2>
				<div className={s.itemDetails}>
					<span className={s.itemPrice}>
						{pizzas[0].price} {"\u20BA"}
					</span>
					<span className={s.itemRating}>{pizzas[0].content.rate} </span>
					<span className={s.itemComment}>({pizzas[0].content.comment}) </span>
				</div>
				<div className={s.itemContent}>
					<p>{pizzas[0].content.summary}</p>
				</div>
			</div>
			<div className={s.itemStuff}>
				<form onChange={onFormChange}>
					<div className={s.itemSize}>
						<p>
							Boyut Sec <span style={{ color: "red" }}>*</span> :{" "}
						</p>
						{pizzas[0].size.map((siz, index) => (
							<label htmlFor={siz}>
								<input type="radio" id={siz} name="size" value={siz} required />
								{siz}
							</label>
						))}
					</div>
					<div className={s.itemDough}>
						<p>
							Hamur Sec<span style={{ color: "red" }}>*</span> :{" "}
						</p>
						<select name="dough" as="select" required>
							<option value="" label="Hamur Kalinligi" name="dough" />
							{pizzas[0].dough.map((dou) => (
								<option value={dou} label={dou} name="dough"></option>
							))}
						</select>
					</div>
				</form>
			</div>
		</>
	);
}
