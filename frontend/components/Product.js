import ItemStyles from "./styles/ItemStyles";
import PriceTag from "./styles/PriceTag";
import Link from "next/link";

export default function Product({ product }) {
  return (
    <div>
      <ItemStyles>
        <img
          src={product?.photo?.image?.publicUrlTransformed}
          alt={product.name}
        />
        <h2>
          <Link href={`/product/${product.id}`}>{product.name}</Link>
        </h2>
        <PriceTag>{product.price}</PriceTag>
      </ItemStyles>
    </div>
  );
}
