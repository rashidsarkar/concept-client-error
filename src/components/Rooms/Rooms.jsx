import useRoomData from "../../API/useRoomData";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import CustomLoading from "../Loader/CustomLoading";

function Rooms() {
  const { roomsData, isLoading, isError, error } = useRoomData();
  if (isLoading) return <CustomLoading></CustomLoading>;
  if (isError) return <ErrorMessage error={error}></ErrorMessage>;

  return (
    <div>
      <p>Room Card : {roomsData.length}</p>
    </div>
  );
}

export default Rooms;
