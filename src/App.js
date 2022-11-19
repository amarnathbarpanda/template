import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import MyJobs from './components/MyJobs';
import MyPayment from './components/MyPayment';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyOfferletter from './components/MyOfferletter';
import MyCertificate from './components/MyCertificate';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      
      <Header/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/jobs' exact element={<MyJobs/>}/>
        <Route path='/payment' exact element={<MyPayment/>}/>
        <Route path='/offerletter' exact element={<MyOfferletter />}/>
        <Route path='/certificate' exact element={<MyCertificate />}/>
      </Routes>

      </BrowserRouter>

      
      {/* <Home/> */}
      {/* <MyJobs/> */}
      {/* <MyPayment/> */}
    </div>
  );
}

export default App;
