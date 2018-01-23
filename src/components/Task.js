import React from 'react';
import { connect } from 'react-redux';
import { activateEditMode } from '../actions/todo-actions';
import DeleteTask from './DeleteTask';


class Task extends React.Component {
    constructor(props) {
        super(props);
        this.handleActivateModeOn = this.handleActivateModeOn.bind(this);
    }

    handleActivateModeOn(e) {
        e.stopPropagation();
        this.props.activateEditMode();
    }

    render() {
        let checkbox;

        if (this.props.todo.isCompleted) {
            checkbox = <input type="checkbox" checked disabled/>;
        } else {
            checkbox = <input type="checkbox" disabled/>;
        }

        return (
            <div className="todo">
                <div>
                    {checkbox}
                    <h2>{this.props.todo.todoName}</h2>
                    <button className="change-task-name-button" onClick={this.handleActivateModeOn} >
                        <img src="./photos/redact-icon.png" />
                    </button>
                </div>
                <div>
                    <DeleteTask id={this.props.id} />
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        activateEditMode: () => dispatch(activateEditMode(ownProps.id)),
    };
}

function mapStateToProps(state) {
    return {
        state,
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Task);
