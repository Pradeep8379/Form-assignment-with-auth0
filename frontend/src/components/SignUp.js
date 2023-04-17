import React, { useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
// import { useNavigate } from "react-router-dom"

export const SignUp = () => {
   

    const { loginWithRedirect } = useAuth0();

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: '',
        mobile: "",
        firmName: "",
        plan: '',
        address: '',
        state: '',
        pinCode: '',
        gstNumber: '',
        categories: [],
        dlNo1: '',
        dlNo2: '',
        fssaiNo: '',
        role: '',
        accountName: '',
        accountNumber: '',
        ifscCode: '',
        branch: '',
        signature: '',
    });

    // const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    // const handleFileChange = (event) => {
    //     const { name, files } = event.target;
    //     setUser({ ...user, [name]: files });
    // };


    const handleCategoryChange = (event, index) => {
        const { value } = event.target;
        const categories = [...user.categories];
        categories.push(value);
        setUser({ ...user, categories });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(user);
        try {
            await axios.post(
                "http://localhost:4000/register",
                { ...user },

            );
            alert("User Created");
            // navigate("/");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div className='container '>
                <h3>Partner with us</h3>
                <form onSubmit={handleSubmit}>
                    <div className='row mt-3 '>
                        <div className='col '>
                            <label htmlFor="exampleFormControlInput1" className="form-label ">First Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" name="firstName"
                                value={user.firstName}
                                onChange={handleChange} style={{ width: '20rem' }} required />
                        </div>
                        <div className='col'>
                            <label htmlFor="exampleFormControlInput2" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput2" name="lastName"
                                value={user.lastName}
                                onChange={handleChange} style={{ width: '20rem' }} required />
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col'>
                            <label htmlFor="exampleFormControlInput3" className="form-label">Email ID</label>
                            <input type="text" className="form-control" id="exampleFormControlInput3" name="email"
                                value={user.email}
                                onChange={handleChange} style={{ width: '20rem' }} required />
                        </div>
                        <div className='col'>
                            <label htmlFor="exampleFormControlInput4" className="form-label">Mobile No.</label>
                            <input type="text" className="form-control" id="exampleFormControlInput4" name="mobile"
                                value={user.mobile}
                                onChange={handleChange} style={{ width: '20rem' }} required />
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col'>
                            <label htmlFor="exampleFormControlInput5" className="form-label">Firm Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput5" name="firmName"
                                value={user.firmName}
                                onChange={handleChange} style={{ width: '20rem' }} required />
                        </div>
                        <div className='col'>
                            <label htmlFor="exampleFormControlInput6" className="form-label">Plan</label>
                            <select className='form-select selectwrap' id="exampleFormControlInput6" name="plan"
                               
                                onChange={handleChange} style={{ width: '59%' }} defaultValue="State">
                                <option value="State" disabled hidden >Plans</option>
                                <option value='Silver'>Silver</option>
                                <option value='Gold'>Gold</option>
                                <option value='Platinum'>Platinum</option>

                            </select>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col'>
                            <label htmlFor="exampleFormControlInput7" className="form-label">Address</label>
                            <input type="text" className="form-control" id="exampleFormControlInput7" name="address"
                                value={user.name}
                                onChange={handleChange} style={{ width: '20rem' }} required />
                        </div>
                        <div className='col'>
                            <label htmlFor="exampleFormControlInput8" className="form-label">State</label>
                            <select className='form-select selectwrap' id="exampleFormControlInput8" name="state"
                                
                                onChange={handleChange} style={{ width: '59%' }} defaultValue="State">
                                <option value="State" disabled hidden >State</option>
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                <option value="Assam">Assam</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Chandigarh">Chandigarh</option>
                                <option value="Chhattisgarh">Chhattisgarh</option>
                                <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                <option value="Daman and Diu">Daman and Diu</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Lakshadweep">Lakshadweep</option>
                                <option value="Puducherry">Puducherry</option>
                                <option value="Goa">Goa</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Haryana">Haryana</option>
                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                <option value="Jharkhand">Jharkhand</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Manipur">Manipur</option>
                                <option value="Meghalaya">Meghalaya</option>
                                <option value="Mizoram">Mizoram</option>
                                <option value="Nagaland">Nagaland</option>
                                <option value="Odisha">Odisha</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="Sikkim">Sikkim</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Telangana">Telangana</option>
                                <option value="Tripura">Tripura</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                <option value="Uttarakhand">Uttarakhand</option>
                                <option value="West Bengal">West Bengal</option>
                            </select>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col'>
                            <label htmlFor="pincode">Pin Code</label>
                            <input type="text" className="form-control" id="pincode" name="pinCode"
                                value={user.pinCode}
                                onChange={handleChange} pattern="^[1-9][0-9]{5}$" style={{ width: '20rem' }} required />
                        </div>
                        <div className='col ' >
                            <label htmlFor="exampleFormControlInput9" className="form-label">Gst No.</label>
                            <input type="text" className="form-control" id="exampleFormControlInput9" name="gstNumber"
                                value={user.gstNumber}
                                onChange={handleChange} style={{ width: '20rem' }} required />
                        </div>
                    </div>


                    <div className='mt-4'>
                        <h6  >Categories</h6>
                        <div className='mt-3'>
                            <div className='row mt-3 '>
                                <div className='col '>
                                    <input className="form-check-input" type="checkbox" value={false} id="flexCheckDefault1" name="categories" onChange={handleCategoryChange} />
                                    <label className="form-check-label " htmlFor="flexCheckDefault1" style={{ marginLeft: '0.3rem' }}>
                                        Allopathic
                                    </label>
                                </div>
                                <div className='col'>
                                    <input className="form-check-input" type="checkbox" value={false} id="flexCheckDefault2" name="categories" onChange={handleCategoryChange} />
                                    <label className="form-check-label" htmlFor="flexCheckDefault2" style={{ marginLeft: '0.3rem' }}>
                                        Generic
                                    </label>
                                </div>
                            </div>
                            <div className='row mt-3 '>
                                <div className='col '>
                                    <input className="form-check-input" type="checkbox" value={false} id="flexCheckDefault3" name="categories" onChange={handleCategoryChange} />
                                    <label className="form-check-label" htmlFor="flexCheckDefault3" style={{ marginLeft: '0.3rem' }}>
                                        Surgical & Medical Equipment
                                    </label>
                                </div>
                                <div className='col'>
                                    <input className="form-check-input" type="checkbox" value={false} id="flexCheckDefault4" name="categories" onChange={handleCategoryChange} />
                                    <label className="form-check-label" htmlFor="flexCheckDefault4" style={{ marginLeft: '0.3rem' }}>
                                        Otc
                                    </label>
                                </div>
                            </div>
                            <div className='row mt-3 '>
                                <div className='col '>
                                    <input className="form-check-input" type="checkbox" value={false} id="flexCheckDefault5" name="categories" onChange={handleCategoryChange} />
                                    <label className="form-check-label" htmlFor="flexCheckDefault5" style={{ marginLeft: '0.3rem' }}>
                                        Ayurvedic
                                    </label>
                                </div>
                                <div className='col'>
                                    <input className="form-check-input" type="checkbox" value={false} id="flexCheckDefault6" name="categories" onChange={handleCategoryChange} />
                                    <label className="form-check-label" htmlFor="flexCheckDefault6" style={{ marginLeft: '0.3rem' }}>
                                        Veterinary
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-5'>
                        <div className='row mt-3 '>
                            <div className='col '>
                                <label htmlFor="exampleFormControlInput10" className="form-label ">DL NO 1</label>
                                <input type="text" className="form-control" id="exampleFormControlInput10" name="dlNo1"
                                    value={user.dlNo1}
                                    onChange={handleChange} style={{ width: '20rem' }} required />
                            </div>
                            <div className='col'>
                                <label htmlFor="exampleFormControlInput11" className="form-label">DL NO 2</label>
                                <input type="text" className="form-control" id="exampleFormControlInput11" name="dlNo2"
                                    value={user.dlNo2}
                                    onChange={handleChange} style={{ width: '20rem' }} required />
                            </div>
                        </div>
                        <div className='row mt-3 '>
                            <div className='col '>
                                <label htmlFor="exampleFormControlInput12" className="form-label ">FSSAI No</label>
                                <input type="text" className="form-control" id="exampleFormControlInput12" name="fssaiNo"

                                    onChange={handleChange} style={{ width: '20rem' }} required />
                            </div>

                        </div>
                    </div>

                    <div className='mt-3'>
                        <h6  >Register As</h6>
                        <div className='d-flex justify-content-between'>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" id="inlineRadio1" value={false} name="role"

                                    onChange={handleChange} />
                                <label className="form-check-label " htmlFor="inlineRadio1" >Manufacturer</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" id="inlineRadio2" value={false} name="role"

                                    onChange={handleChange} />
                                <label className="form-check-label" htmlFor="inlineRadio2">Distributor</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" id="inlineRadio3" value={false} name="role"
                                    onChange={handleChange} />
                                <label className="form-check-label" htmlFor="inlineRadio3">Wholesaler </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" id="inlineRadio4" value={false} name="role"
                                    onChange={handleChange} />
                                <label className="form-check-label" htmlFor="inlineRadio4">Retailer</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" id="inlineRadio5" value={false} name="role"
                                    onChange={handleChange} />
                                <label className="form-check-label" htmlFor="inlineRadio5">Hospital</label>
                            </div>
                        </div>
                    </div>


                    <div className='mt-5'>
                        <h5 className='text-primary'>Bank Details</h5>
                        <div className='row mt-3 '>
                            <div className='col '>
                                <label htmlFor="exampleFormControlInput13" className="form-label ">Account Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput13" style={{ width: '20rem' }} name="accountName"
                                    value={user.accountName}
                                    onChange={handleChange} required />
                            </div>
                            <div className='col'>
                                <label htmlFor="exampleFormControlInput14" className="form-label">Account No</label>
                                <input type="text" className="form-control" id="exampleFormControlInput14" style={{ width: '20rem' }} name="accountNumber"
                                    value={user.accountNo}
                                    onChange={handleChange} required />
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col'>
                                <label htmlFor="exampleFormControlInput15" className="form-label">IFSC Code</label>
                                <input type="text" className="form-control" id="exampleFormControlInput15" style={{ width: '20rem' }} name="ifscCode"
                                    value={user.ifscCode}
                                    onChange={handleChange} required />
                            </div>
                            <div className='col'>
                                <label htmlFor="exampleFormControlInput16" className="form-label">Branch</label>
                                <input type="text" className="form-control" id="exampleFormControlInput16" style={{ width: '20rem' }} name="branch"
                                    value={user.branch}
                                    onChange={handleChange} required />
                            </div>
                        </div>

                    </div>

                    <div className='mt-4'>
                        <p>Upload Signature</p>
                        <input id="imgs" type="file" accept='image/png,image/jpg' name="signature"
                            // value={user.signature}
                            onChange={handleChange} required />
                        <div className='mt-3'>
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault7" required />
                            <label className="form-check-label " htmlFor="flexCheckDefault7" style={{ marginLeft: '0.3rem' }} required>
                                Please tick the box to accept our <span type="text" className='text-primary' data-bs-toggle="modal" data-bs-target="#terms&Conditions"> Terms & Conditions </span>and <span type="text" className='text-primary' data-bs-toggle="modal" data-bs-target="#privacyPolicy">Privacy Policy</span>
                            </label>

                            <div className="modal fade" id="terms&Conditions" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Terms & Conditions</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="modal fade" id="privacyPolicy" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Privacy Policy</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button type="submit" className="mt-5 btn btn-primary w-25" onSubmit={handleSubmit}>Register </button>

                    </div>

                    <div className='mt-2 d-flex justify-content-center'>
                        <p>Already have an account?<span className='text-primary user-select-auto' onClick={() => loginWithRedirect()}>Login</span> </p>
                    </div>



                </form>
            </div>
        </>
    )
}
