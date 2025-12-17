export const mockDetection = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        label: Math.random() > 0.5 ? "FAKE" : "REAL",
        confidence: Math.floor(Math.random() * 40) + 60,
        timestamp: new Date().toISOString(),
      });
    }, 1200);
  });
