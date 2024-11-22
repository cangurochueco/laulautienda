import { Navbar } from "./components/layout/navbar/Navbar";
import { Footer } from "./components/layout/footer/Footer";
import { Itemlistcontainer } from "./components/pages/Itemlistcontainer/Itemlistcontainer";
function App() {
  return (
    <div>
      <Navbar />
      <Itemlistcontainer />
      <Footer />
    </div>
  );
}

export default App;
