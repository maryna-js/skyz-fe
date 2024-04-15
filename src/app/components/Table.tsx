import React from 'react';

interface TableProps {
  data: { column1: string; column2: string }[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
          {/* Add more columns if needed */}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.column1}</td>
            <td>{item.column2}</td>
            {/* Render more columns if needed */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;