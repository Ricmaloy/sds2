import { Product } from './types';

import { MdStar, MdStarBorder } from 'react-icons/md';


type Props = {
    product: Product;
}

function formatPrice(price: number) {
   const formatter = new Intl.NumberFormat('pt-BR', {
       style: 'currency',
       currency: 'BRL',
       minimumFractionDigits: 2
   });

   return formatter.format(price);
}

function ProductCard({product}: Props) {
    return (
        <div className="order-card-container">

            <div className="order-card-imageContainer">
                <img src={product.imageUri} className="order-card-image" alt={product.name}/>
            </div>

            <div  className="order-card-textContainer">
                <h3 className="order-card-title">
                    {product.name}
                </h3>
                <div className="order-card-rating">
                    <div className="order-card-rating-stars">
                        <MdStar/>
                        <MdStar/>
                        <MdStar/>
                        <MdStar/>
                        <MdStarBorder/>
                    </div>
                    <div className="order-card-assessments">(412)</div>
                </div>
                <div className="order-card-description">
                    <h3>Descrição</h3>
                    <p>{product.description}</p>
                </div>
                <h3 className="order-card-price">{formatPrice(product.price)}</h3>
            </div>

        </div>
    )
}

export default ProductCard;