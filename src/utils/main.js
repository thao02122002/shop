import Navigo from "navigo";
import Footer from "../components/footer";
import Header from "../components/header";
import HomePage from "../pages/homepage";
import DetailPage from "../pages/detail";
import ProductPage from "../pages/productpage";

const router = new Navigo("/", { linksSelector: "a" });
const print = (content) => {
    document.querySelector("#header").innerHTML = Header.render();
    document.querySelector("#app").innerHTML = content;
    document.querySelector("#footer").innerHTML = Footer.render();
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
});
router.resolve();