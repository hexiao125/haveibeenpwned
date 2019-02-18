import React from 'react';
import SortableTableHead from './SortableTableHead';

const Table = ({ displayBreachList, currentPage, limit, columnToSort, handleSortChange, asc }) => {

  const start = (currentPage - 1) * limit;
  const end = (currentPage - 1) * limit + limit;
  const CheckIcon = <i className="green checkmark icon" />;
  const XIcon = <i className="red x icon" />;

  const renderedRow = displayBreachList().slice(start, end).map((breach, index) => {
    return (
      <tr key={index}>
        <td>{breach.Name}</td>
        <td>{breach.PwnCount}</td>
        <td>{breach.IsVerified ? CheckIcon : XIcon}</td>
        <td>{breach.IsSensitive ? CheckIcon : XIcon}</td>
        <td>{breach.IsSpamList ? CheckIcon : XIcon}</td>
      </tr>
    );
  });

  return (
    <div>
      <table className="ui table">
        <thead>
          <tr>
            <SortableTableHead
              title={"Breach name"}
              name={"breachName"}
              type={"alphabet"}
              columnToSort={columnToSort}
              asc={asc}
              handleSortChange={handleSortChange}
            />
            <SortableTableHead
              title={"PwnCount"}
              name={"pwnCount"}
              type={"numeric"}
              columnToSort={columnToSort}
              asc={asc}
              handleSortChange={handleSortChange}
            />
            <th>Is Verified</th>
            <th>Is Sensitive</th>
            <th>Is SpamList</th>
          </tr>
        </thead>
        <tbody>
          {renderedRow}
        </tbody>
      </table >
    </div>

  );
};

export default Table; 