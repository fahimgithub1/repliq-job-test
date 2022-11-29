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
        image: require('../assets/images/perosn.jpg'),
        name: 'James',
        orders: "03 orders"
    },
    {
        id:3,
        image: require('../assets/images/perosn1.jpg'),
        name: 'Robert',
        orders: "5 orders"
    },
    {
        id:4,
        image: require('../assets/images/perosn2.jpg'),
        name: 'John',
        orders: "43 orders"
    },
    {
        id:5,
        image: require('../assets/images/perosn3.jpg'),
        name: 'Michael',
        orders: "18 orders"
    },
    {
        id:6,
        image: require('../assets/images/perosn4.jpg'),
        name: 'David',
        orders: "45 orders"
    },
    {
        id:7,
        image: require('../assets/images/perosn5.jpg'),
        name: 'William',
        orders: "0 orders"
    },
    {
        id:8,
        image: require('../assets/images/perosn6.jpg'),
        name: 'Richard',
        orders: "0 orders"
    },
    {
        id:9,
        image: require('../assets/images/perosn7.jpg'),
        name: 'Joseph',
        orders: "23 orders"
    },
    {
        id:10,
        image: require('../assets/images/perosn8.jpg'),
        name: 'Thomas	',
        orders: "0 orders"
    },
    {
        id:11,
        image: require('../assets/images/perosn9.jpg'),
        name: 'Christopher',
        orders: "65 orders"
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