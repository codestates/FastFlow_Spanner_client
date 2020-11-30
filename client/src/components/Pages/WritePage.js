import React, { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;

const localUrl = 'http://localhost:3000/';
const WritePage = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
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
			<div className="WritePages">
				<form className="submitArea" onSubmit={submitPost}>
					{/* inventionArea */}
					<div className="inventionArea">
						{/* <발명품 선택> */}
						<select className="inventionArea__selectInvention" onChange={ }>
							<option value="">발명품 선택</option>
							{/* JSX 반복문으로 옵션 넣기 */}
						</select>
						{/* <사진노출> */}
						<img className="inventionArea__pic" src={{ localUrl } + "..."} alt="">
							업로드 하실 사진
                    </img>
						{/* <찾아보기> */}
						<input type="file" name="img" onChange={ } />
						<button type="submit">이미지 찾아보기</button>
					</div>
			  </form>
				<제목작성영역></제목작성영역>
				<업로드 버튼></업로드>
				<글작성영역></글작성영역>
			</div>
		</div>
	)
}
export default WritePage;