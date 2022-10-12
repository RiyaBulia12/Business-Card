import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="flex text-center text-white bg-[#23252C] h-screen">
      <div className="w-[375px] m-auto">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;
