/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { AddToCartButton, Card, CardImage, CardPrice, CardTitle } from './styles';

const ProductCard = ({product, onClickProduct}) => {
  
  

  return (
    <>
    
    <Card>
      <CardImage src={product.imageUrl} alt={product.name} />
      <CardTitle>{product.name}</CardTitle>
      <CardPrice>R${product.value}</CardPrice>
      <AddToCartButton onClick={ () => onClickProduct(product)}>Adicione ao carrinho</AddToCartButton>
    </Card>
    
    </>
  )
}

export default ProductCard;