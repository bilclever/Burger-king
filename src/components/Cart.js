import '../styles/Cart.css';
import plus from '../assets/plus.png';
import moins from '../assets/moins.png';
import addToCart from './ShoppingList';
function Cart({ cart}) {
	const total = cart.reduce((acc, plant) => acc + plant.price * plant.amount, 0)
    Function ReduceFromCart(){
		
	}
	return (
		<div className="lmj-cart">
			<h2>Panier</h2>
			<ul className="lmj-list">
				{cart.length> 0? (
					cart.map(({ name, price, amount}, index) => (
						<li key={index}>
							{name} : {price * amount}€ 
							<img  className="lmj-signe" src={plus} alt='ajouter' onClick={() => addToCart(name, price) }/>	
							<img className="lmj-signe" src={moins} alt='retirer' />
						</li>
					))
				): (
					<li>Votre panier est vide</li>
				)}
			</ul>
			<p><strong>Total:</strong> {total}€</p>
		</div>
	)
}

export default Cart


