import WrapperWithNavber from "../layout/wrapperWithNavber";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Wrapper from "../layout/wrapper";
import PerOrder from "../components/ordes/perOrder";

const backIcon = <AiOutlineArrowLeft />

const OrderInfo = [
    {
        id:1,
        productName: "Cheese",
        item: "2itmes",
        price: '43',
        date: 'Today, 04:27PM',
        image: require('../assets/images/food.jpg'),
        status: "Paid"
    },
    {
        id: 2,
        productName: "Butter",
        item: "2itmes",
        price: '233',
        date: 'Today, 04:27PM',
        image: require('../assets/images/food1.jpg'),
        status: "Paid"
    },
    {
        id:3,
        productName: "Yogurt",
        item: "2itmes",
        price: '233',
        date: 'Today, 04:27PM',
        image: require('../assets/images/food2.jpg'),
        status: "Paid"
    },
    {
        id:4,
        productName: "Cottage cheese",
        item: "2itmes",
        price: '233',
        date: 'Today, 04:27PM',
        image: require('../assets/images/food3.jpg'),
        status: "Paid"
    },
    {
        id:5,
        productName: "Cream",
        item: "2itmes",
        price: '233',
        date: 'Today, 04:27PM',
        image: require('../assets/images/food4.jpg'),
        status: "Paid"
    },
    {
        id:6,
        productName: "Cream",
        item: "2itmes",
        price: '233',
        date: 'Today, 04:27PM',
        image: require('../assets/images/food5.jpg'),
        status: "Paid"
    },
    {
        id:7,
        productName: "Sandwich",
        item: "2itmes",
        price: '233',
        date: 'Today, 04:27PM',
        image: require('../assets/images/food6.jpg'),
        status: "Paid"
    },
    {
        id:8,
        productName: "Hamburger",
        item: "2itmes",
        price: '233',
        date: 'Today, 04:27PM',
        image: require('../assets/images/food7.jpg'),
        status: "Paid"
    },
    {
        id:9,
        productName: "Hot dog",
        item: "2itmes",
        price: '233',
        date: 'Today, 04:27PM',
        image: require('../assets/images/food8.jpg'),
        status: "Paid"
    },
    {
        id:10,
        productName: "Pizza",
        item: "2itmes",
        price: '233',
        date: 'Today, 04:27PM',
        image: require('../assets/images/food9.jpg'),
        status: "Paid"
    },
    {
        id:11,
        productName: "Roast chicken",
        item: "2itmes",
        price: '233',
        date: 'Today, 04:27PM',
        image: require('../assets/images/food10.jpg'),
        status: "Paid"
    },
    {
        id:12,
        productName: "Seafood",
        item: "2itmes",
        price: '233',
        date: 'Today, 04:27PM',
        image: require('../assets/images/food11.jpg'),
        status: "Paid"
    },
]
export default function Orders(){

    return(
        <WrapperWithNavber pageTitle="Orders" backIcon={backIcon}>
            <Wrapper>
                {OrderInfo.map((item)=>(
                    <PerOrder   key={item.id}
                                image={item.image} 
                                productName={item.productName}
                                avilable={item.item}
                                price={item.price}
                                status={item.status}
                                date={item.date}
                    />
                ))}
            </Wrapper>
        </WrapperWithNavber>
    )
}