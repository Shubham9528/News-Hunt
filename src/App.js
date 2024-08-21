
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
function App() {
  return (
    <div>
     <div className="header text-center h-28 bg-gradient-to-r from-white to-blue-200 py-3 text-4xl sm:text-5xl md:text-6xl fixed top-0 left-0 w-full z-50 shadow-lg border-b-2 border-blue-300">
    <Header />
    </div>

 
      <div className="flex justify-center flex-row align-middle mt-40">
        <Card/>
      </div>
   

    </div>

    
   
  );
}

export default App;
