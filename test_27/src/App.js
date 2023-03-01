
import './App.css';
import Cards from './components/cards';

function App() {
  const titleOne = "Card title";
  const titleTwo = "Special title treatment";
  const textOne = "Some quick example text to build on the card title and make up the bulk of the card's content.";
  const textTwo = "With supporting text below as a natural lead-in to additional content.";
  const img = ( <div className='card-img'>
             <img src='#' alt='Image cap'/>
        </div>)


  return (
    <div className="App">
        < Cards title={titleOne} text={textOne} img={img}/>
        < Cards title={titleTwo} text={textTwo}/>
    </div>
  );
}

export default App;
