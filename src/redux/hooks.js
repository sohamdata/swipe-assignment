import { useSelector } from "react-redux";
import { selectInvoiceList } from "./slices/invoicesSlice";
import { selectProductList } from "./slices/productsSlice";

export const useInvoiceListData = () => {
  const invoiceList = useSelector(selectInvoiceList);

  const getOneInvoice = (receivedId) => {
    return (
      invoiceList.find(
        (invoice) => invoice.id.toString() === receivedId.toString()
      ) || null
    );
  };

  const listSize = invoiceList.length;

  return {
    invoiceList,
    getOneInvoice,
    listSize,
  };
};

export const useProductListData = () => {
  const productList = useSelector(selectProductList);

  const getOneProduct = (receivedId) => {
    return (
      productList.find(
        (product) => product.id.toString() === receivedId.toString(),
      ) || null
    );
  };

  const listSize = productList.length;

  return {
    productList,
    getOneProduct,
    listSize,
  };
};
