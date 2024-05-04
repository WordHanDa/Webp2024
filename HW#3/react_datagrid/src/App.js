import Datagrid from './datagrid'
import HelloCGU from './cgu_hello'

function App() {
  return (
    <div className="App"> 
    <div> 
      <h1>景點觀光展覽資訊</h1>
    </div>
    <div>
      { Datagrid() } 
    </div>
    </div>
  );
}

export default App;
