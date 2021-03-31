import React, { useState } from 'react';
import axios from 'axios';

export default function List() {
  const [mockData, setMockData] = useState(null);

  const fetchList = async () => {
    const res = await axios.get('/__mock__.json').json;
    setMockData(res);
  };

  fetchList();

  console.log('updating...');

  return (
    <>
      <button onClick={() => fetchList()}>getData</button>
      {mockData}
    </>
  );
}
