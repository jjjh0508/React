import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './Pages/Menu';
import About from './Pages/About';
import Main from './Pages/Main';


function App() {

  /*
    라우팅 : 어떤 요청(url)을 어디로 안내 및 매핑을 할 것인지를 정해놓고 진행하는 것
    리액트에서는 요청에 따라 요청에 매칭되는 컴포넌트를 렌더링 한다
  */

  return (
    
     <BrowserRouter>
      <Routes>
        <Route index element={ <About/>}/> {/*index 처음 페이지*/}
        <Route path='/menu' element={<Menu/>} />
        <Route path='/main' element={<Main/>}/>
      </Routes>
     </BrowserRouter>

  );
}

export default App;
