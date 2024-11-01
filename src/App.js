import AppStyle from './App.module.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import DetailFilmPage from './components/DetailFilmPage/DetailFilmPage';
import AuthForm from './components/AuthForm/AuthForm';


function App() {
  return (
    <div className={AppStyle.App}>
      
        <div className={AppStyle.header}>
          <Header/>
        </div>


        <div className={AppStyle.content}>

          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='filmlist/:id' element={<DetailFilmPage/>}></Route>
            <Route path='auth/' element={<AuthForm/>}></Route>

          </Routes>

        </div>
      </div>
  );
}

export default App;
