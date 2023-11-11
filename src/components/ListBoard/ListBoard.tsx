import React, {useEffect, useState} from 'react';
import './styles/listBoard.styles.css';
import images from 'src/assets/images';
import { List } from '@typedef/types';

type Props = {
  list: List[];
};


const ListBoard = ({list}:Props) => {
  // const exampleData = [
  //   { id: 1, type: '분류1', title: '제목1', writer: '작성자1', date: '2022-01-01' },
  //   { id: 2, type: '분류2', title: '제목2', writer: '작성자2', date: '2022-01-02' },
  //   { id: 2, type: '분류2', title: '제목2', writer: '작성자2', date: '2022-01-02' },
  //   { id: 2, type: '분류2', title: '제목2', writer: '작성자2', date: '2022-01-02' },
  //   { id: 2, type: '분류2', title: '제목2', writer: '작성자2', date: '2022-01-02' },
  //   { id: 2, type: '분류2', title: '제목2', writer: '작성자2', date: '2022-01-02' },
  //   { id: 2, type: '분류2', title: '제목2', writer: '작성자2', date: '2022-01-02' },
  //   { id: 2, type: '분류2', title: '제목2', writer: '작성자2', date: '2022-01-02' },
  //   { id: 2, type: '분류2', title: '제목2', writer: '작성자2', date: '2022-01-02' },
  //   { id: 2, type: '분류2', title: '제목2', writer: '작성자2', date: '2022-01-02' },
  //   { id: 2, type: '분류2', title: '제목2', writer: '작성자2', date: '2022-01-02' },
  //   { id: 2, type: '분류2', title: '제목2', writer: '작성자2', date: '2022-01-02' },
  //   { id: 2, type: '분류2', title: '제목2', writer: '작성자2', date: '2022-01-02' },
  //   { id: 2, type: '분류2', title: '제목2', writer: '작성자2', date: '2022-01-02' },
  //   { id: 2, type: '분류2', title: '제목2', writer: '작성자2', date: '2022-01-02' },

  //   // 여기에 추가 데이터...
  // ];

  const [data, setData] = useState<List[]>([]); 
  useEffect(() => {
    setData(list);
  }, [list]); // list가 변경될 때마다 useEffect 실행

  return (
    <div className='list-board'>
      <div className='list-title'>질문게시판</div>
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
            <div key={item.board_id} className='list-row'>
              <div className='list-row-num'>{index + 1}</div>
              <div className='list-row-type'>질문</div>
              <div className='list-row-title'>{item.title}</div>
              <div className='list-row-writer'>{item.created_user_id}</div>
              <div className='list-row-time'>{item.created_time.slice(0,10)}</div>
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
