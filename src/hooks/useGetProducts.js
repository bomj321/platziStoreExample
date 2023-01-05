import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios(API);
      setProducts(response.data);
    })();
    // eslint-disable-next-line
  }, []);

  return products;
};

export default useGetProducts;
