import React from 'react'
import useSWR from 'swr'
import { add, removeItem, updateItem } from '../api/product';


const useProducts = () => {
    const {data , error , mutate } = useSWR("/products");
    //create 
    const create = async (item: any) => {
        const product = await add(item);
        mutate([...data, product])
    }

    //update
    const update = async(product: any) => {
        await updateItem(product);
        const newProduct = data.map((item : any) => item.id === data.id ? product : item);
        mutate(newProduct);
        console.log(newProduct)
    }
    //delete 
    const remove = async (id: any) => {
        await removeItem(id);
        const newProducts = data.filter((item: any) => item.id != id);
        mutate(newProducts);
        
    };
    return {
        data,
        error,
        update,
        create,
        remove,
    }
}

export default useProducts