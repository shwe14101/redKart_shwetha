import React from 'react'
//import {Link} from "react-router-dom";
import './prdcard.css'

import { connect } from "react-redux";

const ProductCard = (props) => {
    const product = props.product;
    const handleClick = props.handleClick;
   // const addToCart = props.addToCart;



  return (
    <div className='cards'>
        <div className='image_box'>
            <img src={product.image} width={200} height={200}/>
        </div >
      <div className='details'>
 
  <p>{product.title}<br/>{product.brand}<br/>{product.price}</p>
            <button onClick={()=>handleClick(product)} >Add to cart</button>
            {/* <button onClick={() => addToCart(product)}>Add to cart</button> */}
            <br/>
            <br/>
            <br/>
  </div>
  
           
            
           

          

    </div>
  )
  }


  // const mapStateToProps = (state) => {
  //   return {
  //     //product: state.cart.product,
  //   };
  // };
  
  // const mapDispatchToProps = (dispatch) => {
  //   return {
  //     addToCart: (id) => dispatch(addToCart(id)),
  //   };
  // };

// export default connect(mapStateToProps, mapDispatchToProps)(ProductCard)
export default (ProductCard)