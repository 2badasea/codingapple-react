/* eslint-disable */

import { use, useState } from 'react';
import './App.css'; // css 파일 쓰려면 상단에서 import 'css 파일 경로'

function PostContent({ id, title, writeDate }) {
	return (
		<div className="list" key={id}>
			<h4>{title}</h4>
			<p>{writeDate}</p>
		</div>
	);
}

function App() {
	let logo = 'REACT BLOG';
	let [글제목, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);
	let [따봉, 따봉변경] = useState(0);	// '따봉변경' : state변경용 함수. 이것을 활용해야 html 재렌더링도 잘 됨

	return (
		<div className="App">
			<div className="black-nav">
				<h4>{logo}</h4>
			</div>
				<button onClick={() => { 
					let tmp = [...글제목];
					tmp[0] = '여자 코트 추천';
					setTitle(tmp);
				}}>숙제 검증ㄱ</button>
				<br />
				<button onClick={ () => {
					const newTitles = [...글제목];
					newTitles.sort();
					setTitle(newTitles);
				}}>가다나순 정렬</button>	
			{/* 글 목록 3개 */}
			<div className="list">
				<h4>
					{글제목[0]} <span onClick={() => { 따봉변경(따봉+1)} }>😍</span> {따봉}
				</h4>
				<p>1월 6일 발행</p>
			</div>

			<div className="list">
				<h4>
					{글제목[1]} <span>😍</span>
				</h4>
				<p>1월 7일 발행</p>
			</div>
			<div className="list">
				<h4>
					{글제목[2]} <span>😍</span>
				</h4>
				<p>1월 8일 발행</p>
			</div>

			<Modal />

		</div>
	);
}

// 컴포넌트 선언
function Modal({id, title, rating}) {
	return (
		<div className='modal' key={id}>
			<h4>제목: {title}</h4>
			<p>평점: {rating}</p>
		</div>
	)
}

// 복습 테스트
function App2() {
	let [testContents] = useState([
		{ id: 1, title: 'stranger things', rating: 5.0 },
		{ id: 2, title: 'game of thrones', rating: 4.5 },
		{ id: 3, title: 'walking dead', rating: 4.0 },
	]);
	const testTitle = '복습을 진행합니다.';
	return (
		<div className="TestApp">
			<h1>{testTitle}</h1>
			{ testContents.map((obj) => {
				return (
					<Modal id={obj.id} title={obj.title} rating={obj.rating} />
				)
			})}
		</div>
	);
}

export default App2;
