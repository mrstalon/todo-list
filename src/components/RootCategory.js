import React from 'react';
import { connect } from 'react-redux';
import { showNestedCategories, matchCurrentCategoryAsChoosedOne, addNestedCategory, activateEditMode } from '../actions/category-actions';
import { changeTasksToRender } from '../actions/todo-actions';
import CategoryNameEditor from './CategoryNameEditor';
import DeleteCategory from './DeleteCategory';


class RootCategory extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddNestedCategoryButton = this.handleAddNestedCategoryButton.bind(this);
        this.handleActivateModeOn = this.handleActivateModeOn.bind(this);
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
    handleAddNestedCategoryButton(e) {
        e.stopPropagation();
        e.stopPropagation();
        this.props.addNestedCategory();
    }
    handleActivateModeOn(e) {
        e.stopPropagation();
        this.props.activateEditMode();
    }
    render() {
        if (this.props.category.editModeIsOn) {
            if (this.props.id === this.props.choosedCategoryId) {
                return (
                    <div className='root-category' onClick={this.toggleCategory.bind(this)}>
                        <div>
                            <input type="checkbox" onClick={() => false} checked disabled/>
                            <CategoryNameEditor
                                id={this.props.id}
                            />
                        </div>
                        <div>
                            <DeleteCategory id={this.props.id} />
                            <button className="add-nested-category-button" onClick={this.handleAddNestedCategoryButton}>
                                <img src="./photos/plus-icon.png" />
                            </button>
                        </div>
                    </div>
                );
            }
            return (
                <div className='root-category' onClick={this.toggleCategory.bind(this)}>
                    <div>
                        <input type="checkbox" onClick={() => false} display="none"/>
                        <CategoryNameEditor
                            id={this.props.id}
                        />
                    </div>
                    <div>
                        <DeleteCategory id={this.props.id} />
                        <button className="add-nested-category-button">
                            <img src="./photos/plus-icon.png" />
                        </button>
                    </div>
                </div>
            );
        }
        if (this.props.id === this.props.choosedCategoryId) {
            return (
                <div className='root-category' onClick={this.toggleCategory.bind(this)}>
                    <div>
                        <input type="checkbox" onClick={() => false} checked disabled/>
                        <h3>{this.props.name}</h3>
                        <button className="change-category-name-button" onClick={this.handleActivateModeOn} >
                            <img src="./photos/redact-icon.png" />
                        </button>
                    </div>
                    <div>
                        <DeleteCategory id={this.props.id} />
                        <button className="add-nested-category-button" onClick={this.handleAddNestedCategoryButton}>
                            <img src="./photos/plus-icon.png" />
                        </button>
                    </div>
                </div>
            );
        }
        return (
            <div className='root-category' onClick={this.toggleCategory.bind(this)}>
                <div>
                    <input type="checkbox" onClick={() => false} display="none"/>
                    <h3>{this.props.name}</h3>
                    <button className="change-category-name-button" onClick={this.handleActivateModeOn} >
                        <img src="./photos/redact-icon.png" />
                    </button>
                </div>
                <div>
                    <DeleteCategory id={this.props.id} />
                    <button className="add-nested-category-button">
                        <img src="./photos/plus-icon.png" />
                    </button>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        showNestedCategories: () => dispatch(showNestedCategories(ownProps.id)),
        matchCurrentCategoryAsChoosedOne: () => dispatch(matchCurrentCategoryAsChoosedOne(ownProps.id)),
        changeTasksToRender: () => dispatch(changeTasksToRender(ownProps.id)),
        addNestedCategory: () => dispatch(addNestedCategory(ownProps.id)),
        activateEditMode: () => dispatch(activateEditMode(ownProps.id)),
    };
}

function mapStateToProps(state) {
    return {
        choosedCategoryId: state.choosedCategoryId,
        categoryEditModeIsOn: state.categoryEditModeIsOn,
        state,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RootCategory);
