import React from 'react';
import Button from './components/button';
const App = () => {
  return (
    <Button
      size="middle"
      loading={true}
      onClick={() => {
        alert('hello');
      }}
    >
      <span>hello</span>
    </Button>
  );
};

export default App;
