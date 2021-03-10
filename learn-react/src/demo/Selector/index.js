/* 实现互斥选项的DEMO */
import React, { useState } from 'react';
import { Select } from 'antd';
const { Option } = Select;

export default function MySelect() {
  const [value, setValue] = useState([]);

  const handleChange = (value) => {
    if (value[value.length - 1].key === '005') {
      setValue([{ value: '005', label: '未作答', key: '005' }]);
    } else if (value.length > 1 && value[0].key === '005') {
      value.splice(0, 1);
      setValue(value);
    } else {
      setValue(value);
    }
  };

  return (
    <div>
      <Select
        value={value}
        placeholder={'请选择'}
        style={{ width: 180 }}
        onChange={handleChange}
        labelInValue
        mode={'multiple'}
        showArrow
      >
        <Option value="001">A</Option>
        <Option value="002">B</Option>
        <Option value="003">C</Option>
        <Option value="004">D</Option>
        <Option value="005">未作答</Option>
      </Select>
    </div>
  );
}
