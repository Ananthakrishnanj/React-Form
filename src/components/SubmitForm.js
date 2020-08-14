import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import '../styles/submitform.css';

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
                            <figure className="form-group">
                                <img src={selector.image} alt='Image' height="150px" width="150px" />
                            </figure>
                            <input type="file" accept="image/*" className="form-control" placeholder="Upload your photo" onChange={uploadSingleFile}/>
                            <button className="btn btn-link" onClick={uploadPhoto}>Edit photo</button>
                        </div>
                    }
                    <button className="btn btn-link" onClick={goBack}>Edit profile</button>
                </div>
                <div className="col-sm-9 content-border">
                    I am <span className="data-item">{selector.name.firstName} {selector.name.secondName}</span> and I am <span className="data-item">above {selector.age} years</span> and you can send your emails to <span className="data-item">{selector.email}</span>,
                    I lives in the state of {selector.state} .I likes to play&nbsp;
                    {selector.interests.map((interest, index) => {                    
                    return (
                        <span className="data-item" key={index}>
                            {interest.label}
                            {index != selector.interests.length -1 && <span>, </span>}
                        </span>
                    )
                    })}.
                    {selector.subscribe && <span>And please send me the news letters.</span>} Please reach out to me on my phone <span className="data-item">{selector.telephone}</span>.
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-center mt-5">
                                <button className="btn btn-primary btn-lg" type="button">Agree</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubmitForm;
