import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useSelector } from "react-redux";
import ProductCard from "./prdcard";
import Pagination from "./pagination";
import {getProductsByPriceSort, getProductsBySize, getProductsByCategory, getProductsByBrand, getProductsBySearch} from '../Filter/utils';
import '../Filter/utils/index'


function Productdisplay  (props) {
  //const pageNumber = props.params.pageNumber || 1;
    const handleClick = props.handleClick;
   // const addtocart = props.addToCart;
    const [products, setProducts] = useState([]);
    
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  
  
    useEffect(()=>{
    function fetchProducts(){
  
  
    axios
    .get(`https://backend-production-7f7a.up.railway.app/prod/?page=${page}`)
    .then((res)=>{
        setProducts(res.data);
    })
    .catch((err)=>{
        console.log("Could not load the list");
    });
 }

     fetchProducts();

    },[page]);

    


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);
  
 
console.log("before products",products);
 const {sort, size, category, brand, search} = useSelector(filterState=>filterState.filter)
const filteredProductsByPrice = getProductsByPriceSort(products, sort);
const filteredProductsBySize = getProductsBySize(filteredProductsByPrice, size);
const filteredProductsByCategory = getProductsByCategory(filteredProductsBySize, category);
const filteredProductsByBrand = getProductsByBrand(filteredProductsByCategory, brand);
const filteredProductBySearch = getProductsBySearch(filteredProductsByBrand,search);
console.log("products",filteredProductBySearch);
const a1=[];
 filteredProductBySearch.length > 0 ? filteredProductBySearch.map((product,k) => a1.push( <ProductCard product = {product} key = {k}  handleClick={handleClick}/>)):(<span>Nothing to display</span>);

//end of display


  // Change page

  const paginate = pageNumber => setPage(pageNumber);
    return (
        <>
         <div className='grid-container'>
            {a1}
           
        </div>
        <Pagination
        postsPerPage={postsPerPage}
        totalPosts={products.length}
        paginate={paginate}
      />




        </>

    )

}

export default Productdisplay;

