import { render } from "@testing-library/react";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";


function CategoryList(props) {
 
  
  return (
  
    
    <div>
      debugger;
      <h2>category List {props.actions.getCategories().length} </h2>
      <h5>Seçilen Kategory: {props.currentCategory.categoryName}</h5>
      <Button style={{background:'linear-gradient(45deg,#FF54F2, #FF8E53)', border:0,borderRadius:20,padding:'14px 30px'
      
      
    }}>Go to the</Button>
    </div>
  )


  }
function mapStatetToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
    },
  };
}


export default connect(mapStatetToProps, mapDispatchToProps)(CategoryList);


