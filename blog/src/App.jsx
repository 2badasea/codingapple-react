import { useState } from 'react';
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
	let logo = 'React 숙제';
	const [contents] = useState([
		{ id: 1, title: '첫 번째 제목', writeDate: '1월 6일' },
		{ id: 2, title: '두 번째 제목', writeDate: '1월 7일' },
		{ id: 3, title: '세 번째 제목', writeDate: '1월 8일' },
		{ id: 4, title: '네 번째 제목', writeDate: '1월 9일' },
		{ id: 5, title: '다섯 번째 제목', writeDate: '1월 10일' },
	]);

	return (
		<div className="App">
			<div className="black-nav">
				<h4>{logo}</h4>
			</div>

			{contents.map((row) => {
        return (
          <PostContent key={row.id} title={row.title} writeDate={row.writeDate} />
        )
			})}
		</div>
	);
}

export default App;
