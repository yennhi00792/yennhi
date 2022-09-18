
import Dieuhuong from "../dieuhuong/Dieuhuong";
import './../css/App.css';
import Footer from './Footer';
import Nav from './Nav';
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Dieuhuong/>
      
      {/*<Home/>*/}
      {/*<Gioithieu/>*/}
      {/*<Duan/>*/}
      {/*<Lienhe />*/}
      <Footer />
    </div>
  );
}

export default App;
