import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

function SubmitForm() {    
    const dispatch = useDispatch();
    let selector = useSelector(state => state.formData);
    const navigate = useHistory();
    if (!selector) {
        navigate.goBack();
    }

    function goBack() {
        navigate.goBack();
    }

    function uploadPhoto (e) {
        e.preventDefault()        
    }

    function uploadSingleFile(e) {        
        dispatch({type : 'UPDATE_FORM_DATA', payload : {...selector, image: URL.createObjectURL(e.target.files[0])}});        
    }


    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="row">
                <div className="col-sm-3 text-center">
                    {selector.image &&
                        <div>
                            <div className="form-group">
                                <img src={selector.image} alt='' height="150px" width="150px" />
                            </div>
                            <input type="file" accept="image/*" className="form-control" placeholder="Upload your photo" onChange={uploadSingleFile}/>
                            <button className="btn btn-link" onClick={uploadPhoto}>Edit photo</button>
                        </div>
                    }
                    <button className="btn btn-link" onClick={goBack}>Edit profile</button>
                </div>
                <div className="col-sm-9">
                    I am {selector.name.firstName} {selector.name.secondName} and I am above {selector.age} years and you can send your emails to {selector.email},
                    I lives in the state of {selector.state} .I likes to play 
                    {selector.interests.map((interest, index) => {                    
                    return (
                        <span>
                            {interest.label}, 
                        </span>
                    )
                    })}.
                    {selector.subscribe && <span>And please send me the news letters.</span>} Please reach out to me on my phone {selector.telephone}.
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-center mt-5">
                                <button className="btn btn-primary btn-lg" type="button" onClick={goBack}>Agree</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubmitForm;
