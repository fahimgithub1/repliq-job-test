import WrapperWithNavber from "../layout/wrapperWithNavber";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Wrapper from "../layout/wrapper";
import OverView from "../components/offer/overView";
import AciveOrder from "../components/offer/activeOrder";

const backIcon = <AiOutlineArrowLeft />

const OrderInfo = [
    {
        id:1,
        productName: "Barger",
        item: "2itmes",
        price: '233',
        date: 'Todaym, 04:27PM',
        image: require('../assets/images/product2.jpg'),
        status: "Paid"
    },
    {
        id: 2,
        productName: "Barger",
        item: "2itmes",
        price: '233',
        date: 'Todaym, 04:27PM',
        image: require('../assets/images/product2.jpg'),
        status: "Paid"
    },
    {
        id:3,
        productName: "Barger",
        item: "2itmes",
        price: '233',
        date: 'Todaym, 04:27PM',
        image: require('../assets/images/product2.jpg'),
        status: "Paid"
    },
    {
        id:4,
        productName: "Barger",
        item: "2itmes",
        price: '233',
        date: 'Todaym, 04:27PM',
        image: require('../assets/images/product2.jpg'),
        status: "Paid"
    },
    {
        id:5,
        productName: "Barger",
        item: "2itmes",
        price: '233',
        date: 'Todaym, 04:27PM',
        image: require('../assets/images/product2.jpg'),
        status: "Paid"
    },
    {
        id:6,
        productName: "Barger",
        item: "2itmes",
        price: '233',
        date: 'Todaym, 04:27PM',
        image: require('../assets/images/product2.jpg'),
        status: "Paid"
    },
    {
        id:7,
        productName: "Barger",
        item: "2itmes",
        price: '233',
        date: 'Todaym, 04:27PM',
        image: require('../assets/images/product2.jpg'),
        status: "Paid"
    },
    {
        id:8,
        productName: "Barger",
        item: "2itmes",
        price: '233',
        date: 'Todaym, 04:27PM',
        image: require('../assets/images/product2.jpg'),
        status: "Paid"
    },
    {
        id:9,
        productName: "Barger",
        item: "2itmes",
        price: '233',
        date: 'Todaym, 04:27PM',
        image: require('../assets/images/product2.jpg'),
        status: "Paid"
    },
    {
        id:10,
        productName: "Barger",
        item: "2itmes",
        price: '233',
        date: 'Todaym, 04:27PM',
        image: require('../assets/images/product2.jpg'),
        status: "Paid"
    },
    {
        id:11,
        productName: "Barger",
        item: "2itmes",
        price: '233',
        date: 'Todaym, 04:27PM',
        image: require('../assets/images/product2.jpg'),
        status: "Paid"
    },
    {
        id:12,
        productName: "Barger",
        item: "2itmes",
        price: '233',
        date: 'Todaym, 04:27PM',
        image: require('../assets/images/product2.jpg'),
        status: "Paid"
    },
]

export default function Offers(){

    return(
        <WrapperWithNavber pageTitle="Offers" backIcon={backIcon}>
            <Wrapper>
                <OverView />

                <AciveOrder 
                            OrderInfo={OrderInfo}
                />
            </Wrapper>
        </WrapperWithNavber>
    )
}