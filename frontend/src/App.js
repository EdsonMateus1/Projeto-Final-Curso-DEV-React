import React from 'react';
import FilterProvider from './stateGlobal/filter/Provider';
import AssgnmentProvider from './stateGlobal/assignment/Provider';
import AssgnmentPage from './pages/Assgnment';
import './global.css';

function App() {
  return (
    <AssgnmentProvider>
      <FilterProvider>
        <AssgnmentPage>
          
        </AssgnmentPage>
      </FilterProvider>
    </AssgnmentProvider>

  );
}

export default App;
