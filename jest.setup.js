// jest.setup.ts
globalThis.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ results: [] }),
  })
);
