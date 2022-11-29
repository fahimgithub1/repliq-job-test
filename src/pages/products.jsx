import WrapperWithNavber from "../layout/wrapperWithNavber";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Wrapper from "../layout/wrapper";
import PerProduct from "../components/product/perProduct";

const backIcon = <AiOutlineArrowLeft />

const ProductInfo = [
    {
        id:1,
        image: require('../assets/images/food.jpg'),
        productName: "Cheese",
        avilable: "22 items",
        price: "533",
        disPrice: "598Tk"
    },
    {
        id:2,
        image: require('../assets/images/food1.jpg'),
        productName: "Butter",
        avilable: "22 items",
        price: "533",
        disPrice: "598Tk"
    },
    {
        id:3,
        image: require('../assets/images/food2.jpg'),
        productName: "Yogurt",
        avilable: "22 items",
        price: "533",
        disPrice: "598Tk"
    },
    {
        id:4,
        image: require('../assets/images/food3.jpg'),
        productName: "Cottage cheese",
        avilable: "22 items",
        price: "533",
        disPrice: "598Tk"
    },
    {
        id:5,
        image: require('../assets/images/food4.jpg'),
        productName: "Ice cream",
        avilable: "22 items",
        price: "533",
        disPrice: "598Tk"
    },
    {
        id:6,
        image: require('../assets/images/food5.jpg'),
        productName: "Sandwich",
        avilable: "22 items",
        price: "533",
        disPrice: "598Tk"
    },
    {
        id:7,
        image: require('../assets/images/food6.jpg'),
        productName: "Hamburger",
        avilable: "22 items",
        price: "533",
        disPrice: "598Tk"
    },
    {
        id:44,
        image: require('../assets/images/food7.jpg'),
        productName: "Pizza",
        avilable: "22 items",
        price: "533",
        disPrice: "598Tk"
    },
    {
        id:8,
        image: require('../assets/images/food8.jpg'),
        productName: "Roast chicken",
        avilable: "22 items",
        price: "533",
        disPrice: "598Tk"
    },
    {
        id:9,
        image: require('../assets/images/food9.jpg'),
        productName: "Bacon",
        avilable: "22 items",
        price: "533",
        disPrice: "598Tk"
    },
    {
        id:10,
        image: require('../assets/images/food10.jpg'),
        productName: "Shrimp",
        avilable: "22 items",
        price: "533",
        disPrice: "598Tk"
    },
    {
        id:11,
        image: require('../assets/images/food11.jpg'),
        productName: "Spaghetti",
        avilable: "22 items",
        price: "533",
        disPrice: "598Tk"
    },
    {
        id:12,
        image: require('../assets/images/food1.jpg'),
        productName: "Pancake",
        avilable: "22 items",
        price: "533",
        disPrice: "598Tk"
    },
]

export default function Products(){

    return(
        <WrapperWithNavber pageTitle="Products" backIcon={backIcon}>
            <Wrapper>
                {ProductInfo.map((item)=>(
                    <PerProduct key={item.id}
                                image={item.image} 
                                productName={item.productName}
                                avilable={item.avilable}
                                price={item.price}
                                disPrice={item.disPrice}
                    />
                ))}
            </Wrapper>
            
        </WrapperWithNavber>
    )
}