import { Card, Row, Col, Divider, Input, Button } from "antd";
import "antd/dist/antd.css";
import React from "react";

function FoodBox({ food, deleteFood }) {

    return (
        <Row>
        <Col>
        <Card
          title={food.name}
          style={{ width: 230, height: 300, margin: 10 }}
        >
          <img src={food.image} height={60} />
          <p>Calories: {food.calories}</p>
          <p>Servings: {food.servings}</p>
          <p>
            <b>Total Calories: {food.calories * food.servings} </b> kcal
          </p>
          <button onClick={() => deleteFood(food.name)}>Delete Food</button>
        </Card>
      </Col>
      </Row>
    )};
    
    export default FoodBox;