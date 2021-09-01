import "./App.scss";
import TopNavbar from "./components/topNavbar/topNavbar.component";
import Tiles from "./components/tiles/tiles.component";
import FooterSection from "./components/footerSection/footerSection.component";

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <Tiles />
      <FooterSection />
    </div>
  );
}

export default App;
