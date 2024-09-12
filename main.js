import Navigo from "navigo";
import "./style.css";
import ProductList from "./src/pages/ProductList";
import HomePage from "./src/pages/HomePage";
import ProductDetail from "./src/pages/ProductDetail";

const router = new Navigo("/", { linksSelector: "a" });

const app = document.querySelector("#app");
const render = (position, content) => {
	position.innerHTML = content();
};

router.on("/", () => {
	render(app, HomePage);
});
router.on("/products", () => {
	render(app, ProductList);
});
router.on("/product-detail/:id", (data) => {
	render(app, () => ProductDetail(data));
});

router.notFound(() => {
	render(app, () => "404 Not Found");
});
router.resolve();
