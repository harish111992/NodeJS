export const getFinanceDetails = async () => {
  return Promise.resolve([
    { id: 1, type: "Premium", amount: 500 },
    { id: 2, type: "Claim", amount: 1200 }
  ]);
};
