import React from 'react';
import { connect } from 'react-redux';
import { deleteTask } from '../actions/todo-actions';


class DeleteTask extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteTask = this.handleDeleteTask.bind(this);
    }
    handleDeleteTask(e) {
        this.props.deleteTask();
    }
    render() {
        return (
            <button className="delete-task-button" onClick={this.handleDeleteTask}>
                <img src="./photos/bucket-icon.png" />
            </button>
        );
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        deleteTask: () => dispatch(deleteTask(ownProps.id)),
    };
}

export default connect(null, mapDispatchToProps)(DeleteTask);
