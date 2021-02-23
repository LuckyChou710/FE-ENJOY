import React, { useState } from 'react';
import styled from './index.scss';

export default function ScrollTab() {
  console.log(styled);
  const [tabList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styled.container}>
      <span className={styled.toLeft}>&lt;</span>
      <div className={styled.tab}>
        {tabList.map((item, index) => {
          return (
            <span
              key={index}
              className={
                activeIndex === index
                  ? `${styled.tabItem} ${styled.active}`
                  : styled.tabItem
              }
            >
              {item}
            </span>
          );
        })}
      </div>
      <span className={styled.toRight}>&gt;</span>
    </div>
  );
}
