import Container from "../../Shared/Container";
import { categories } from "./CategorisData";
import CategoryBox from "./CategoryBox";

function Categories() {
  return (
    <Container>
      <div className="pt-4 flex items-center justify-between overflow-x-auto">
        {categories.map((categorie, idx) => {
          return <CategoryBox key={idx} categoryBox={categorie}></CategoryBox>;
        })}
      </div>
    </Container>
  );
}

export default Categories;
