import { useQuery } from "@tanstack/react-query";
import axiosInstancePublic from "../AxiosAPI/axiosInstancePublic";
import { useParams } from "react-router-dom";
function useSingleRoomData() {
  const { id } = useParams();
  // console.log(id);
  const {
    data: singleRoomData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: async () => {
      const res = await axiosInstancePublic.get(`/api/singleRoomData/${id}`);
      // const res = await axiosInstancePublic.get(
      //   `api/singleRoomData/6558af9ffc3e8fb3c6035066`
      // );
      // http://localhost:8000/api/singleRoomData/6558af9ffc3e8fb3c6035066
      return res.data;
    },
    queryKey: ["roomsData"],
  });

  return { singleRoomData, isLoading, isError, error };
}

export default useSingleRoomData;
