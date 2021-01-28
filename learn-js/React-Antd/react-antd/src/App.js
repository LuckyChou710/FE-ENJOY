import logo from './logo.svg';
import { ReactComponent as Logo } from './logo.svg';
import MySelect from './MySelect'
function App() {
  console.log(logo);
  return (
    <div className="App">
      {/* <Logo /> */}
      <MySelect />
    </div>
  );
}

export default App;
