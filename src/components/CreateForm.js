import React, { useState, useEffect } from 'react'
import Slider from '../shared/Slider';
import Select from 'react-select';
import '../styles/createform.css';
import { countries, states, addressTypes, interestsData } from '../constants/Data';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

function CreateForm() {
    const [age, setAge] = useState(13);
    const [name, setName] = useState({ firstName: '', secondName: '' });
    const [address, setAddress] = useState({ address1: '', address2: '' });
    const [email, setEmail] = useState();
    const [telephone, setTelephone] = useState();
    const [country, setCountry] = useState();
    const [state, setState] = useState();
    const [interests, setInterests] = useState([]);
    const [addressType, setAddressType] = useState();
    const [subscribe, setSubscribe] = useState(false);
    const [image, setImage] = useState(null);
    const [error, setError] = useState(false);
    const [imageError, setImageError] = useState(false);
    const [firstNameError, setFirstNameError] = useState(false);
    let selector = useSelector(state => state.formData);
    const navigate = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        if (selector) {
            setAge(selector.age);
            setName(selector.name);
            setEmail(selector.email);
            setAddress(selector.address);
            setTelephone(selector.telephone);
            setCountry(selector.country);
            setState(selector.state);
            setInterests(selector.interests);
            setAddressType(selector.addressType);
            setSubscribe(selector.subscribe);
            setImage(selector.image);
        }
    }, []);

    let validateForm = () => {
        console.log("Validation form");
        const formData = { age, name, address, email, telephone, country, state, interests, addressType, subscribe, image };
        dispatch({ type: 'UPDATE_FORM_DATA', payload: formData });
        let regex = /^([a-zA-Z_-]){0,20}$/;

        
        if (country && state && interests.length > 0 && addressType && image && regex.test(name.firstName)) {
            navigate.push('/submit');
            setError(false);
            setImageError(false);
        }
        else {
            if (image) {
                setError(true);
            }
            else {
                setImageError(true);
            }
        }

        if (!(regex.test(name.firstName))) {
            setFirstNameError(true);
        }
        else {
            setFirstNameError(false);
        }
    }

    function uploadPhoto(e) {
        e.preventDefault()
    }

    function uploadSingleFile(e) {
        setImage(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <form onSubmit={(e) => { e.preventDefault(); validateForm() }}>
                <div className="row">


                    <div className="col-sm-3 text-center">
                        {image &&
                            <div>
                                <div className="form-group">
                                    <img src={image} alt='' height="150px" width="150px" />
                                </div>
                                <input type="file" accept="image/*" className="form-control" placeholder="Upload your photo" onChange={uploadSingleFile} />
                                <button onClick={uploadPhoto} className="btn btn-link">Edit Photo</button>
                            </div>
                        }
                        {!image &&
                            <div>
                                <div className="upload-button">
                                    <input type="file" accept="image/*" className="form-control" placeholder="Upload your photo" onChange={uploadSingleFile} />
                                    <button onClick={uploadPhoto} className="btn btn-link text-white">Upload your photo</button>
                                </div>
                                <div className="upload-photo" onClick={uploadPhoto}>
                                </div>
                            </div>
                        }
                        {imageError && !image &&
                            <div style={{ color: 'red' }}>Photo is required</div>
                        }
                    </div>


                    <div className="col-sm-9 content-border">
                        <div className="container-fluid">
                            <div className="row form-group">
                                {error &&
                                    <div style={{ color: 'red' }} class="col-sm-12 offset-sm-3">All field in '*' are mandatory</div>
                                }
                                {firstNameError && 
                                <div style={{ color: 'red' }} class="col-sm-12 offset-sm-3">First name should contain only aplhabets with maximum of 20 charcters</div>
                                }

                            </div>
                            <div className="row form-group">
                                <div className="col-sm-3 text-right">
                                    <span className="badge badge-default">Name</span>
                                </div>
                                <div className="col-sm-9">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <input required type="text" placeholder="First Name" className="form-control" value={name.firstName} onChange={(event) => setName({ ...name, firstName: event.target.value })} />
                                        </div>
                                        <div className="col-sm-6">
                                            <input required type="text" placeholder="Second Name" className="form-control" value={name.secondName} onChange={(event) => setName({ ...name, secondName: event.target.value })} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-sm-3 text-right">
                                    <span className="badge">Age</span>
                                </div>
                                <div className="col-sm-9">
                                    <Slider age={age} min={13} max={45} changeParentValue={(age) => setAge(age)}></Slider>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="row form-group">
                                        <div className="col-sm-3 text-right">
                                            <span className="badge badge-default">Email</span>
                                        </div>
                                        <div className="col-sm-9">
                                            <input required type="email" className="form-control" value={email} onChange={(event) => setEmail(event.target.value)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="row form-group">
                                        <div className="col-sm-3 text-right">
                                            <span className="badge badge-default">Telephone</span>
                                        </div>
                                        <div className="col-sm-9">
                                            <input required type="text" className="form-control" value={telephone} onChange={(event) => setTelephone(event.target.value)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="row form-group">
                                        <div className="col-sm-3 text-right">
                                            <span className="badge badge-default">State</span>
                                        </div>
                                        <div className="col-sm-9">
                                            <Select
                                                className="basic-single"
                                                value={{ value: state, label: state }}
                                                classNamePrefix="select"
                                                name="State"
                                                options={states.filter(item => item.countryID === country)[0]?.states}
                                                onChange={(event) => setState(event.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="row form-group">
                                        <div className="col-sm-3 text-right">
                                            <span className="badge badge-default">Country</span>
                                        </div>
                                        <div className="col-sm-9">
                                            <Select
                                                className="basic-single"
                                                value={{ value: country, label: country }}
                                                classNamePrefix="select"
                                                name="Country"
                                                options={countries}
                                                onChange={(event) => setCountry(event.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="row form-group">
                                        <div className="col-sm-3 text-right">
                                            <span className="badge badge-default">Address</span>
                                        </div>
                                        <div className="col-sm-9">
                                            <Select
                                                className="basic-single"
                                                value={{ value: addressType, label: addressType }}
                                                classNamePrefix="select"
                                                placeholder="Select country"
                                                name="Country"
                                                options={addressTypes}
                                                onChange={(event) => setAddressType(event.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                addressType === 'Home' &&
                                <div className="row form-group">
                                    <div className="col-sm-3 text-right">
                                        <span className="badge badge-default">Home Address</span>
                                    </div>
                                    <div className="col-sm-9">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <input required type="text" placeholder="Address 1" className="form-control" value={address.address1} onChange={(event) => setAddress({ ...address, address1: event.target.value })} />
                                            </div>
                                            <div className="col-sm-6">
                                                <input required type="text" placeholder="Address 2" className="form-control" value={address.address2} onChange={(event) => setAddress({ ...address, address2: event.target.value })} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                            {
                                addressType === 'Company' &&
                                <div className="row form-group">
                                    <div className="col-sm-3 text-right">
                                        <span className="badge badge-default">Company Address</span>
                                    </div>
                                    <div className="col-sm-9">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <input required type="text" placeholder="Company Address 1" className="form-control" value={address.address1} onChange={(event) => setAddress({ ...address, address1: event.target.value })} />
                                            </div>
                                            <div className="col-sm-6">
                                                <input required type="text" placeholder="Company Address 2" className="form-control" value={address.address2} onChange={(event) => setAddress({ ...address, address2: event.target.value })} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="row form-group">
                                        <div className="col-sm-3 text-right">
                                            <span className="badge badge-default">Interests</span>
                                        </div>
                                        <div className="col-sm-9">
                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                name="Country"
                                                value={interests}
                                                options={interestsData}
                                                isMulti
                                                onChange={(value) => { setInterests(value) }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3 text-right">
                                    <input type="checkbox" checked={subscribe} onChange={(event) => setSubscribe(event.target.checked)} />
                                </div>
                                <div className="col-sm-9">
                                    <span>Subscribe to the news letter</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="text-right">
                                        <button className="btn btn-primary btn-lg" type="submit">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateForm;
