import React from 'react';
import { connect } from 'react-redux';
import { changeSortFilterSettings } from '../actions/todo-actions';


class TaskRenderSettings extends React.Component {
    constructor(props) {
        super(props);
        this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
    }
    handleCheckBoxChange() {
        this.props.changeSortFilterSettings();
    }
    render() {
        let checkbox;
        if (this.props.showCompletedTasks) {
            checkbox = <input type="checkbox" onChange={this.handleCheckBoxChange} checked />;
        } else {
            checkbox = <input type="checkbox" onChange={this.handleCheckBoxChange} />;
        }

        return (
            <div className="task-render-setting-container">
                <h2>Show completed tasks?</h2>
                {checkbox}
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return {
        changeSortFilterSettings: () => dispatch(changeSortFilterSettings()),
    };
}

function mapStateToProps(state) {
    return {
        showCompletedTasks: state.showCompletedTasks,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskRenderSettings);
