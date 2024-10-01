import { useState } from "react";
import { Product } from "../utils/interface";
import style from "./ProductCard.module.css";

interface Props {
  product: Product;
  background?: string | null;
  onFavourite: (productId: number) => void;
  onPurchase: (productId: number, newStockCount: number) => void;
  isFavourite: boolean;
}

const ProductCard = ({
  product,
  isFavourite,
  background = "slategray",
  onPurchase,
  onFavourite,
}: Props) => {
  const spec = product.specification;

  // const [stockCount, setStockCount] = useState(product.stockCount);
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    // setStockCount((prevStateCount) => prevStateCount - 1);

    onPurchase(product.id, product.stockCount - 1);
  };

  const handleCLick2 = () => {
    setShowMore(!showMore);
  };

  const handleTwoClicks = () => {
    // setStockCount((prevStateCount) => prevStateCount - 1);
    // setStockCount((prevStateCount) => prevStateCount - 1);
    onPurchase(product.id, product.stockCount - 2);
  };

  return (
    <article
      className={style.container}
      style={{ background: background ?? "gray" }}
    >
      <button
        className={style.favourite}
        onClick={() => onFavourite(product.id)}
      >
        {isFavourite ? "❤️" : "🤍"}
      </button>
      <h2>{product.title}</h2>
      <img
        src={product.imageSrc}
        alt={product.title}
        height="128px"
        width="128px"
      />

      <p>Specification</p>

      <button onClick={handleCLick2}>{showMore ? "Hide" : "Show"}</button>
      {showMore && (
        <ul className={style.list}>
          {spec.map((spe, i) => (
            <li key={i}>{spe}</li>
          ))}
        </ul>
      )}

      <Status stockCount={product.stockCount} />
      {product.stockCount > 0 && (
        <>
          <p>Price : {product.price}</p>
          <button onClick={handleClick} style={{marginRight: "6px"}}>Buy</button>
          {product.stockCount > 1 && (
            <button onClick={handleTwoClicks}>Buy 2</button>
          )}
        </>
      )}
    </article>
  );
};

export default ProductCard;

const Status = ({ stockCount }: { stockCount: number }) => {
  const availableMessage = (
    <p className={style.available}>{stockCount} items available</p>
  );

  const notAvailableMessage = (
    <p className={style.notAvailable}>Not available</p>
  );

  return stockCount === 0 ? notAvailableMessage : availableMessage;
};
