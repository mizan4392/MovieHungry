import "./App.css";
import MovieSection from "./components/MovieSection/MovieSection.component";
import NavBar from "./components/NavBar/NavBar.component";
import Slider from "./components/Slider/Slider.component";
import { movies } from "./data";

function App() {
  return (
    <>
      <NavBar />
      <Slider />
      <div className="container mx-auto">
        <MovieSection title="Recommended" movieData={movies} />
        <MovieSection title="Latest Movies" movieData={movies} />
        <MovieSection title="Latest TV-Series" movieData={movies} />
        <MovieSection title="RequestedView" movieData={movies} />
      </div>
    </>
  );
}

export default App;
