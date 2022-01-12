import React, { Component, useEffect } from 'react'
import { connect } from 'react-redux'
import { Badge, Button, ListGroup, ListGroupItem } from 'reactstrap'
import { bindActionCreators } from 'redux'
import * as categoryActions from '../../redux/actions/categoryActions'
import * as productActions from '../../redux/actions/productActions'

function CategoryList(props) {
  useEffect(() => {
    props.actions.getCategories()
  })

  let selectCategory = (category) => {
    props.actions.changeCategory(category)
    props.actions.getProducts(category.id)
    debugger
  }

  return (
    <div>
      <h2>
        {' '}
        <Badge color="warning"> Category List</Badge>{' '}
      </h2>
      <ListGroup>
        {props.categories.map((category) => (
          <ListGroupItem
            active={category.id == props.currentCategory.id}
            style={{
              background: 'linear-gradient(45deg, #FF569A ,#00AAFF)',
              border: 0,
              borderRadius: 20,
              padding: '14px 30px',
            }}
            onClick={() => selectCategory(category)}
            key={category.id}
          >
            {category.categoryName}
          </ListGroupItem>
        ))}
      </ListGroup>

      {/* 

        <Button
        style={{
          background: "linear-gradient(45deg,#FF54F2, #FF8E53)",
          border: 0,
          borderRadius: 20,
          padding: "14px 30px",
        }}
      >
        Go to 
      </Button> */}
    </div>
  )
}

function mapStatetToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch,
      ),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch,
      ),
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
    },
  }
}

export default connect(mapStatetToProps, mapDispatchToProps)(CategoryList)
