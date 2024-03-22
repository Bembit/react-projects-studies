import React, { Component } from 'react';
import './RecipeList.css';
import Recipe from './Recipe';
import PropTypes from 'prop-types';

class RecipeList extends Component {

	static propTypes = {
		recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
		onDelete: PropTypes.func.isRequired
	}

	render() {
			const {onDelete} = this.props;
			const recipes = this.props.recipes.map((kula, index) => (
				<Recipe key={kula.id} {...kula} onDelete={onDelete} />
				));
		return(
			<div className="recipe-list">
			 {recipes}
			</div>
		);
	}
}

export default RecipeList;