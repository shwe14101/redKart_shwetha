//import React from 'react'
import React, { useState, useEffect } from "react";
import './cart.css';
import ProductCard from './prdcard';
import axios from "axios";
//import Cartprds from '../../../../backend/models/cart'
import Productdisplay from './productsdisplay';
//import {hosturl} from '../host/hosturl';

//import products from "../../../../backend/models/products";
const Cart = ({ cart, setCart, handleChange, handleClick }) =>{


  useEffect(() => {

    axios.get(`https://backend-production-7f7a.up.railway.app/cart`)
      .then(res =>{
        console.log(res);
        setCart(res.data);
    })
         
      .catch(err => console.log(err));
    
    
  }, []);
    

    const [price, setPrice] = useState(0);
    const [saveforlater, setSaveforLater] = useState([]);

    useEffect(() => {
      function fetchsave(){

      axios.get(`https://backend-production-7f7a.up.railway.app/saveforlater`)
        .then(res =>{
          console.log(res);
          setSaveforLater(res.data);
      })
           
        .catch(err => console.log(err));
    }
      fetchsave()
    }, []);
    
  const handleSave = (product) => {
    if (saveforlater.indexOf(product) !== -1) return;
     setSaveforLater([...saveforlater, product]);
    // console.log(saveforlater);

    axios.post(`https://backend-production-7f7a.up.railway.app/saveforlater`, product)
    .then(function(res) {
      console.log(res.data);
    })
    .catch(function(err)  {
      console.error(err);
    });

     console.log(product);
      

     axios.get(`https://backend-production-7f7a.up.railway.app/saveforlater`)
     .then(res =>{
       console.log(res);
       setSaveforLater(res.data);

       setSaveforLater([...saveforlater, product]);
   })
    handleRemove(product._id);
    
    
      
    handlePrice();
  };

 
    const handleRemove = (id) => {
      const arr = cart.filter((product) => product._id !== id); 
      axios.delete(`https://backend-production-7f7a.up.railway.app/cart/${id}`)  
      .then(res => {  
  
         //const arr = cart.filter((product) => product.id !== id); 
         console.log(arr);
       
      setCart(arr);
    
        
      })  
      

    //   const arr = cart.filter((product) => product.id !== id);

      //setCart(arr);
      handlePrice();
    };

    const handleRemoveFromSaveLater = (id) => {
        const arr = saveforlater.filter((product) => product._id !== id);

        axios.delete(`https://backend-production-7f7a.up.railway.app/save/${id}`)  
      .then(res => {  
  
         //const arr = cart.filter((product) => product.id !== id); 
         console.log(arr);
    
         setSaveforLater(arr);
      })  
      //  setSaveforLater(arr);
        handlePrice();
      };
    
    const handleAddagain = (product) =>{

      setCart([...cart, product]);
        
        handleClick(product);
        axios.get(`https://backend-production-7f7a.up.railway.app/cart`)
        .then(res =>{
          console.log(res);
          setCart(res.data);
      })
           
        .catch(err => console.log(err));
      
        console.log(product);
        setCart([...cart, product]);
        handleRemoveFromSaveLater(product._id);
        setCart([...cart, product]);

    };
  
    const handlePrice = () => {
      let ans = 0;
      cart.map((product) => (ans +=  product.amount * product.price));
      setPrice(ans);
    };
  
    useEffect(() => {
      handlePrice();
    });
  
  return (
    <div>
        
        <div className="total">
        <h1  >My Cart ({cart.length})</h1>
        <h3>Total amount {price}</h3>
        
      </div>
         {cart.map((product) => (
        <div className="cart_box" key={product.id}>
          <div className="cart_img">
            <img src={product.image} alt="" />
            <p>{product.title} <br/>Cost: {product.price}</p>
            
          </div>
          <div>
            <button onClick={() => handleChange(product, 1)}>+</button>
            <button>{product.amount}</button>
            <button onClick={() => handleChange(product, -1)}>-</button>
          </div>
          <div>
          <span>Total cost: {product.price * product.amount}</span>
            <button onClick={() => handleRemove(product._id)}>Remove</button>
            <button onClick={() => handleSave(product)}>Save for later</button>
          </div>
        </div>
      ))}
      
      
      <h1>Save for later ({saveforlater.length})</h1>
      
         {saveforlater.map((product) => (
        <div className="cart_box" key={product.id}>
          <div className="cart_img">
            <img src={product.image} alt="" />
            <p>{product.title}</p>
            
          </div>

          <div>
            <button onClick={() => handleAddagain(product)}>Add to cart</button>
          </div>
          </div>
         ))}


    </div>
  )
}

export default Cart;
