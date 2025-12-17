import { useMutation } from "@tanstack/react-query";
import { detectMedia } from "../services/detectionApi";

export const useDetection = () => {
  return useMutation({
    mutationFn: detectMedia,
  });
};
