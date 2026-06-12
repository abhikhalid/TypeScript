import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";

function App() {
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "Goals" }}/>
    </main>
  )
}

export default App
