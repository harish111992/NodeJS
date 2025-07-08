import React, { useEffect, useState } from 'react';
import { getFinanceDetails } from '../api/financeService';

function FinancePage() {
  const [finance, setFinance] = useState([]);

  useEffect(() => {
    getFinanceDetails().then(setFinance);
  }, []);

  return (
    <div>
      <h2>Finance Page</h2>
      <ul>
        {finance.map(item => (
          <li key={item.id}>{item.type}: ${item.amount}</li>
        ))}
      </ul>
    </div>
  );
}

export default FinancePage;
