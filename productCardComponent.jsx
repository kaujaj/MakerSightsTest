import Reace, {useState} from 'react';

function productCard(props){
    const [productCard,setProductCard] = useState(props.productCard);
    return(
        <div className='carComponent'>
            <div className = 'productImage'>
                <img src={productCard.productImage} alt={`product iamge for ${productCard.productName}`}  />
            </div>
            <div className='productDetails'>
                <div className='productName'>
                    {productCard.productName}
                </div>
                <div className='productprice'>
                    {productCard.productPrice}
                </div>
            </div>
        </div>

    )
}

export default productCard;