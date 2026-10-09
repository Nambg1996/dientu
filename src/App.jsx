import React from 'react';
//import DrawingBoard from './DrawingBoard/DrawingBoard';
//import LM7805Module from './modules/LM7805/LM7805';
import FootPrintModule from './modules/FootPrint/FootPrint';

export default function App() {
  return (
    <div className="main-app">
     
       {/* <DrawingBoard />  */}

      {/* Module Bài học Quiz */}
      <FootPrintModule />
    </div>
  );
}