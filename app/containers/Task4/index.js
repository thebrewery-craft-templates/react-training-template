/**
 *
 * Task4
 *
 */

import React, { useState } from 'react';
import { cats, catColumns } from 'utils/cats';
import './styles.less';

export function Task4() {
  const [selectedColumns, setSelectedColumns] = useState([]);
  const [choicesVisible, setChoicesVisible] = useState(false);

  const handleCheckboxChange = column => {
    const columnIndex = selectedColumns.indexOf(column);
    if (columnIndex === -1) {
      return setSelectedColumns([...selectedColumns, column]);
    }

    const selectArr = [...selectedColumns];
    selectArr.splice(columnIndex, 1);
    return setSelectedColumns(selectArr);
  };

  const renderCheckboxes = () =>
    catColumns.map(column => (
      <label>
        <input
          name={column.key}
          type="checkbox"
          checked={selectedColumns.some(
            selectedColumn => selectedColumn.key === column.key,
          )}
          onChange={() => handleCheckboxChange(column)}
        />
        {column.name}
      </label>
    ));

  const renderTableHeader = () => (
    <tr>
      {selectedColumns.map(column => (
        <th> {column.name}</th>
      ))}
    </tr>
  );

  const renderTableRow = () =>
    cats.map(cat => (
      <tr>
        {selectedColumns.map(column => (
          <td> {cat[column.dataIndex]}</td>
        ))}
      </tr>
    ));

  return (
    <div className="task-4">
      <button
        type="button"
        onClick={() => setChoicesVisible(visible => !visible)}
      >
        {choicesVisible ? 'Hide Column Choices' : 'Show Column Choices'}
      </button>
      {choicesVisible && (
        <div className="check-box-group">{renderCheckboxes()}</div>
      )}
      <table>
        {renderTableHeader()}
        {renderTableRow()}
      </table>
    </div>
  );
}

export default Task4;
