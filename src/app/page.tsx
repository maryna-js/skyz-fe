import React from 'react';
import Header from './components/Header';
import Table from './components/Table';
import BreadcrumbTitle from './components/BreadcrumbTitle';

interface DataItem {
  column1: string;
  column2: string;
}

const TablePage: React.FC = () => {
  // Sample data for demonstration
  const data: DataItem[] = [
    { column1: 'Data 1', column2: 'Data A' },
    { column1: 'Data 2', column2: 'Data B' },
    // Add more data as needed
  ];

  return (
    <div className="bg-cod-gray h-screen">
      <Header />
      <BreadcrumbTitle />
      <main>
        <h1>Table Page</h1>
        <Table data={data} />
      </main>
    </div>
  );
}

export default TablePage;