import React from 'react'
import { connect } from 'react-redux';
import { Badge } from 'reactstrap';

function ProductList( props) {
    return (
        <div>
            <h2>
            <Badge color='warning'> Product</Badge>
                 <Badge color='success'>{props.currentCategory.categoryName}</Badge></h2>
            
        </div>
    )
}
function mapStatetToProps(state) {
    return {
      currentCategory: state.changeCategoryReducer,
      
    };
  }


  export default connect(mapStatetToProps, )(ProductList);
  
