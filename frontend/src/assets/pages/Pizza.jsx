/* import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import '../style/PizzaDetail.css'
import { useParams } from 'react-router-dom';


const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // ID fijo de la pizza que queremos mostrar
  const pizzaId = 'p001';

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${pizzaId}`);
        if (!response.ok) {
          throw new Error('Error al obtener la pizza');
        }
        const data = await response.json();
        setPizza(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPizza();
  }, []);  // No necesitamos incluir pizzaId como dependencia, porque no cambiará

  if (loading) return <p>Cargando pizza...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="pizza-detail">
      <h2 className='pizza-title'>{pizza.name}</h2>
      <p className='pizza-price'>Precio: ${pizza.price}</p>
      <img src={pizza.img} alt={pizza.name} style={{ width: '100%', height: 'auto' }} />
      <p>{pizza.desc}</p>
      <p>Ingredientes: </p>
        <ul>
            <li>{pizza.ingredients.join(', ')}</li>
        
        </ul>
      <Button variant="primary">Añadir al carrito 🛒</Button>
    </div>
  );
};

export default Pizza; */
/* import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { useContext, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Pizza = () => {
  const { getPizza,addToCart, userPizza, setUserPizza } = useContext(CartContext);
  const { id } = useParams();

  console.log(setUserPizza)
  useEffect(() => {
    getPizza(id);
  }, [id, getPizza]);

  // Renderizar solo si los datos están cargados
  if (!userPizza || !userPizza.ingredients) {
    return <p>Cargando pizza...</p>;
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <Card style={{ width: "25rem" }}>
          <Card.Img variant="top" src={userPizza.img} />
          <Card.Body>
            <Card.Title>{userPizza.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <Card.Text>INGREDIENTES:</Card.Text>
              <Card.Text>{userPizza.desc}</Card.Text>
              <ul>
                {userPizza.ingredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
            </ListGroup.Item>
            <ListGroup.Item>
              <Card.Title>PRECIO: {userPizza.price}</Card.Title>
              <div className="d-flex justify-content-center">
                <Card.Link href="#" className="mx-2 m-3">
                  <Button variant="dark" onClick={() => addToCart(userPizza)}>Añadir 🛒 </Button>
                </Card.Link>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </>
  );
};

export default Pizza; */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Pizza = () => {
  const { id } = useParams(); // Obtener el id de la pizza
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        if (!response.ok) {
          throw new Error('Error al obtener la pizza');
        }
        const data = await response.json();
        setPizza(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPizza();
  }, [id]);

  if (loading) return <p>Cargando pizza...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>{pizza.name}</h1>
      <img src={pizza.img} alt={pizza.name} />
      <p>{pizza.description}</p>
      <p>Ingredientes: {pizza.ingredients.join(', ')}</p>
      <p>Precio: ${pizza.price}</p>
    </div>
  );
};

export default Pizza;





