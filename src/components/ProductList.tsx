import style from "./ProductList.module.css";


interface Props {
  children: React.ReactNode;
}

const ProductList = ({ children }: Props) => {
  return (
    <>
      <div className={style.list1}>{children}</div>
    </>
  );
};

export default ProductList;
