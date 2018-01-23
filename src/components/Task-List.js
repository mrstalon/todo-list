import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Task from './Task';
import TaskEditor from './TaskEditor';
import TaskRenderSettings from './TaskRenderSettings';


class TaskList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const isEditModeIsOff = this.props.todosToShow.every((item) => {
            return !item.editModeIsOn;
        });

        const todoWithEditModeOn = this.props.todosToShow.find((item, index) => {
            if (item.editModeIsOn) {
                item.id = index;
                return item;
            }
        });

        if (!isEditModeIsOff) {
            return (
                <TaskEditor id={todoWithEditModeOn.id} history={this.props.history} todo={this.props.todosToShow[todoWithEditModeOn.id]} />
            );
        }

        return (
            <div className="task-list">
                <TaskRenderSettings />
                <h1>{this.props.choosedCategoryName}</h1>
                {this.props.todosToShow.map((todo, index) => {
                    if (this.props.showCompletedTasks) {
                        return (
                            <Task todo={todo} key={index} id={index}/>
                        );
                    }

                    if (!todo.isCompleted) {
                        return (
                            <Task todo={todo} key={index} id={index}/>
                        );
                    }

                })}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        todosToShow: state.tasksToRender,
        choosedCategoryName: state.choosedCategoryName,
        showCompletedTasks: state.showCompletedTasks,
        state,
    };
}

TaskList.propTypes = {
    todosToShow: PropTypes.array,
};

export default connect(mapStateToProps)(TaskList);

