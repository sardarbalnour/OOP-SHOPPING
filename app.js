import { fetchData } from "./utils/httpReq.js";

const render = async () => {
  const productData = await fetchData();
  console.log(productData);
};

document.addEventListener("DOMContentLoaded", render);
