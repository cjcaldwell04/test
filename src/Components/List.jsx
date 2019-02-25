import React, {Component} from 'react';
import LoadingHOC from './LoadingHOC';
import '../App.css';
 
const List = (props) =>{
  const{recipes} = props
  return(
  	<div>
    	<div className="recipes"></div>
    	<div className="jumbotron jumbotron-fluid">
    		<center>
    			<h1 className="display-5">Search for your recipes here!</h1>
    		</center>
    	</div>
    	<div className="container">
			<div className="container mb-4">
				<div className="row">
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
										<option>Calories Burned</option>
										<option>Difficulty</option>
									</select>
								</div>
							</div>
						</form>
					</div>
					<div className="col-lg-3">
						<form className="form-inline">
							<div className="form-group row">
								<div className="col-md-8">
									<label htmlFor="results">Results Per Page: </label>
								</div>
								<div className="col-md-4">
									<select>
										<option>25</option>
										<option>50</option>
										<option>100</option>
									</select>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className="row" id="row" >
      		{recipes.map(recipe => (
				<div className="col-md-4">
					<div className="card">
						<img className="card-img-top" src={recipe.image_url} alt="Finished Recipe"/>
						<div className="card-body">
							<h5 className="card-title text-center">{recipe.title}</h5>
							<p className="card-text text-center">Publisher: {recipe.publisher}</p>
							<p className="card-text text-center">Calories: {recipe.f2f_url}</p>
							<p className="card-text text-center">Cost: </p>
							<form method="POST" action="" acceptCharset="UTF-8">
								<input name="hidden" type="hidden" value=""/>
								<button type="submit" className="btn btn-sm btn-success">View Instructions</button>
							</form>
						</div>
						<div className="card-footer">
							<small className="text-muted text-center">Rating: </small>
						</div>
					</div>
				</div>
			))}
			</div>
		</div>
    </div>
  )
}
 
export default LoadingHOC(List)