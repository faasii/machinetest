import { useRef, useState, useEffect, useContext, Fragment } from "react";

import { Col, Row, Form, Button } from 'react-bootstrap'



const ProductSelectForm = (props) => {
  const [selectedQty, setselectedQty] = useState(1)



  const [stock, setStock] = useState()


  const increment = ()=>{
    setselectedQty(selectedQty + 1)
  }

  const decrement = ()=>{
    selectedQty > 1 && setselectedQty(selectedQty - 1)
  }




  return (
    <Fragment>

      <Col md={6}>

      <Row xs="auto"> 
        <Col md={4} m={0}>
          <Button variant="light" onClick={()=>decrement()}>-</Button>
        </Col>
        <Col md={4}>

          <Button variant="light">{selectedQty}</Button>
        </Col>
        <Col md={4}  m={0}>

          <Button variant="light" onClick={()=>increment()}>+</Button>
        </Col>
      </Row>
      </Col>





      {props.stockValue ?
        <p className='text-muted'>Only {props.stockValue} Left</p>
        :
        <p className='text-warning'>Out of stock</p>
      }
      <Button onClick={()=>props.add(selectedQty)}>+ Add to cart</Button>

    </Fragment>
  );
};

export default ProductSelectForm;
