import './UI/App.scss' 
import Nav from './components/Nav';
import PageRoutes from './components/PageRoutes';


function App() {
  return (
    <div className="app_container">
      <Nav/>
      <PageRoutes/>
  </div>
  );
}

export default App;
