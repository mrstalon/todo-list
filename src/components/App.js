import React from 'react';
import { Route } from 'react-router-dom';
import CategoryList from './Category-List';
import TaskList from './Task-List';

import AddTodo from './AddTodo';

class App extends React.Component {

    render() {
        return (
            <div className="app-container">
                <Route path='/' component={CategoryList} />
                <div className="task-list-container">
                    <Route path='/tasks' component={AddTodo} />
                    <Route path='/tasks' component={TaskList} />
                </div>

            </div>
        );
    }
}

export default App;
