import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Header() {
  return (
    <React.Fragment>
<Container>
    <Row>
        <Col md={4}>
            <img src='http://glorywebsdemo.com/themeforest/html/carveordering/images/logo.png'/>
        </Col>
        <Col md={8}>
            <ul className='headerlist'>
                <li>Home</li>
                <li>About</li>
                <li>Order</li>
                <li>Login</li>
                <li>Register</li>
                <li>Cart : (0) $00.00</li>
            </ul>
        </Col>
    </Row>
</Container>

    </React.Fragment>
  )
}

export default Header