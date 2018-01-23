import React from 'react';
import { connect } from 'react-redux';
import NestedCategory from './NestedCategory';
import RootCategory from './RootCategory';


class Category extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        // check wether category is a root one or a child one
        let componentToReturn;

        if (this.props.id.length < 2) {
            componentToReturn = <RootCategory name={this.props.name} id={this.props.id} history={this.props.history} category={this.props.category}/>;
        } else {
            componentToReturn = <NestedCategory name={this.props.name} id={this.props.id} history={this.props.history} category={this.props.category}/>;
        }
        return componentToReturn;

    }
}

function mapStateToProps(state) {
    return {
        choosedCategoryId: state.choosedCategoryId,
    };
}

export default connect(mapStateToProps)(Category);
