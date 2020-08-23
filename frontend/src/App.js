import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import withListLoading from './components/withListLoading';
import axios from 'axios'

function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    rockets: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = 'http://0.0.0.0:8000/api/launch';
    axios.get(apiUrl).then((rockets) => {
      const allRockets = rockets.data;
      setAppState({ loading: false, rockets: allRockets });
    });
  }, [setAppState]);
  return (
    <div className='App'>
      <div className='container'>
        <h1>Flights</h1>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} rockets={appState.rockets} />
      </div>
    </div>
  );
}
export default App;