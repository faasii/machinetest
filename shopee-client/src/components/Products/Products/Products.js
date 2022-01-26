import React, { Fragment, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Card from "../../UI/Card";
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import { addProduct } from "../../../features/stockSlice";



function Products() {
  const dispatch = useDispatch()

  const products = useSelector((state) => state.stock.value)


  useEffect(async () => {
    getProducts();
  }, []);


  const getProducts = async () => {
    try {
      var response = await axios.post('/api/get/products')
      response.data && dispatch(addProduct(response.data))
    } catch (error) {
      console.log(error)

    }
  }



  return (
    <div>
      <Fragment>
        <Container className="mt-5">
          <h3 className="mb-4">Best Deals</h3>
          <Row>
            {products &&
              products.map((item) => {
                return (
                  <ProductCard
                    id={item._id}
                    key={item._id}
                    name={item.name}
                    stock={item.stock}
                    price={item.price}
                  />
                );
              })}
          </Row>
        </Container>
      </Fragment>
    </div>
  );
}

export default Products;
