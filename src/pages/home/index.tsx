import Banner from "../../layout/Sections/Sections/Banner/Banner";
import CategorySection from "../../layout/Sections/Sections/HomeSections/Category/CategorySection";
import ComparisonContext from "../../layout/Sections/Sections/HomeSections/CarComparison/ComparisonContext";
import {Data,Title,subTitle,filter,category,carModel,priceRange} from "../../Utils/constants/language/Text"


const HomePage = () => {
  return (
    <div>
      <Banner Title={Title} subTitle={subTitle} category={category}  filter={filter} range={priceRange} carModel={carModel}  />
      <CategorySection  data={Data} />
      <ComparisonContext/>
    </div>
  );
};

export default HomePage;
