import WrapperWithNavber from "../layout/wrapperWithNavber";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Wrapper from "../layout/wrapper";
import PerProduct from "../components/product/perProduct";

const backIcon = <AiOutlineArrowLeft />

const ProductInfo = [
    {
        id:1,
        image: require('../assets/images/product2.jpg'),
        productName: "Barger",
        avilable: "22 items",
        price: "533",
        disPrice: "598Tk"
    },
    {
        id:2,
        image: require('../assets/images/product2.jpg'),
        productName: "Barger",
        avilable: "22 items",
        price: "533",
        disPrice: "598Tk"
    },
    {
        id:3,
        image: require('../assets/images/product2.jpg'),
        productName: "Barger",
        avilable: "22 items",
        price: "533",
        disPrice: "598Tk"
    },
    {
        id:4,
        image: require('../assets/images/product2.jpg'),
        productName: "Barger",
        avilable: "22 items",
        price: "533",
        disPrice: "598Tk"
    },
    {
        id:5,
        image: require('../assets/images/product2.jpg'),
        productName: "Barger",
        avilable: "22 items",
        price: "533",
        disPrice: "598Tk"
    },
    {
        id:6,
        image: require('../assets/images/product2.jpg'),
        productName: "Barger",
        avilable: "22 items",
        price: "533",
        disPrice: "598Tk"
    },
    {
        id:7,
        image: require('../assets/images/product2.jpg'),
        productName: "Barger",
        avilable: "22 items",
        price: "533",
        disPrice: "598Tk"
    },
    {
        id:44,
        image: require('../assets/images/product2.jpg'),
        productName: "Barger",
        avilable: "22 items",
        price: "533",
        disPrice: "598Tk"
    },
    {
        id:8,
        image: require('../assets/images/product2.jpg'),
        productName: "Barger",
        avilable: "22 items",
        price: "533",
        disPrice: "598Tk"
    },
    {
        id:9,
        image: require('../assets/images/product2.jpg'),
        productName: "Barger",
        avilable: "22 items",
        price: "533",
        disPrice: "598Tk"
    },
    {
        id:10,
        image: require('../assets/images/product2.jpg'),
        productName: "Barger",
        avilable: "22 items",
        price: "533",
        disPrice: "598Tk"
    },
    {
        id:11,
        image: require('../assets/images/product2.jpg'),
        productName: "Barger",
        avilable: "22 items",
        price: "533",
        disPrice: "598Tk"
    },
    {
        id:12,
        image: require('../assets/images/product2.jpg'),
        productName: "Barger",
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