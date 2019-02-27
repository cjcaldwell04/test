import React from 'react';
import LoadingHOC from './LoadingHOC';
import '../App.css';
 
const Recipes = (props) =>{
  const{recipes} = props
  return(
  	<div>
    	<div className="recipes_bg">
	    	<div className="bg jumbotron jumbotron-fluid">
	    		<center>
	    			<h1 className="display-4">Search for your recipes here!</h1>
	    		</center>
	    	</div>
    	</div>
    	{' '}
    	<div className="container mb-4">
			<div className="row" style={{marginBottom: 35 + "px"}}>
				<div className="col-lg-5">
					<form className="form-inline">
						<div className="form-group row">
							<div className="col-md-4">
								<label htmlFor="search" className="form-control-static">Search Recipes:</label>
							</div>
							<div className="col-md-5">
								<input type="search" className="form-control" id="search"/>
							</div>
							<div className="col-md-3">
								<button id="search-btn" className="btn btn-primary">Search</button>
							</div>
						</div>
					</form>
				</div>
				<div className="col-lg-4">
					<form className="form-inline">
						<div className="form-group row">
							<div className="col-md-5">
								<label htmlFor="sort">Sort By: </label>
							</div>
							<div className="col-md-7">
								<select>
									<option>Relevence</option>
									<option>Highest Rated</option>
								</select>
							</div>
						</div>
					</form>
				</div>
			</div>
			<div className="row" id="row" >
	      		{recipes.map(recipe => (
	      			//replace below recipe.recipe_id
					<div className="col-md-4" key={recipe.gender} id={recipe.gender}>
						<div className="card">
							<img className="card-img-top" src="https://images.pexels.com/photos/1073772/pexels-photo-1073772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Finished Recipe"/>
							<div className="card-title">
								<a href={recipe.gender}><h5 title="View how to make this meal" className="card-title">{recipe.gender} {recipe.login} {recipe.gender} {recipe.login} {recipe.gender} {recipe.login}</h5></a>
							</div>
							<div className="card-body">
								<p title="Visit the publisher's page" className="card-text"><a className="notBlueLink" href={recipe.gender}>Publisher: {recipe.gender}</a></p>
							</div>
							<div className="card-footer row">
								<div className="col-sm-7"><small title="Rating on food2fork.com" className="text-muted text-center col-sm-4">Rating: {recipe.gender}</small></div>
								<div className="col-sm-2"><button title="Add to your favorites" className="btn btn-brand btn-success"><i className="fa fa-heart favorite"></i></button></div>
								<div className="col-sm-2"><button title="Add to your shopping cart" className="btn btn-brand btn-success"><i className="fa fa-shopping-basket buy"></i></button></div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
    </div>
  )
}
 
export default LoadingHOC(Recipes)