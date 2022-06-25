import Collections from "./component/Collections";
import Feature from "./component/Feature";
import Header from "./component/Header";
import Home from "./component/Home";


function App() {
  return (
    <div style={{ width:'90%', margin:'auto', marginTop:'90px' }} >
      <Header/>
      <Home/>
      <Collections/>
      <Feature/>
    </div>
  );
}

export default App;
