import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addNewRootCategory, changeCategoryToAddName } from '../actions/category-actions';

class AddCategory extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.props.changeCategoryToAddName(e.target.value);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.addNewRootCategory();
    }
    render() {
        return (
            <form className="form-category" onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange}/>
                <input type="submit" value="Add Category" />
            </form>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return {
        addNewRootCategory: () => dispatch(addNewRootCategory()),
        changeCategoryToAddName: (categoryName) => dispatch(changeCategoryToAddName(categoryName)),
    };
}

export default connect(null, mapDispatchToProps)(AddCategory);
