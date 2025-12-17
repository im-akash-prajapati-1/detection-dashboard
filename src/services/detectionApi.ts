import { mockDetection } from "../mock/mockResponse";

export const detectMedia = async () => {
  const response = await mockDetection();
  return response;
};
