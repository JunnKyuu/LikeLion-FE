import React from 'react';
import { useNavigate } from 'react-router-dom';

import './DiaryItem.css';
import Button from './Button';
import { getEmotionImage } from '../util/get-emotion-image';

const DiaryItem = ({ id, emotionId, createdDate, content }) => {
  const nav = useNavigate();

  const goDiaryPage = () => {
    nav(`/diary/${id}`);
  };

  const goEditPage = () => {
    nav(`/edit/${id}`);
  };

  return (
    <div className="DiaryItem">
      <div onClick={goDiaryPage} className={`img_section img_section_1`}>
        <img src={getEmotionImage(1)} />
      </div>
      <div onClick={goDiaryPage} className="info_section">
        <div className="created_date">{new Date(createdDate).toLocaleDateString()}</div>
        <div className="content">{content}</div>
      </div>
      <div className="button_section" onClick={goEditPage}>
        <Button text={'수정하기'} />
      </div>
    </div>
  );
};

export default DiaryItem;
