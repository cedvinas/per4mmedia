import './App.css';
import Nav from './Components/Nav/Nav';
import Content from './Components/Content/Content'
import FooterNav from './Components/Nav/FooterNav';

function App() {
  return (
    <div className="App">
        <Nav />
        <Content />
        <FooterNav />
    </div>
  );
}

export default App;
