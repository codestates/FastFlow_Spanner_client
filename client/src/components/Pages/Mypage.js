import React, { useState, useEffect } from "react";
import axios from "axios";
import basicProfilePic from '../images/anonym_user.png';
//https://www.pngaaa.com/detail/1097555, License : non-commercial use

axios.defaults.withCredentials = true;

const localUrl = 'http://localhost:3000';

const Mypage = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
<<<<<<< HEAD
	const [profilePhoto, setProfilePhoto] = useState('');

	useEffect(async () => {
		await axios.get(localUrl + 'mypage')
			.then((res) => {
				const { username, email, profilePhoto } = res.data;
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
=======
	const [profilePicView, setProfilePicView] = useState(basicProfilePic);
	const [profilePic, setProfilePic] = useState('');

	useEffect(() => {
		//for signin	
		axios.post(`${localUrl}/user/signin`,
			{
				email: "test999", password: "test999"
			})
			.then((res) => {
				// console.log(res);
				//jwt test start (1/2   2/2는 app의 로그아웃)
				const { accessToken } = res.data;
				axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
				//    sessionStorage.setItem('token', res.data.accessToken)
				localStorage.setItem('token', accessToken)
				
				//jwt test end				
			})
			.then(() => {
				axios.get(localUrl + '/profile/read')
				.then((res) => {
					
					const { username, email, userPhoto } = res.data;
					setUsername(username);
					setEmail(email);
					if(userPhoto) {
						setProfilePicView(localUrl + '/' + userPhoto);
					}
				})
			})		
				// , {
				// 	headers: {
				// 		"Authorization": `Bearer ${localStorage.getItem('token')}`
				// 	}
				// })
			.catch((err) => {
				console.log('err')
			})
			// 뒤쪽의 배열은 Hook의 componentDidupdate 같은 부분인데, state 값을 넣는 것이 아니라,
			// state 값을 변경하는 메서드를 넣어주어야 적용이 된다.
	}, [setProfilePicView]);
 
	const onChangeProfilePic = (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('image', profilePic);
		
		return axios.put(localUrl + "/profile/upload", formData, {
			headers : {
				'Content-Type' : 'multipart/form-data'
			}
		})
	}

	const onDeleteprofilePic = (e) => {
		setProfilePicView(basicProfilePic);
		setProfilePic(e.target.value);
	}
	
	// File reader 공부하기
	const onChangeFile = (e) => {
		e.preventDefault();
		let reader = new FileReader();
		let file = e.target.files[0];
		reader.onloadend = () => {
			setProfilePicView(reader.result)
		};
		reader.readAsDataURL(file);
		setProfilePic(file);
	}

	return (
		<div>
			<div className="Mypages">
				<div className="profileTitle">
					<div className="profileTitle__title">{username} 님의 프로필 페이지</div>
					<div className="profileTitle__desc">이곳에서 회원님의 정보를 변경할 수 있습니다.</div>
					{/* <div> {profilePicView}</div> */}
				</div>
				<div className="profilePic">
					<img className="profilePicView__pic" src={profilePicView} alt=""></img>					
					<form onSubmit={onChangeProfilePic}>
					  <input type="file" name='image' onChange={onChangeFile} />
						<button type="submit">사진변경</button>
						<button type="submit" onClick={onDeleteprofilePic}>사진삭제</button>
					</form>
				</div>
				<div className="profileInfo">
					<div className="profileInfo__email"> {email} </div>
				</div>
				{/* <div className="profileDetermine">
					<form onSubmit={onChangeprofilePic}>
						<button className="profileDetermine__applyBtn" type="submit">적용</button>
						<button className="profileDetermine__cancelBtn" >취소</button>
					</form>
				</div> */}
>>>>>>> 8e166b0383fddc3c68ef8e5d51dc650cfb45375e
			</div>
		</div>
	)
}

export default Mypage;
