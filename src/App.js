import Content from './components/Content';
import Footer from './components/template/Footer';
import Header from './components/template/Header';
import './style/style.css';

function App() {
  return (
        <div className="container">
          <Header/>
          <Content/>
          <Footer/>
   </div>
  );
}

export default App;
