import React, { useEffect, useState } from 'react';
import { getStatements } from '../api/statementsService';

function StatementPage() {
  const [statements, setStatements] = useState([]);

  useEffect(() => {
    getStatements().then(setStatements);
  }, []);

  return (
    <div>
      <h2>Statements Page</h2>
      <ul>
        {statements.map(statement => (
          <li key={statement.id}>{statement.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default StatementPage;
