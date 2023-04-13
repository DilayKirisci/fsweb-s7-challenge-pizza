import { useHistory } from "react-router-dom";
import s from "./Order.module.css";
import React, { useState, useEffect } from "react";
import Item from "./Item";
import Material from "./Material";
import Deliver from "./Deliver";
import axios from "axios";
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
	count: "",
};

const schema = yup.object().shape({
	size: yup.string().required("Please select a pizza size."),
	dough: yup.string().required("Please select a pizza dough."),
	materials: yup.array().max(10, "You can choose 10 ingredients most."),
	note: yup.string(),
});

export default function Order() {
	const history = useHistory();
	const [data, setData] = useState(initialState);
	const [price, setPrice] = useState(pizzas[0].price);
	const [extra, setExtra] = useState(0);
	const [disabled, setDisabled] = useState(true);
	const [count, setCount] = useState(1);
	const [sum, setSum] = useState();

	const [errors, setErrors] = useState({
		dough: "",
		size: "",
		materials: "",
	});

	function updatePrice(data, count) {
		const basePrice = pizzas[0].price;
		let ext = data.materials.length * 5;
		setExtra(ext * count);
		setSum((basePrice + ext) * count);
		setPrice((basePrice + ext) * count);
	}

	function handleIncreaseAmount() {
		setCount((prevCount) => prevCount + 1);
	}

	function handleDecreaseAmount() {
		if (count > 1) {
			setCount((prevCount) => prevCount - 1);
		}
	}

	useEffect(() => {
		schema.isValid(data).then((valid) => setDisabled(!valid));
	}, [data]);

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
			count: count,
		}));
		updatePrice(data);
	};

	useEffect(() => {
		updatePrice(data, count);
	}, [data, count]);

	function handleFormSubmit(e) {
		e.preventDefault();

		if (disabled) {
			let errorMsg = "You have to complete the form.";
			if (errors.size) {
				errorMsg = "Please select a pizza size.";
			} else if (errors.dough) {
				errorMsg = "Please select a pizza dough.";
			} else if (errors.materials) {
				errorMsg = "Please select at least one pizza material.";
			}
			alert(errorMsg);
		} else {
			axios
				.post("https://reqres.in/api/users", data)
				.then(function(response) {
					console.log("postData", response.data);
					history.push({
						pathname: "/success",
						state: { data },
					});
				})
				.catch(function(error) {
					console.log(error);
				});
		}
	}

	useEffect(() => {
		console.log(data);
	}, [data]);

	const [activeRoute, setActiveRoute] = useState("");
	const handleClick = (route) => {
		setActiveRoute(route);
	};

	console.log("data", data);

	return (
		<>
			<header className={s.orderHeader}>
				<h1>Teknolojik Yemekler</h1>
				<div className={s.breadcrumbs}>
					<Link
						to="/"
						className={activeRoute === "home" ? "active" : ""}
						onClick={() => handleClick("home")}
					>
						Home -
					</Link>
					<Link
						to="/menu"
						className={activeRoute === "menu" ? "active" : ""}
						onClick={() => handleClick("menu")}
					>
						Menu -
					</Link>
					<Link
						to="/order"
						className={activeRoute === "order" ? "active" : ""}
						onClick={() => handleClick("order")}
					>
						Order
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
					disabled={disabled}
					onIncreaseAmount={handleIncreaseAmount}
					onDecreaseAmount={handleDecreaseAmount}
					count={count}
					sum={sum}
				/>
			</div>
		</>
	);
}
