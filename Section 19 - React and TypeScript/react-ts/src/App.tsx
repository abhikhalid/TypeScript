import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";

function App() {
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "Goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
    </main>
  )
}

export default App
