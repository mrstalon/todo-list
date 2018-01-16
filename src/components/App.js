import React from 'react';
import {connect} from 'react-redux';


class App extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <ul>
               Hello world
            </ul>
        )
    }
    componentDidMount() {
        console.log(this.props);
    }
}




function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}


export default connect(mapStateToProps)(App);