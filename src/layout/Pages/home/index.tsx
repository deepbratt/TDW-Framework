import Banner from "../../Sections/Sections/Banner/Banner";
// import CategorySection from "../../Sections/Sections/HomeSections/Category/CategorySection";
// import ComparisonContext from "../../Sections/Sections/HomeSections/CarComparison/ComparisonContext";
import {Data,Title,subTitle,filter,category,carModel,cities,priceRange} from "../Utils/Text"
export interface HomeProps {}

const HomePage: React.FC<HomeProps> = () => {
  return (
    <div>
      <Banner Title={Title} subTitle={subTitle} category={category}  filter={filter} priceRange={priceRange} carModel={carModel} cities={cities}  />
      {/* <CategorySection  data={Data} />
      <ComparisonContext/> */}

    </div>
  );
};

export default HomePage;