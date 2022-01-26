import React, { useContext } from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import image from './../../../assets/images/sample.png'
import { Rate } from 'antd'
import ProductSelectForm from '../ProductItemForm/ProductItemForm'
import { useDispatch } from "react-redux";
import { addtocart } from "../../../features/cartSlice";
import { addStock } from '../../../features/stockSlice'

function ProductCard(props) {
    const { name, price, stock, id } = props
    const dispatch = useDispatch()

    const addtoCart = (qty) => {
        dispatch(addtocart({id:props.id,name:name,price:price,qty:qty}))
        dispatch(addStock({qty:qty,id:props.id}))

    }

    return (
        <Col md={3} xs={6}>
            <Row>
                <Col md={5}>
                    <img src={image} className='img-fluid' alt='product' />
                </Col>
                <Col md={7}>
                    <h5>{name}</h5>
                    <p className='text-primary m-0'>{`$ ${price}`}</p>

                    <Rate defaultValue={3} count={4} className='mb-1' style={{ color: '#3187ED' }} />{'(12)'}

                    <ProductSelectForm add={addtoCart} stockValue={stock} id={id} key={id} />
                </Col>
            </Row>
        </Col>
    )
}

export default ProductCard
