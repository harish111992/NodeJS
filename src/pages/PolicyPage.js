import React, { useEffect, useState } from 'react';
import { getPolicies } from '../api/policyService';

function PolicyPage() {
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    getPolicies().then(setPolicies);
  }, []);

  return (
    <div>
      <h2>Policy Page</h2>
      <ul>
        {policies.map(policy => (
          <li key={policy.id}>{policy.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PolicyPage;
