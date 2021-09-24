import {HashRouter as Router, Switch, Link, Route} from 'react-router-dom'
import Main from './components/Main'

function App() {
  return (
    <div className="App">
		<Router>
			<Main {...{Switch, Link, Route}} />
		</Router>
    </div>
  );
}

export default App;
