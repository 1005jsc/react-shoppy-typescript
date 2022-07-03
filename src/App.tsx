import React from 'react';
import { FiSettings } from 'react-icons/fi';
import './App.css';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

function App() {
  return (
    <div className=' flex relative dark:bg-main-dark-bg'>
      <div className=' fixed right-4 bottom-4 ' style={{ zIndex: '1000' }}>
        <TooltipComponent content='Settings' position='TopCenter'>
          <button
            className=' text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white '
            style={{ background: 'blue', borderRadius: '50%' }}
          >
            <FiSettings />
          </button>
        </TooltipComponent>
      </div>
    </div>
  );
}

export default App;
