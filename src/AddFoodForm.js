import React, {useState} from "react";
import "antd/dist/antd.css";
import { Card, Row, Col, Divider, Input, Button } from "antd";

function AddFood({addFood}) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);

    const handleNameInput = (e) => setName(e.target.value);
    const handleImageInput = (e) => setImage(e.target.value);
    const handleCaloriesInput = (e) => setCalories(e.target.value);
    const handleServingsInput = (e) => setServings(e.target.value);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newFood = {
        name, 
        image, 
        calories,
        servings,
         };
        addFood(newFood);
        setName("");
        setImage("");
        setCalories(0);
        setServings("");
};

return (
    <>
    <h1>Add Food</h1>
    <form onSubmit={handleFormSubmit}>
            <label>Name</label>
            <Input type="text" onChange={handleNameInput} value={name} />

            <label>Image</label>
            <Input type="text" onChange={handleImageInput} value={image} />

            <label>Calories</label>
            <Input type="text" onChange={handleCaloriesInput} value={calories} />

            <label>Servings</label>
            <Input type="text" onChange={handleServingsInput} value={servings} />

            <button type="submit">Add Food</button>
        </form>
        
    </>
)

}

export default AddFood;