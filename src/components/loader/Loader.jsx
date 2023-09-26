import React from 'react';
import { RingLoader } from 'react-spinners';

function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <RingLoader
        color="#97BF11"
        size={130}
      />
    </div>
  );
}

export default Loader;
