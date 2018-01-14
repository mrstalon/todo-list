import React, { PropTypes, Component} from 'react';


export default class CategoryList extends Component {
    recursiveRender(item) {
        const subItems = item.map( (subItem) => {
            if(!subItem.isChoosed) {
                return;
            }else if(subItem.children.length === 0) {
                const style = {
                    marginLeft: subItem.margin + "px"
                }
                return (
                    <div key={subItem.id} className="category" style={style} onClick={this.onCategoryClick.bind(this, subItem.id)}>
                        <h1>{subItem.name}</h1>
                    </div>
                );
            }else {
                const style = {
                    marginLeft: subItem.margin + "px"
                }
                return (
                    <div key={subItem.id}>
                      <div className="category" style={style} onClick={this.onCategoryClick.bind(this, subItem.id)}>
                          <h1>{subItem.name}</h1>
                      </div>  
                      {this.recursiveRender(subItem.children)}
                    </div>
                )
            }
        });
        return subItems;
    }
    renderCategoriesList(categoryList) {
        return categoryList.map( (item) => {
            if(item.children.length === 0) {
                return (
                    <div key={item.id} className="root-category" onClick={this.onCategoryClick.bind(this, item.id)}>
                        <h1>{item.name}</h1>
                    </div>
                );
            }else {
                const subItems = this.recursiveRender(item.children);
                return (
                    <div key={item.id}  >
                      <div className="root-category" onClick={this.onCategoryClick.bind(this, item.id)}>
                          <h1>{item.name}</h1>
                      </div>    
                      {subItems}
                    </div>
                );
            }
        });
    }
    onCategoryClick(index) {
        console.log(index);
        this.props.showMoreCategories(index);
    }
    render() {
        const {categoryList} = this.props;
        const listToRender = this.renderCategoriesList(categoryList);
        console.log(categoryList);

        return (
            <div className="category-list-container">{listToRender}</div>
        )
    }
}

