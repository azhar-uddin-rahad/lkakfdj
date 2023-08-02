import React from 'react';
import Image from '../../Layout_Components/Image';
import {AiFillStar} from 'react-icons/ai';
import {BiStar} from 'react-icons/bi';
import {LiaShoppingBagSolid} from 'react-icons/lia';
import Flex from '../../Layout_Components/Flex';
import Button from '../../Layout_Components/Button';

const CartDesign = ({product}) => {
    return (
        <div>
            <Image className="w-full" ImgSrc={product.img}></Image>
            <Flex className="text-base mt-6 justify-between items-center">
                <Flex className="text-[#FFBD69]">
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <BiStar></BiStar>
                </Flex>
                <div>
                <p className='font-hind font-light text-[#B1B1B1]'>Zara</p>
                </div>
            </Flex>
          
            <h3 className='mt-2.5 font-hind font-bold text-primary text-xl pb-[60px]'>{product.name}</h3>
            <Button className="py-2.5 px-[30px] rounded-[50px] text-[#fff]">
                <Flex className="items-center gap-x-2.5">
                <LiaShoppingBagSolid className='h-5 w-5 '></LiaShoppingBagSolid>
                    <div className='inline-block bg-[#E5E5E5] w-[1px] h-7'></div>
                    <p className='font-hind font-normal text-lg'>Add To Cart</p>
                </Flex>
            </Button> 
        </div>
    );
};

export default CartDesign;