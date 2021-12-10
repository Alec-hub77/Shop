import React from 'react'
import './user.scss'
import {PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocationSearching, Publish} from '@material-ui/icons'
import { Link } from 'react-router-dom'


const User = () => {
    return (
        <div className="user">
            <div className="userTitle">
                <h1>Edit User</h1>
                <Link to="/newUser">
                    <button className="userBtn">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="showTop">
                        <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                        <div className="topTitle">
                            <span className="userName">Anna Becker</span>
                            <span className="userJob">Sofware Engineer</span>
                        </div>
                    </div>
                    <div className="showBottom">
                        <span className="bottomTitle">Account Details</span>
                        <div className="bottomInfo">
                            <PermIdentity className="bottomIcon"/>
                            <span className="infoTitle">annabeck99</span>
                        </div>
                        <div className="bottomInfo">
                            <CalendarToday className="bottomIcon"/>
                            <span className="infoTitle">10.12.1999</span>
                        </div>
                        <span className="bottomTitle">Account Details</span>
                        <div className="bottomInfo">
                            <PhoneAndroid className="bottomIcon"/>
                            <span className="infoTitle">+1 123 426 67</span>
                        </div>
                        <div className="bottomInfo">
                            <MailOutline className="bottomIcon"/>
                            <span className="infoTitle">annabeck99@mail.com</span>
                        </div>
                        <div className="bottomInfo">
                            <LocationSearching className="bottomIcon"/>
                            <span className="infoTitle">New York | USA</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="UpdateTitle">Edit</span>
                        <form className="updateForm">
                            <div className="updateLeft">
                                <div className="updateItem">
                                    <label>Username</label>
                                    <input type="text" placeholder="annabeck99" className="updateInput" />
                                </div>
                                <div className="updateItem">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="Anna Becker" className="updateInput" />
                                </div>
                                <div className="updateItem">
                                    <label>Email</label>
                                    <input type="text" placeholder="annabeck99@mail.com" className="updateInput" />
                                </div>
                                <div className="updateItem">
                                    <label>Phone</label>
                                    <input type="text" placeholder="+1 123 426 67" className="updateInput" />
                                </div>
                                <div className="updateItem">
                                    <label>Address</label>
                                    <input type="text" placeholder="New York | USA" className="updateInput" />
                                </div>
                            </div>
                            <div className="updateRight">
                                <div className="updateUpload">
                                    <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                                    <label htmlFor="file"><Publish/></label>
                                    <input type="file" id="file" style={{display: "none"}}/>  
                                </div>
                                <button className="userUpdateBtn">Update</button>
                            </div>
                        </form>
                    
                </div>
            </div>
        </div>
    )
}

export default User
