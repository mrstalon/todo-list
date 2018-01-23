import React from 'react';
import { Route } from 'react-router-dom';
import CategoryList from './Category-List';
import TaskList from './Task-List';
import AddCategory from './AddCategory';
import ProgressBar from './ProgressBar';
import AddTodo from './AddTodo';


class App extends React.Component {

    render() {
        return (
            <div className="app-container">
                <div className="category-list-container">
                    <Route path='/' component={AddCategory} />
                    <Route path='/' component={CategoryList} />
                </div>
                <div className="task-list-container">
                    <Route exact path='/tasks' component={AddTodo} />
                    <Route path='/tasks' component={ProgressBar} />
                    <Route path='/tasks' component={TaskList} />
                </div>

            </div>
        );
    }
}

export default App;
