import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Footer />
      <div className="cards">
        <Card title="Card No: 1 " desc="This is the description for card 1" />
        <Card title="Card No: 2 " desc="This is the description for card 2" />
        <Card title="Card No: 3 " desc="This is the description for card 3" />
      </div>
    </>
  );
}

export default App;
