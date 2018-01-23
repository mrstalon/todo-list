import React from 'react';
import { connect } from 'react-redux';
import { deactivateEditMode, changeEditingTaskName, changeDescriptionOfTask, changeIsTaskComplete } from '../actions/todo-actions';


class TaskEditor extends React.Component {
    constructor(props) {
        super(props);
        this.handleDataSave = this.handleDataSave.bind(this);
        this.handleTaskNameChange = this.handleTaskNameChange.bind(this);
        this.handleDiscriptionChange = this.handleDiscriptionChange.bind(this);
        this.handleIsTaskCompleteChange = this.handleIsTaskCompleteChange.bind(this);
    }
    componentWillMount() {
        this.props.history.push('/tasks/edit');
    }
    componentWillUnmount() {
        this.props.history.push('/tasks');
    }
    handleDataSave(e) {
        e.stopPropagation();
        this.props.deactivateEditMode();
    }
    handleTaskNameChange(e) {
        this.props.changeEditingTaskName(e.target.value);
    }
    handleDiscriptionChange(e) {
        this.props.changeDescriptionOfTask(e.target.value);
    }
    handleIsTaskCompleteChange() {
        this.props.changeIsTaskComplete();
    }
    render() {
        let checkbox;
        if (this.props.todo.isCompleted) {
            checkbox = <input type="checkbox" onChange={this.handleIsTaskCompleteChange} checked/>;
        } else {
            checkbox = <input type="checkbox" onChange={this.handleIsTaskCompleteChange}/>;
        }

        return (
            <div className="task-edit-mode-container">
                <h1>Edit mode</h1>
                <div className="change-name-container">
                    <input type="text" onChange={this.handleTaskNameChange} placeholder={this.props.todo.todoName}/>
                    <h3>Task Name</h3>
                </div>
                <h2>Description</h2>
                <textarea onChange={this.handleDiscriptionChange} placeholder={this.props.todo.discription}/>
                <div className="complete-checkbox-container">
                    {checkbox}
                    <h3>Is task completed?</h3>
                </div>
                <button className="save-edit-mode-changes-button" onClick={this.handleDataSave} >Save</button>
            </div>
        );
    }

}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        deactivateEditMode: () => dispatch(deactivateEditMode(ownProps.id)),
        changeEditingTaskName: (newName) => dispatch(changeEditingTaskName(newName, ownProps.id)),
        changeDescriptionOfTask: (newDisc) => dispatch(changeDescriptionOfTask(newDisc, ownProps.id)),
        changeIsTaskComplete: () => dispatch(changeIsTaskComplete(ownProps.id)),
    };
}

function mapStateToProps(state) {
    return {
        state,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskEditor);
