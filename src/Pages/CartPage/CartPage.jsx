import React, { useReducer } from "react";
import Container from "../../Layout_Components/Container";
import CartPageDesign from "../../Components/CartPageDesign/CartPageDesign";
import {productCart} from "../../data/data"
import Button from "../../Layout_Components/Button";
import Flex from "../../Layout_Components/Flex";
const CartPage = () => {
  

  return (
    <Container>
      <h1 className="font-hind font-bold text-primary text-7xl mb-[30px] leading-[90px]">
        Cart Page
      </h1>
      <div className="mb-14 w-[947px] ">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-sm text-secondaryTextColor uppercase bg-gray-50">
            <tr>
                <th scope="col" className="px-6 py-3">
                Item
                </th>
                <th scope="col" className="px-6 py-3">
                Price
                </th>
                <th scope="col" className="px-6 py-3">
                Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                Subtotal
                </th>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                </th>
            </tr>
            </thead>
                {productCart.map((item,index)=><CartPageDesign key={index} product={item}></CartPageDesign>)
                }
            
        </table>
        <Flex className="justify-end items-center gap-x-20 mt-[50px]">
        <button className="px-[30px] py-2.5 font-hind font-bold text-primary text-lg bg-[#EEF2F5] rounded-[20px]">Clear Cart</button>
        <Button className="px-[30px] py-2.5 text-base font-medium  rounded-[20px]"> Update Cart </Button> 
      </Flex>
      </div>
      
    </Container>
  );
};

export default CartPage;
