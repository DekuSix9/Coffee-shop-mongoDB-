import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import ScrollToTop from "./ScrollToTop";
import Footer from "../Components/Footer ";


const Main = () => {
    return (
        <div>
            <Header></Header>
            <ScrollToTop></ScrollToTop>
            <Outlet></Outlet>
            <Footer/>
            
        </div>
    );
};

export default Main;