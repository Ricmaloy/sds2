import './styles.css';

import ProductCard from './ProductCard';
import { Product } from './types';
import { checkisSelected } from './helpers';

type Props = {
    products: Product[];
    selectedProducts: Product[]; 
    onSelectProduct: (product: Product) => void;
}

function ProductsList({products, onSelectProduct, selectedProducts}: Props) {
    return (
        <div className="orders-list-container">
             <div className="orders-list-items">
                 {
                     products.map(product => (
                         <ProductCard 
                            key={product.id} 
                            product={product}
                            onSelectProduct={onSelectProduct}
                            isSelected={checkisSelected(selectedProducts, product)}
                        />
                     ))
                 }
             </div>
        </div>
    )
}

export default ProductsList;