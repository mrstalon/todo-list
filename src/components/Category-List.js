import React from 'react';
import { connect } from 'react-redux';
import Category from './Category';


class CategoryList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="category-list-container">
                <ul className="category-list">
                    {
                        this.props.categoryList.map((category, index) => {
                            return (
                                <li key={index}>
                                    <Category name={category.categoryName}
                                        id={category.id}
                                        className="root-category"
                                        history={this.props.history}
                                        category={category}
                                    />
                                    {category.children.map((childCategory, childIndex) => {
                                        if (category.isChoosed) {
                                            return (
                                                <Category name={childCategory.categoryName}
                                                    id={category.id + '' + childCategory.id}
                                                    key={childIndex}
                                                    className="child-category"
                                                    history={this.props.history}
                                                    category={childCategory}
                                                />
                                            );
                                        }
                                    })}
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        categoryList: state.categoryList,
    };
}


export default connect(mapStateToProps)(CategoryList);
