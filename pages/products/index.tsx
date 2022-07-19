import React, {useEffect, useState} from 'react'
import {GetStaticProps, GetStaticPropsContext } from "next";
import Link from 'next/link';
import useSWR from 'swr';

type ProductProps = {
    products: any[];
}
const url = 'https://6110f09bc38a0900171f0ed0.mockapi.io/products';

const fetcher = async (url: string)  => await (await fetch(url)).json()
//client
const ProductPage =() => {
const {data, error} = useSWR(url, fetcher, {revalidateOnMount: false, revalidateOnFocus:true});
if(error) return <div>Failed to load</div>
if(!data) return <div>Loading...</div>

// const ProductPage = ({products}: ProductProps) => {
//     //console.log("Product Page");
//     //console.log("products", products);
//     if(!products) return null;
//     return (
//         <div>
//             {products.map((item) => (
//                 <div key={item.id}><Link href={`/products/${item.id}`}>{item.name}</Link></div>
//             ))}
//         </div>
//     )
// }


// //chạy ở server 
// //chạy đầu tiên 
// export const getStaticProps: GetStaticProps<ProductProps> = async ( 
//     context : GetStaticPropsContext
// ) => {
//     const data = await (await fetch(`http://localhost:3002/products`)).json();
//     console.log('data', data);
//     if(!data) {
//         return {
//             notFound: true
//         }
//     }
//     return {
//         props: {
//             products: data
//         }
//     }
// }
// export default ProductPage


// //  getStaticProps: 

return (
    <div>
        {data.map((item) => (
            <div key={item.id}><Link href={`/products/${item.id}`}>{item.name}</Link></div>
        ))}
    </div>
);
        };
        export default ProductPage;
