import WrapperWithNavber from "../layout/wrapperWithNavber";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Wrapper from "../layout/wrapper";
import PerCustomers from "../components/customers/perCustomers";

const backIcon = <AiOutlineArrowLeft />

const customersIfo = [
    {
        id:1,
        image: require('../assets/images/customers.webp'),
        name: 'Fahim',
        orders: "22 orders"
    },
    {
        id:2,
        image: require('../assets/images/customers.webp'),
        name: 'Fahim',
        orders: "22 orders"
    },
    {
        id:3,
        image: require('../assets/images/customers.webp'),
        name: 'Fahim',
        orders: "22 orders"
    },
    {
        id:4,
        image: require('../assets/images/customers.webp'),
        name: 'Fahim',
        orders: "22 orders"
    },
    {
        id:5,
        image: require('../assets/images/customers.webp'),
        name: 'Fahim',
        orders: "22 orders"
    },
    {
        id:6,
        image: require('../assets/images/customers.webp'),
        name: 'Fahim',
        orders: "22 orders"
    },
    {
        id:7,
        image: require('../assets/images/customers.webp'),
        name: 'Fahim',
        orders: "22 orders"
    },
    {
        id:8,
        image: require('../assets/images/customers.webp'),
        name: 'Fahim',
        orders: "22 orders"
    },
    {
        id:9,
        image: require('../assets/images/customers.webp'),
        name: 'Fahim',
        orders: "22 orders"
    },
    {
        id:10,
        image: require('../assets/images/customers.webp'),
        name: 'Fahim',
        orders: "22 orders"
    },
    {
        id:11,
        image: require('../assets/images/customers.webp'),
        name: 'Fahim',
        orders: "22 orders"
    },
]

export default function Customers(){

    return(
        <WrapperWithNavber pageTitle="Customers" backIcon={backIcon}>
            <Wrapper>
                {customersIfo.map((item)=>(
                    <PerCustomers 
                                    key={item.id}
                                    image={item.image}
                                    name={item.name}
                                    orders={item.orders}
                    />
                ))}
            </Wrapper>
            
        </WrapperWithNavber>
    )
}