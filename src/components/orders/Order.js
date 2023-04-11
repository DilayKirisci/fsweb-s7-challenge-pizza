import s from "./Order.module.css";
import React, { useState, useEffect } from "react";
import Item from "./Item";
import Material from "./Material";
import Deliver from "./Deliver";
import { Link } from "react-router-dom";
import * as yup from "yup";

const pizzas = [
	{
		type: "Position Absolute Aci Pizza",
		price: 85.5,
		size: ["Kucuk", "Orta", "Buyuk"],
		dough: ["Ince", "Orta", "Kalin"],
		content: {
			summary:
				"Pepperoni, domuz ve sığır eti karışımının paprika ve diğer biber çeşitleri ile baharatlanması ile elde edilen bir Amerikan salam çeşidi. Pepperoni karakteristik olarak yumuşak, hafif isli ve parla kırmızı renktedir. İnce dilimlenmiş pepperoni, Amerikan pizzalarında kullanılan popüler bir malzemedir Italyanin en sevilen pizzalari arasinda yer almaktadir.",
			comment: 200,
			rate: 4.8,
		},
		materials: [
			"Pepporoni",
			"Sosis",
			"Kanada Jambonu",
			"Tavuk Izgara",
			"Sogan",
			"Domates",
			"Misir",
			"Sucuk",
			"Jalepeno",
			"Sarimsak",
			"Biber",
			"Sucuk",
			"Ananas",
			"Kabak",
		],
	},
];

const initialState = {
	type: "",
	size: "",
	dough: "",
	materials: [],
	note: "",
};

const schema = yup.object().shape({
	size: yup.string().required(),
	dough: yup.string().required(),
	materials: yup
		.array()
		.max(2, "En fazla 10 malzeme seçebilirsiniz.")
		.required(),
	note: yup.string(),
});

export default function Order() {
	const [data, setData] = useState(initialState);
	const [price, setPrice] = useState(0);
	const [extra, setExtra] = useState(0);
	const [formErrors, setFormErrors] = useState({});

	let sum = 0;
	function updatePrice(data) {
		const basePrice = pizzas[0].price;
		let ext = data.materials.length * 5;
		setExtra(ext);
		sum = basePrice + ext;
		setPrice(sum);
		console.log(data.materials.length);
	}

	// useEffect(() => {
	// 	handleFormChange();
	// }, data);
	// useEffect(() => {
	// 	schema.isValid(data).then((valid) => setIsSubmitted(!valid));
	//   }, [data]);

	const handleFormChange = (event) => {
		const { name, value, type, checked } = event.target;

		setData((prevData) => ({
			...prevData,
			[name]:
				type === "checkbox"
					? checked
						? [...prevData.materials, value]
						: prevData.materials.filter((m) => m !== value)
					: value,
			price: sum,
			type: pizzas[0].type,
		}));
		updatePrice(data);
	};

	useEffect(() => {
		updatePrice(data);
	}, [data]);

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		try {
			await schema.validate(data, { abortEarly: false });
			setFormErrors({});
			// Send form data to server
		} catch (error) {
			const newErrors = {};
			error.inner.forEach((error) => {
				newErrors[error.path] = error.message;
			});
			setFormErrors(newErrors);
		}
		setData(initialState);
	};

	useEffect(() => {
		console.log(data);
	}, [data]);
	const [activeRoute, setActiveRoute] = useState("");

	const handleClick = (route) => {
		setActiveRoute(route);
	};
	return (
		<>
			<header className={s.orderHeader}>
				<h1>Teknolojik Yemekler</h1>
				<div className="breadcrumbs">
					<Link
						to="/"
						className={activeRoute === "home" ? "active" : ""}
						onClick={() => handleClick("home")}
					>
						Home
					</Link>
					<Link
						to="/order"
						className={activeRoute === "order" ? "active" : ""}
						onClick={() => handleClick("order")}
					>
						Order
					</Link>
					<Link
						to="/success"
						className={activeRoute === "success" ? "active" : ""}
						onClick={() => handleClick("success")}
					>
						Success
					</Link>
				</div>
			</header>
			<div className={s.orderContainer}>
				<Item pizzas={pizzas} onFormChange={handleFormChange} />
				<Material pizzas={pizzas} onFormChange={handleFormChange} />
				<Deliver
					price={price}
					onFormSubmit={handleFormSubmit}
					extra={extra}
					pizzas={pizzas}
				/>
			</div>
		</>
	);
}
