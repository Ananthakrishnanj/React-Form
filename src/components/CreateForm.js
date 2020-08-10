import React, { useState } from 'react'
import Slider from '../shared/Slider';
import Select from 'react-select';
import {countries, states, addressTypes, interestsData} from '../constants/Data';

function CreateForm() {
    const [age, setAge] = useState(13);
    const [name, setName] = useState({firstName: '', secondName: ''});
    const [address, setAddress] = useState({address1: '', address2: ''});
    const [email, setEmail]= useState('');
    const [telephone, setTelephone] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [interests, setInterests] = useState(null);
    const [addressType, setAddressType] = useState();
    const [subscribe, setSubscribe] = useState(false);

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="row">
                <div className="col-sm-3">
                    Photo Section
            </div>
                <div className="col-sm-9">
                    <div class="container-fluid">
                        <div class="row form-group">
                            <div class="col-md-3 text-right">
                                <span class="badge badge-default">Name</span>
                            </div>
                            <div class="col-md-9">
                                <div class="row">
                                    <div class="col-md-6">
                                        <input type="text" placeholder="First Name" class="form-control" value={name.firstName} onChange={(event) => setName({...name, firstName: event.target.value})}/>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="text" placeholder="Second Name" class="form-control" value={name.secondName} onChange={(event) => setName({...name, secondName: event.target.value})}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row form-group">
                        <div class="col-md-3 text-right">
                                <span class="badge badge-default">Age</span>
                            </div>
                            <div class="col-md-9">
                            <Slider age={age} min={13} max={45} changeParentValue={(age) => setAge(age)}></Slider>                            
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="row form-group">
                                    <div class="col-md-3 text-right">
                                        <span class="badge badge-default">Email</span>
                                    </div>
                                    <div class="col-md-9">
                                        <input type="email" class="form-control" value={email} onChange={(event) => setEmail(event.target.value)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="row form-group">
                                    <div class="col-md-3 text-right">
                                        <span class="badge badge-default">Telephone</span>
                                    </div>
                                    <div class="col-md-9">
                                        <input type="text" class="form-control" value={telephone} onChange={(event) => setTelephone(event.target.value)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="row form-group">
                                    <div class="col-md-3 text-right">
                                        <span class="badge badge-default">State</span>
                                    </div>
                                    <div class="col-md-9">
                                        <Select
                                            className="basic-single"
                                            classNamePrefix="select"
                                            name="State"
                                            options={states.filter(item => item.countryID === country)[0]?.states}  
                                            onChange={(event) =>  setState(event.value)}                                          
                                        />                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="row form-group">
                                    <div class="col-md-3 text-right">
                                        <span class="badge badge-default">Country</span>
                                    </div>
                                    <div class="col-md-9">
                                        <Select
                                            className="basic-single"
                                            classNamePrefix="select"                                   
                                            name="Country"
                                            options= {countries}
                                            onChange= {(event) => setCountry(event.value)}
                                        />                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="row form-group">
                                    <div class="col-md-3 text-right">
                                        <span class="badge badge-default">Address</span>
                                    </div>
                                    <div class="col-md-9">
                                    <Select
                                            className="basic-single"
                                            classNamePrefix="select"                                   
                                            name="Country"
                                            options= {addressTypes}
                                            onChange= {(event) => setAddressType(event.value)}
                                        />  
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            addressType === 'home' &&
                            <div class="row form-group">
                                <div class="col-md-3 text-right">
                                    <span class="badge badge-default">Home Address</span>
                                </div>
                                <div class="col-md-9">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <input type="text" placeholder="Address 1" class="form-control" value={address.address1} onChange={(event) => setName({ ...address, address1: event.target.value })} />
                                        </div>
                                        <div class="col-md-6">
                                            <input type="text" placeholder="Address 2" class="form-control" value={address.address2} onChange={(event) => setName({ ...address, address2: event.target.value })} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        {
                            addressType === 'company' &&
                            <div class="row form-group">
                                <div class="col-md-3 text-right">
                                    <span class="badge badge-default">Company Address</span>
                                </div>
                                <div class="col-md-9">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <input type="text" placeholder="Company Address 1" class="form-control" value={address.address1} onChange={(event) => setName({ ...address, address1: event.target.value })} />
                                        </div>
                                        <div class="col-md-6">
                                            <input type="text" placeholder="Company Address 2" class="form-control" value={address.address2} onChange={(event) => setName({ ...address, address2: event.target.value })} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }                                                                     
                        <div class="row">
                            <div class="col-md-12">
                                <div class="row form-group">
                                    <div class="col-md-3 text-right">
                                        <span class="badge badge-default">Interests</span>
                                    </div>
                                    <div class="col-md-9">
                                        <Select
                                            className="basic-single"
                                            classNamePrefix="select"
                                            name="Country"
                                            options={interestsData}
                                            isMulti
                                            onChange={(event) => setInterests(event.value)}
                                        />
                                        {interests}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3 text-right">
                                <input type="checkbox" checked={subscribe} onChange={(event) => setSubscribe(event.target.checked)}/>
                            </div>
                            <div class="col-md-9">
                                <span>Subscribe to the news letter</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div className="text-right">
                                    <button className="btn btn-primary btn-lg">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateForm;
