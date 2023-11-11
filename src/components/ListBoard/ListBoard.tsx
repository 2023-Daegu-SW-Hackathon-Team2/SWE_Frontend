import React, {useState} from 'react';
import './styles/listBoard.styles.css';
import images from 'src/assets/images';


const ListBoard = () => {
  const exampleData = [
    { id: 1, type: '분류1', title: '제목1', writer: '작성자1', date: '2022-01-01' },
    { id: 2, type: '분류2', title: '제목2', writer: '작성자2', date: '2022-01-02' },
    { id: 2, type: '분류2', title: '제목2', writer: '작성자2', date: '2022-01-02' },
    { id: 2, type: '분류2', title: '제목2', writer: '작성자2', date: '2022-01-02' },
    { id: 2, type: '분류2', title: '제목2', writer: '작성자2', date: '2022-01-02' },
    { id: 2, type: '분류2', title: '제목2', writer: '작성자2', date: '2022-01-02' },
    { id: 2, type: '분류2', title: '제목2', writer: '작성자2', date: '2022-01-02' },
    { id: 2, type: '분류2', title: '제목2', writer: '작성자2', date: '2022-01-02' },
    { id: 2, type: '분류2', title: '제목2', writer: '작성자2', date: '2022-01-02' },
    { id: 2, type: '분류2', title: '제목2', writer: '작성자2', date: '2022-01-02' },
    { id: 2, type: '분류2', title: '제목2', writer: '작성자2', date: '2022-01-02' },
    { id: 2, type: '분류2', title: '제목2', writer: '작성자2', date: '2022-01-02' },
    { id: 2, type: '분류2', title: '제목2', writer: '작성자2', date: '2022-01-02' },
    { id: 2, type: '분류2', title: '제목2', writer: '작성자2', date: '2022-01-02' },
    { id: 2, type: '분류2', title: '제목2', writer: '작성자2', date: '2022-01-02' },

    // 여기에 추가 데이터...
  ];

  const [data, setData] = useState(exampleData); 

  return (
    <div className={`list-board `}>
      <div className='list-title'>사용자 설정 제목</div>
      <div className='list-container'>
        <div className= 'list-head'>
          <div className='list-head-num'>번호</div>
          <div className='list-head-type'>분류</div>
          <div className='list-head-title'>제목</div>
          <div className='list-head-writer'>작성자</div>
          <div className='list-head-time'>작성일자</div>
        </div>
        <div className='list-item'>
          {data.map((item, index) => (
            <div key={item.id} className='list-row'>
              <div className='list-row-num'>{index + 1}</div>
              <div className='list-row-type'>{item.type}</div>
              <div className='list-row-title'>{item.title}</div>
              <div className='list-row-writer'>{item.writer}</div>
              <div className='list-row-time'>{item.date}</div>
            </div>
          ))}
        </div>
      </div>
      <div className='write'>
        <button className='write-button'>
          글쓰기
        </button>
      </div>
      
    </div>
  );
};

export default ListBoard;
