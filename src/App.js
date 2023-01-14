import "./styles/main.css";
import Header from "./components/Header";
import GameState from "./components/GameState";
import GameBoard from "./components/GameBoard";
import Column from "./components/Column";
import Piece from "./components/Piece";
import Slot from "./components/Slot";
import ResetButton from "./components/ResetButton";
import GameOver from "./components/GameOver";

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
