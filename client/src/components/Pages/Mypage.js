import React, { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;

const localUrl = 'http://localhost:3000/';

const Mypage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [profilePhoto, setProfilePhoto] = useState('');

    useEffect(async () => {
        await axios.get(localUrl + 'mypage')
        .then((res) => {
            const { username, email, profilePhoto} = res.data;
            setUsername(username);
            setEmail(email);
            setProfilePhoto(profilePhoto);
        })
    })

    const onChangeProfilePhoto = () => {
        const formData = new FormData();
        formData.append('file', profilePhoto);

        return axios.post(localUrl + "....")
    }

    const onDeleteProfilePhoto = () => {
        const formData = new FormData();
        formData.append('file', profilePhoto);

        return axios.post(localUrl + "....")
    }

    const onChangeFile = (e) => {
        setProfilePhoto(e.target.value)
    }
    return (
        <div>
            <div className="title"> {username} 님의 Profile </div>
            <div className="email"> {email} </div>
            <div className="profilePhoto">
                <div className="profilePhoto__photo"></div>
                <form onSubmit={onChangeProfilePhoto}>
                    <h1>File Upload</h1>
                    <input type="file" name="img" onChange={onChangeFile} />
                    <button type="submit">Upload</button>
                    <button type="submit">Delete</button>
                </form>
                {profilePhoto}
            </div>
        </div>
    )
}

export default Mypage;
