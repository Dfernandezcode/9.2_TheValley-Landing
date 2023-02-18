import './App.css';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';




function App() {
  return (
    <div className="App">
      <Header></Header>
      <Content maintext="Ejercicio React"></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
