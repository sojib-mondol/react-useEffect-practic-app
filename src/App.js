import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  // const products = [
  //   {name: 'Laptop', price: 53000},
  //   {name: 'Phone', price: 3000},
  //   {name: 'Watch', price: 100000},
  //   {name: 'tabelt', price: 50},
  // ]

  return (
    <div className="App">

      {/* {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      } */}
      {/* <Product name="laptop"></Product>
      <Product name="Iphone" price="7500"></Product> */}

      {/* <Counter></Counter>
       */}
       
       <ExternalUsers></ExternalUsers>
    </div>
  );
}





function ExternalUsers() {

  const [users, setUsers]  = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, []) 
  return (
    <div>
      <h2>External Users</h2>
      
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props) {
   return (
    <div style={{border: '2px solid red', margin: '20px'}}>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
   )
}



function Counter() {

  const [count, setCount] = useState(90);
  const IncreaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);  

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={IncreaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

function Product(props){
  return (
    <div className="product">
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
}

export default App;
