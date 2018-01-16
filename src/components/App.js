import React from 'react';
import {connect} from 'react-redux';


class App extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <ul>
               {
                   this.props.todos.map((todo, index)=>{
                       return (
                           <li key={index}>
                               {todo.text}
                           </li>
                       )
                   })
               }
            </ul>
        )
    }
    componentDidMount() {
        console.log(this.props.todos);
    }
}




function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}


export default connect(mapStateToProps)(App);