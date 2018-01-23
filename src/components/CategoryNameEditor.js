import React from 'react';
import { connect } from 'react-redux';
import { activateEditMode, changeEditingCategoryName, changeCategoryName } from '../actions/category-actions';


class CategoryNameEditor extends React.Component {
    constructor(props) {
        super(props);
        this.handleCategoryNameChange = this.handleCategoryNameChange.bind(this);
        this.handleSaveNewCategoryName = this.handleSaveNewCategoryName.bind(this);
    }
    handleCategoryNameChange(e) {
        this.props.changeEditingCategoryName(e.target.value);
    }
    handleSaveNewCategoryName(e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.changeCategoryName();
    }
    render() {
        return (
            <form onSubmit={this.handleSaveNewCategoryName} >
                <input type="text" onChange={this.handleCategoryNameChange} onClick={(e) => {
                    e.stopPropagation();
                }}/>
                <input type="submit" value="Save" onClick={(e) => {
                    e.stopPropagation();
                }} />
            </form>
        );
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        activateEditMode: () => dispatch(activateEditMode(ownProps.id)),
        changeEditingCategoryName: (newName) => dispatch(changeEditingCategoryName(newName, ownProps.id)),
        changeCategoryName: () => dispatch(changeCategoryName(ownProps.id)),
    };
}

export default connect(null, mapDispatchToProps)(CategoryNameEditor);
