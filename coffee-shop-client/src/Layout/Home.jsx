import Banner from "../Components/Banner";
import Follow from "../Components/Follow";
import Icon from "../Components/Icon";
import Products from "../Components/Products";


const Home = () => {
    return (
        <div className=" font-rancho">
            <Banner/>
            <Icon></Icon>
            <Products></Products>
            <Follow></Follow>
        </div>
    );
};

export default Home;