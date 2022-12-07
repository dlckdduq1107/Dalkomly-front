import styled from 'styled-components';
import ProductItem from './productItem';

function ProductList(props: any) {
  const { productList, title } = props;
  return (
    <ProductsWrapper>
      <Title>{title}</Title>
      <ItemWrapper>
        {productList.map((product: any) => (
          <ProductItem imgPath={product.imgPath} />
        ))}
      </ItemWrapper>
    </ProductsWrapper>
  );
}
export default ProductList;

const ProductsWrapper = styled.div`
  margin: 20px;
`;
const ItemWrapper = styled.div`
  display: flex;
`;
const Title = styled.div`
  font-size: 30px;
  margin-bottom: 10px;
`;