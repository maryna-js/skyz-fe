import React from 'react';

interface DataItem {
  column1: string;
  column2: string;
}

const HomePage: React.FC = () => {

  return (
    <div className="bg-cod-gray h-screen">
      <main>
        <h1>Start Page</h1>
      </main>
    </div>
  );
}

export default HomePage;