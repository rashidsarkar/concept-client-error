import useRoomData from "../../API/useRoomData";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import CustomLoading from "../Loader/CustomLoading";
import Container from "../Shared/Container";
import Card from "./Card";

function Rooms() {
  const { roomsData, isLoading, isError, error } = useRoomData();
  if (isLoading) return <CustomLoading></CustomLoading>;
  if (isError) return <ErrorMessage error={error}></ErrorMessage>;

  return (
    <Container>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 ">
        {roomsData.map((room) => {
          return <Card key={room._id} room={room}></Card>;
        })}
      </div>
    </Container>
  );
}

export default Rooms;
