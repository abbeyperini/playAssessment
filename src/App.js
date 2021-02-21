import './App.css';
import Header from './components/Header';
import Details from './components/Details';

function App() {
  return (
    <section>
      <Header />
      <div className="details">
        <div className="details-heading">
          <p>Key</p>
          <p>Headline</p>
          <p>SubHeadline</p>
          <p>Start Time</p>
        </div>
        <Details />
      </div>
    </section>
  );
}

export default App;
