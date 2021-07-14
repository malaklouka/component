import './App.css';
import MyFirstImage from './Component/Profile/ProfilePhoto';
import MyFullName from './Component/Profile/FullName';
import MyAdress from './Component/Profile/Address';
function App() {
  return (
    <div className="App">
       <MyFirstImage />
       <MyFullName />
       <MyAdress />

    </div>
  );
}

export default App;
