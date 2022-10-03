import NavBar from "./components/NavBar";
import Title from "./components/Title";
import Search from "./components/Search";
import RecipeList from "./components/RecipeList";
import CakeContainer from "./containers/CakeContainer";
import Cake from "./components/Cake";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Cake Manager</h1>
        <NavBar />
        <Title />
        <Search />
      </header>
      <main>
        <CakeContainer />
      </main>
      <footer>

      </footer>
      </div>
  );
}

export default App;
