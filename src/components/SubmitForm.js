import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

function SubmitForm() {    
    let selector = useSelector(state =>  state.formData);
    const navigate = useHistory();    
            if(!selector.name) {
                navigate.goBack();
            }

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="row">
                <div className="col-sm-3">
                { selector.image &&   
                        <div>                      
                        <div className="form-group">
                            <img src={selector.image} alt='' height="150px" width="150px"/>
                        </div>
                        {/* <input type="file" accept="image/*" className="form-control" placeholder="Upload your photo" onChange={uploadSingleFile} />
                        <button onClick={uploadPhoto} className="btn btn-link">Change Photo</button>                            */}
                        </div> 
                }
                </div>
                <div className="col-sm-9">
                    I am {selector.name.firstName} {selector.name.secondName} and I am above {selector.age} years and you can send your emails to {selector.email},
                    I lives in the state of {selector.state} .I likes to play hockey, football and ,t'ad'ilP baCk,.
                    {selector.subscribe && <span>And please send me the news letters.</span>} Please reach out to me on my phone {selector.telephone}.
                </div>
            </div>
        </div>
    )
}

export default SubmitForm;
