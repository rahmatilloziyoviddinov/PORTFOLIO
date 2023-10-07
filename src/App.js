import './App.css';
import Navbar from './components/navbar/Navbar';
import Mainpart1 from './components/mainpart1/Mainpart1';
import Footer from './components/footer/Footer';
import Mainpart2 from './components/mainpart2/Mainpart2';
import Twoimg from './components/twoimg/Twoimg'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Mainpart1 />
      <Mainpart2 />
      <Twoimg />
      <Footer />
    </div>
  );
}

export default App;
