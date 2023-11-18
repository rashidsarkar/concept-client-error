import Categories from "../../components/Categoris/Categories";
import Rooms from "../../components/Rooms/Rooms";

const Home = () => {
  return (
    <div>
      {/* category section */}
      <Categories />

      <Rooms />
      {/* Room  section */}
    </div>
  );
};

export default Home;
