import style from "./App.module.css";
import ProductCard from "./components/ProductCard";

import ProductList from "./components/ProductList";
import { Product } from "./utils/interface";
import { Fragment } from "react/jsx-runtime";
import ProductFilter from "./components/ProductFilter";
import { useState } from "react";
import { products as productData } from "./utils/products";

const App = () => {
  const [filter, setFilter] = useState({
    price: {
      min: 0,
      max: 999,
    },
    others: "Other Values",
  });

  const [products, setProducts] = useState<Product[]>(productData);

  const handlePurchase = (productId: number, newStockCount: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, stockCount: newStockCount }
          : product
      )
    );
  };

  const [favourites, setFavourites] = useState<number[]>([]);

  const handleFilter = (key: string, value: number) => {
    setFilter((prevValue) => ({
      ...prevValue,
      price: {
        ...prevValue.price,
        [key]: value,
      },
    }));
  };

  const handleFavourite = (productId: number) => {
    if (favourites.includes(productId)) {
      //remove
      setFavourites((prevFavourites) =>
        prevFavourites.filter((id) => id !== productId)
      );
    } else {
      setFavourites((prevFavourites) => [...prevFavourites, productId]);
    }
  };

  return (
    <div className={style.App}>
      <ProductList>
        {products.map((product) => (
          <ProductCard
            key={product.title}
            product={product}
            isFavourite={favourites.includes(product.id)}
            onPurchase={handlePurchase}
            onFavourite={handleFavourite}
          />
        ))}
      </ProductList>

      <h2>Product Filter</h2>
      <ProductFilter filter={filter} onFilter={handleFilter} />

      {products
        .filter(
          ({ price }) =>
            parseFloat(price.replace("$", "")) >= filter.price.min &&
            parseFloat(price.replace("$", "")) <= filter.price.max
        )
        .map(({ title, price }) => (
          <Fragment key={title}>
            <hr className={style.listDivider} />
            {`The price of ${title} is ${price}`}
          </Fragment>
        ))}
    </div>
  );
};

export default App;
