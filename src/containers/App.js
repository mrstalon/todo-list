import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CategoryList from '../components/Category-List';
import {showMoreCategories} from '../actions/showMoreCategories';

class App extends Component {
  render() {
      const {category} = this.props;
      const showMoreCategories = this.props.categoryActions.showMoreCategories;
    return (
        <div  className="app-container">
            <CategoryList categoryList={category} showMoreCategories={showMoreCategories}/>
        </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    category: state.categoryList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    categoryActions: bindActionCreators({showMoreCategories: showMoreCategories}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)