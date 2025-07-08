export const getPolicies = async () => {
  return Promise.resolve([
    { id: 1, name: "Health Insurance" },
    { id: 2, name: "Car Insurance" }
  ]);
};
