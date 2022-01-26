import React, { Fragment, useEffect, useState } from 'react'
import { Button, Spinner, Col } from 'react-bootstrap'

import Modal from '../UI/Modal';
import RegisterForm from './RegisterForm';

const Register = (props) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  })

  return (
    <Modal>
      <RegisterForm onHide={ props.onHide }/>
      <div className='d-flex flex-column-reverse'>
        <button className='btn shadow-none text-right' onClick={props.onHide}>
          Close
        </button>
      </div>
    </Modal>
  );
}

export default Register
