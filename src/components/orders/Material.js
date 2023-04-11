import s from "./Order.module.css";
import React from "react";

export default function Material(props) {
	const { pizzas, onFormChange } = props;
	return (
		<div className={s.material}>
			<h2>Ek Malzemeler</h2>
			<p>En Fazla 10 malzeme secebilirsiniz. 5tl</p>
			<form onChange={onFormChange}>
				{pizzas[0].materials.map((material, index) => (
					<label key={index}>
						<input type="checkbox" name="materials" value={material} />{" "}
						{material}{" "}
					</label>
				))}
			</form>
			<div className={s.noteContainer}>
				<h2>Siparis Notu </h2>
				<input
					type="textfield"
					placeholder="Siparisinize eklemek istedigin bir not var mi?"
					onChange={onFormChange}
					name="note"
				/>
				<hr />
			</div>
		</div>
	);
}
