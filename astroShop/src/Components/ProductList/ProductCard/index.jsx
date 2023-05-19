/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { AddToCartButton, Card, CardImage, CardPrice, CardTitle } from './styles';

const ProductCard = ({product, onClickProduct}) => {
  const notify = () => toast('Item adicionado ao carrinho!');
  const handleClick = () => {
    onClickProduct(product);
    notify();
  }
  

  return (
    <>
    
    <Card>
      <CardImage src={product.imageUrl} alt={product.name} />
      <CardTitle>{product.name}</CardTitle>
      <CardPrice>R${product.value}</CardPrice>
      <AddToCartButton onClick={ () => handleClick(product)}>Adicione ao carrinho</AddToCartButton>
    </Card>
    
    </>
  )
}

export default ProductCard;