import { useQuery } from "@tanstack/react-query";
import axiosInstancePublic from "../AxiosAPI/axiosInstancePublic";

function useRoomData() {
  const {
    data: roomsData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: async () => {
      const res = await axiosInstancePublic.get("/api/rooms");
      return res.data;
    },

    queryKey: ["roomsData"],
  });
  return { roomsData, isLoading, isError, error };
}

export default useRoomData;
