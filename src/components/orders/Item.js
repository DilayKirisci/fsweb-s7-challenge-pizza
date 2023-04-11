import s from "./Order.module.css";
import React from "react";
export default function Item(props) {
	const { pizzas, onFormChange } = props;

	return (
		<>
			<div className={s.item}>
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
						{pizzas[0].size.map((siz) => (
							<label htmlFor={siz}>
								<input type="radio" id={siz} name="size" value={siz} />
								{siz}
							</label>
						))}
					</div>
					<div className={s.itemDough}>
						<p>
							Hamur Sec<span style={{ color: "red" }}>*</span> :{" "}
						</p>
						<select name="dough" as="select">
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
