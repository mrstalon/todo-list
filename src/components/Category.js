import React from 'react';
import { connect } from 'react-redux';
import { showNestedCategories, matchCurrentCategoryAsChoosedOne, changeTasksToRender } from '../actions/category-actions';


class Category extends React.Component {
    constructor(props) {
        super(props);
    }

    toggleCategory() {
        if (this.props.id.length === 2) {
            this.props.changeTasksToRender();
            this.props.matchCurrentCategoryAsChoosedOne();
        } else {
            this.props.changeTasksToRender();
            this.props.matchCurrentCategoryAsChoosedOne();
            this.props.showNestedCategories();
        }
        this.props.history.push('/tasks');
    }

    render() {
        // check wether category is a root one or a child one
        let className = 'root-category';
        if (this.props.id.length >= 2) {
            className = 'child-category';
        }


        return (
            <div className={className} onClick={this.toggleCategory.bind(this)}>
                <h3>{this.props.name}</h3>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch, ownProps) {
    return {
        showNestedCategories: () => dispatch(showNestedCategories(ownProps.id)),
        matchCurrentCategoryAsChoosedOne: () => dispatch(matchCurrentCategoryAsChoosedOne(ownProps.id)),
        changeTasksToRender: () => dispatch(changeTasksToRender(ownProps.id)),
    };
}


export default connect(null, mapDispatchToProps)(Category);
