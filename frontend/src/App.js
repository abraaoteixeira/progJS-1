import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TextInput from './components/TextInput';
import TopicSelection from './components/TopicSelection';
import Visualization from './components/Visualization';
import ConceptLibrary from './components/ConceptLibrary';
import ExportButton from './components/ExportButton';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={TextInput} />
          <Route path="/topics" component={TopicSelection} />
          <Route path="/visualization" component={Visualization} />
          <Route path="/library" component={ConceptLibrary} />
        </Switch>
        <ExportButton />
      </div>
    </Router>
  );
}

export default App;
