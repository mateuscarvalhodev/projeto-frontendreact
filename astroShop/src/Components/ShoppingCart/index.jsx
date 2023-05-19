/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import {
  CartItemsContainer,
  CheckoutButton,
  Container,
  ItemContainer,
  RemoveButton,
} from "./styles";


const ShoppingCart = ({ cart, setCart }) => {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    let newAmount = 0;
    cart.forEach((item) => {
      newAmount += item.value * item.quantity;
    });
    setAmount(newAmount);
  }, [cart]);

  const removeItemFromCart = (item) => {
    cart.map((itemRemoved) => {
      
      if(itemRemoved.id === item && itemRemoved.quantity >= 1) {
        itemRemoved.quantity = itemRemoved.quantity - 1;
        setCart([...cart])
      }
      if(itemRemoved.quantity === 0) {
       const cartRemovedItem = cart.filter((itemRemoved) => 
        itemRemoved.quantity !== 0 
      )
      setCart(cartRemovedItem);
      }
    })
  }
  const onFinish = () => {
    alert('Nos vemos no backEnd');
  }
  return (
    <>
      <Container>
        <h1>Carrinho Astro</h1>
        <CartItemsContainer>
        {cart.map((item, index) => (
          <ItemContainer key={index}>
            <div>
              <p>{item.name}</p>
              <img src={item.imageUrl} alt={item.name} />
              <p>Quantidade: {item.quantity}</p>
              <p>Valor: R${item.value * item.quantity}</p>
            </div>
            <RemoveButton onClick={() =>removeItemFromCart(item.id)}>Remover</RemoveButton>
          </ItemContainer>
        ))}
        </CartItemsContainer>
        <p>Valor Total: R${amount}</p>
        <CheckoutButton onClick={onFinish}>Finalizar Compra</CheckoutButton>
      </Container>
    </>
  );
};

export default ShoppingCart;
