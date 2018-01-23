import React from 'react';
import { connect } from 'react-redux';


class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const maxWidth = 600;
        const todosCount = this.props.tasksToRender.length;
        let progressBarWidth = 0;
        let completedTodosCount = 0;
        this.props.tasksToRender.forEach((element) => {
            if (element.isCompleted) {
                completedTodosCount++;
            }
        });
        progressBarWidth = (completedTodosCount * maxWidth) / todosCount;

        const progressBarStyle = {
            width: progressBarWidth + 'px',
        };

        return (
            <div>
                <h2 className="progress-bar-name">Progress Bar</h2>
                <div className="progress-bar-container">
                    <div className="progress-bar" style={progressBarStyle} />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        tasksToRender: state.tasksToRender,
        state,
    };
}

export default connect(mapStateToProps)(ProgressBar);
