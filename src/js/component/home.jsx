import React ,{ useState } from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState(null);
	console.log(inputValue);

	const [todoArray, setTodoArray] = useState([]);
	console.log("Todo Array:", todoArray);

	const handleKeyDown = (event) => {
		console.log(event.key);
		if (event.key === "Enter"){
			setTodoArray(previousState => {
				return previousState.concat(inputValue);
			})
			setInputValue("");
		};
	
	};

	return (
		<div>
			<h1 className="text-center">todos</h1>
			<div className="d-flex justify-content-center">
				<ul className="list-group w-50">
					<input type="text" onChange={e => setInputValue(e.target.value)} value={inputValue} onKeyDown={handleKeyDown} placeholder="What needs to be done?"/>
					{todoArray.map( (item, index) => {
						return <li className="list-group-item" key={index}>{item}</li>
					})
					}
				</ul>
			</div>
		</div>
	)
};

export default Home;
