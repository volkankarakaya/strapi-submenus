import { useGlobalContext } from "./Context";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
import Hero from "./Hero";

const App = () => {

  return (
    <main>
      <Navbar/>
      <Hero/>
      <Sidebar/>
      <Submenu/>
    </main>
  )
};
export default App;
