import Products from "./models/Products.js";
import Cart from "./models/Cart.js";
import { fetchData } from "./utils/httpReq.js";

const productsNode = document.querySelector("#products");
const cartListNode = document.querySelector("#cart-list");
const totalPriceNode = document
  .querySelector("#total-price")
  .querySelector("span");

const render = async () => {
  const productData = await fetchData();

  const cartInstance = new Cart(cartListNode, totalPriceNode);
  const productsInstance = new Products(
    productsNode,
    productData,
    cartInstance
  );

  productsInstance.showProducts();
};

document.addEventListener("DOMContentLoaded", render);
