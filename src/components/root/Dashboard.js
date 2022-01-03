import React from 'react'
import { Col, Row } from 'reactstrap'
import CategoryList from '../category/CategoryList'
import ProductList from '../products/ProductList'

function Dashboard() {
    return (
        <div>
            <Row>
                <Col xs="3">
                    <CategoryList/>
                </Col>
                <Col xs="3">
                    <ProductList/>
                </Col>
            </Row>
            
        </div>
    )
}

export default Dashboard
