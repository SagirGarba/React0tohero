import { Filter } from "../utils/interface";

interface Props {
  filter: Filter;
  onFilter: (key: string, value: number) => void;
}

const ProductFilter = ({ filter, onFilter }: Props) => {
  return (
    <div>
      Price: $
      <input
        defaultValue={filter.price.min}
        type="number"
        min={0}
        max={999}
        onChange={(e) => onFilter("min", parseFloat(e.target.value))}
      />{" "}
      - $
      <input
        defaultValue={filter.price.max}
        type="number"
        min={0}
        max={999}
        onChange={(e) => onFilter("max", parseFloat(e.target.value))}
      />
    </div>
  );
};

export default ProductFilter;
