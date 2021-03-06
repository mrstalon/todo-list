import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTodo, changeTodoToAddName, changeTaskToRender } from '../actions/todo-actions';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addTodo();
    }

    handleChange(e) {
        this.props.changeTodoToAddName(e.target.value);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    onChange={this.handleChange}/>
                <input type="submit" value="Add Todo"/>
            </form>
        );
    }
}


function mapDispatchToProps(dispatch, ownProps) {
    return {
        addTodo: () => dispatch(addTodo()),
        changeTodoToAddName: (todoName) => dispatch(changeTodoToAddName(todoName)),
    };
}

function mapStateToProps(state) {
    return {
        choosedCategoryId: state.choosedCategoryId,
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
