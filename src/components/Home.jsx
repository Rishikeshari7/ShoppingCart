import React, { useEffect, useState } from "react";
import "./Home.css";
import Spinner from "./Spinner";
import ProductItem from "./ProductItem";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [dataItem, setDataItem] = useState(0);
  const fetchData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setDataItem(data);
    console.log("Data item hai", dataItem);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
        {dataItem.length > 0 ?
        <div className="home-cont">
            {
                dataItem.map((item,)=>(<ProductItem key={item.id} item={item}/>))
            }
        </div>
        :
        <Spinner/>
        }
    </>
  )};

export default Home;
