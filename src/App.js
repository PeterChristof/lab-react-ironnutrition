// src/App.js
import "./App.css";
import foodsJSON from "./foods.json";
import React, {useState} from "react";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";



function App() {
  const [foods, setFoods] = useState(foodsJSON);

  const addFood = (newFood) => {
    setFoods([...foodsJSON, newFood]); 
  };

  const deleteFood = (name) => {
    setFoods(foods.filter((food) => food.name !== name));
  };
  
  return (
    <>
    <AddFoodForm addFood={addFood}/>
    <h1>Food List</h1>
      <div className="App">
        {foods.map((food) => {
        return (
        <div>
        
         <FoodBox food={food} deleteFood={deleteFood}/>
         
        </div>

          )
            })}

      </div>
    </>
  )
}
export default App;
