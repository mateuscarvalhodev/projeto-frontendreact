/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { AddToCartButton, Card, CardImage, CardPrice, CardTitle } from './styles';
import { MdAddShoppingCart } from 'react-icons/md';

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
      <CardPrice>R${product.value.toFixed(2)}</CardPrice>
      <AddToCartButton onClick={ () => handleClick(product)}>Adicione ao carrinho <MdAddShoppingCart /></AddToCartButton>
    </Card>
    
    </>
  )
}

export default ProductCard;