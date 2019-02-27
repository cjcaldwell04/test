import React from 'react';


const RegisterPage = () => (
    <div className="background">
    	<div className="container center-screen">
            <div className="card col-md-8">
                <div className="card-header">Create an Account</div>
                <div className="card-body" style={{marginTop: 75 +"px"}}>
                    <form method="POST" action="">
                        <div className="form-group row">
	                            <label htmlFor="email" className="col-sm-4 col-form-label text-md-right">Email: </label>
	                            <div className="col-md-6">
	                                <input id="email" type="email" className="form-control" name="email" required autoFocus/>
	                            </div>
	                        </div>
	                        <div className="form-group row">
	                            <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password: </label>
	                            <div className="col-md-6">
	                                <input id="password" type="password" className="form-control" name="password" required/>
	                            </div>
	                        </div>
	                        <div className="form-group row">
	                            <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Confirm Password: </label>
	                            <div className="col-md-6">
	                                <input id="password" type="password" className="form-control" name="password" required/>
	                            </div>
	                        </div>
	                        <div className="form-group row mb-0">
	                            <div className="col-md-8 offset-md-4">
	                                <button type="submit" className="btn btn-primary">
                                    Create Account
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
)

export default RegisterPage;