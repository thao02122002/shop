import Navigo from "navigo";
// import Footer from "../components/footer";
// import Header from "../components/header";
import HomePage from "../pages/homepage";
import DetailPage from "../pages/detail";
import ProductPage from "../pages/productpage";
import SingIn from "../pages/singin";
import SingUp from "../pages/singup";
import AdminHome from "../pages/admin/new/adminHomePage";
import detailHome from "../pages/admin/new/detailHome";
import addHome from "../pages/admin/new/add";

const router = new Navigo("/", { linksSelector: "a" });
const print = (content) => {
    // document.querySelector("#header").innerHTML = Header.render();
    document.querySelector("#app").innerHTML = content;
    // document.querySelector("#footer").innerHTML = Footer.render();
    // document.querySelector("#singin").innerHTML = SingIn.render();
    // document.querySelector("#singup").innerHTML = SingUp.render();
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print("About Page");
    },
    "/product": () => {
        print(ProductPage.render());
    },
    "/product/:id": ({ data }) => {
        const { id } = data;
        print(DetailPage.render(+id));
    },
    "/singin": () => {
        print(SingIn.render());
    },
    "/singup": () => {
        print(SingUp.render());
    },
    "/admin/dashboard": () => {
        print(AdminHome.render());
    },
    "/admin/news/:id/edit": ({ data }) => {
        const { id } = data;
        print(detailHome.render(+id));
    },
    "/admin/news/add": () => {
        print(addHome.render());
    },
});
router.resolve();