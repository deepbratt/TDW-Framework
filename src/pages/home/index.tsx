import { NavLink } from "react-router-dom";
import Banner from "../../layout/Sections/Sections/Banner/Banner";
// import CategorySection from "../../Sections/Sections/HomeSections/Category/CategorySection";
// import ComparisonContext from "../../Sections/Sections/HomeSections/CarComparison/ComparisonContext";
import {Data,Title,subTitle,filter,category,carModel,priceRange} from "../../Utils/constants/language/Text"
export interface HomeProps {}

const HomePage: React.FC<HomeProps> = () => {
  return (
    <div>
      <Banner Title={Title} subTitle={subTitle} category={category}  filter={filter} range={priceRange} carModel={carModel}  />
      {/* <CategorySection  data={Data} />
      <ComparisonContext/> */}
      <NavLink to="/car-detail/610d2255a96d7a001d6fac6f">
        Navigate
      </NavLink>

    </div>
  );
};

export default HomePage;
