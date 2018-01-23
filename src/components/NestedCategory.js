import React from 'react';
import { connect } from 'react-redux';
import { showNestedCategories, matchCurrentCategoryAsChoosedOne, activateEditMode } from '../actions/category-actions';
import { changeTasksToRender } from '../actions/todo-actions';
import CategoryNameEditor from './CategoryNameEditor';
import DeleteCategory from './DeleteCategory';


class NestedCategory extends React.Component {
    constructor(props) {
        super(props);
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
    handleActivateModeOn(e) {
        e.stopPropagation();
        this.props.activateEditMode();
    }
    render() {
        if (this.props.category.editModeIsOn) {
            if (this.props.id === this.props.choosedCategoryId) {
                return (
                    <div className='child-category' onClick={this.toggleCategory.bind(this)}>
                        <div>
                            <input type="checkbox" onClick={() => false} checked disabled/>
                            <CategoryNameEditor
                                id={this.props.id}
                            />
                        </div>
                    </div>
                );
            }
            return (
                <div className='child-category' onClick={this.toggleCategory.bind(this)}>
                    <div>
                        <input type="checkbox" onClick={() => false} display="none"/>
                        <CategoryNameEditor
                            id={this.props.id}
                        />
                    </div>
                </div>
            );
        }
        if (this.props.id === this.props.choosedCategoryId) {
            return (
                <div className='child-category' onClick={this.toggleCategory.bind(this)}>
                    <div>
                        <div>
                            <input type="checkbox" onClick={() => false} checked disabled/>
                            <h3>{this.props.name}</h3>
                            <button className="change-category-name-button" onClick={this.handleActivateModeOn} >
                                <img src="./photos/redact-icon.png" />
                            </button>
                        </div>

                        <DeleteCategory id={this.props.id} />
                    </div>
                </div>
            );
        }
        return (
            <div className='child-category' onClick={this.toggleCategory.bind(this)}>
                <div>
                    <div>
                        <input type="checkbox" onClick={() => false} display="none"/>
                        <h3>{this.props.name}</h3>
                        <button className="change-category-name-button" onClick={this.handleActivateModeOn} >
                            <img src="./photos/redact-icon.png" />
                        </button>
                    </div>

                    <DeleteCategory id={this.props.id} />
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
        activateEditMode: () => dispatch(activateEditMode(ownProps.id)),
    };
}

function mapStateToProps(state) {
    return {
        choosedCategoryId: state.choosedCategoryId,
        state,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NestedCategory);
