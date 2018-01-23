import React from 'react';
import { connect } from 'react-redux';
import { deleteCategory } from '../actions/category-actions';


class DeleteCategory extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.stopPropagation();
        this.props.deleteCategory();
    }

    render() {
        return (
            <button className="delete-category-button" onClick={this.handleClick} >
                <img src="./photos/bucket-icon.png" />
            </button>
        );
    }
}


function mapDispatchToProps(dispatch, ownProps) {
    return {
        deleteCategory: () => dispatch(deleteCategory(ownProps.id)),
    };
}

export default connect(null, mapDispatchToProps)(DeleteCategory);
