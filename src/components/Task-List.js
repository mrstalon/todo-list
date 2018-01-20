import React from 'react';
import { connect } from 'react-redux';


class TaskList extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillUpdate() {
        console.log(this.props.state);
    }
    render() {
        return (
            <div className="task-list">
                {this.props.todosToShow.map((todo, index) => {
                    return (
                        <div key={index} className="todo">
                            <h1>{todo.text}</h1>
                        </div>
                    );
                })}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        todosToShow: state.tasksToRender,
        state: state,
    };
}

export default connect(mapStateToProps)(TaskList);

