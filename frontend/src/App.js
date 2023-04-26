import { useState } from 'react';
import './App.css';
import axios from 'axios';
import Header from './Components/Header/Header';
import Homepage from './Components/Home/Homepage';
import { Route, Routes } from 'react-router-dom';
import {Box} from '@mui/material';
import Cart from './Components/Home/cart';
 

function App() {


  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  //const[saveforlater, setSaveforLater] = useState([]);

  const handleClick = (product) => {
    <script>
{
  alert("Product added to cart")
}
</script>
    if (cart.indexOf(product) !== -1) return;
     setCart([...cart, product]);
    // console.log(cart);


   
   axios.post(`https://backend-production-7f7a.up.railway.app/cart`, product)
      .then(function(res) {
        console.log(res.data);
        setCart([...cart, product]);
        
      })
      .catch(function(err)  {
        console.error(err);
      });
      

       console.log(product);
  };


  const handleChange = (product, d) => {
    const ind = cart.indexOf(product);
    const arr = cart;
    arr[ind].amount += d;
    

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
    
  };

  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]);

  return (
    <div>
       <Header setShow={setShow} size={cart.length}/>
       <Box style = {{marginTop:70}}>
       <Routes>
       {show ? (
          
        <Route exact path ="/" element={<Homepage handleClick={handleClick} />}/>
      ) : (
        <Route path = "/Cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} handleClick={handleClick} />}/>
      )}
      </Routes>
      </Box> 

        
    </div>
  );
}

export default App;

