import React, { useEffect, useState } from 'react';
import ListBoard from '../ListBoard';
import { List } from '@typedef/types';
import { getBoard } from 'src/api/BoardAPI';

const ListBoardContainer = () => {
  const [list, setList] = useState<List[]>([])
  useEffect(() => {
    getBoard().then(items => {
      console.log(items);
      const newItems = items.map((item:any) => ({
        board_id: item.board_id,
        title: item.title,
        content: item.content,
        created_time: item.created_time,
        created_user_id: item.created_user_id
      }));
      setList(newItems);
    });
  }, []);
  

  return (
    <ListBoard list={list}/>
  );
};

export default ListBoardContainer;
