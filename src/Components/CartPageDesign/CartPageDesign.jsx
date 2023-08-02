import React, { useReducer } from 'react';
import { GrFormClose } from "react-icons/gr";
import { FaMinus, FaPlus } from "react-icons/fa";
import Image from "../../Layout_Components/Image";
import productImg from "../../assets/bg.png";
import Flex from "../../Layout_Components/Flex";
const initialState = {
  count: 1,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      if (state.count > 1) {
        return { count: state.count - 1 };
      }

    default:
      return state;
  }
};

const CartPageDesign = ({product}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="flex gap-x-2.5 py-[30px] items-center justify-start">
                <div className="w-[125px] h-[127px]">
                  <Image className="w-full h-full" ImgSrc={product.img}></Image>
                </div>
                <div>
                <p className="font-dm text-lg font-semibold text-primary">
                  {product.name}
                </p>
                <Flex className="items-center gap-x-3">
                    <p className='font-hind font-light text-base  text-primary'>Color</p>    
                    <span className='w-4 h-4 rounded-full bg-[#FBDADA] inline-block'></span>
                    </Flex>
                <Flex className="items-center gap-x-3">
                    <p className='font-hind font-light text-base  text-primary'>Size</p>    
                    <span>M</span>
                    </Flex>

                </div>
              </td>
                <td className="px-6 py-4">
                    <p className="font-hind font-medium text-[22px]  text-[#303960]">{product.price}</p>
                </td>
                <td className="px-6 py-4">
                <Flex className="w-[100px] items-center text-secondaryTextColor py-3 px-4 text-sm font-normal gap-x-2.5 border border-solid border-secondaryTextColor rounded-[50px]">
                  <FaMinus  onClick={()=>dispatch({type: "DECREMENT"})}></FaMinus>
                  <input className="w-2.5" value={state.count}></input>
                  <FaPlus onClick={()=>dispatch({type: "INCREMENT"})}></FaPlus>
                </Flex>
                </td>
                <td className="px-6 py-4">
                    <p className="font-hind font-semibold text-[22px]  text-secondary">{product.price * state.count}</p>
                </td>
                <td className="px-6 py-4 text-right">
                <GrFormClose className="font-light text-2xl text-secondaryTextColor mr-5"></GrFormClose>
                </td>
            </tr>
             
          </tbody>
    );
};

export default CartPageDesign;