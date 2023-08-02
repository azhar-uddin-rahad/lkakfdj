import React from "react";
import Container from "../../Layout_Components/Container";
import Flex from "../../Layout_Components/Flex";
import Image from "../../Layout_Components/Image";
import img5 from "../../assets/2_grande4.png";
import Button from "../../Layout_Components/Button";
import { FaCircle, FaMinus, FaPlus } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { BiHeartCircle } from "react-icons/bi";
import { MdOutlineBalance } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";

import{TiSocialTwitter,TiSocialFacebook} from 'react-icons/ti';

const ProductDetails = () => {
  return (
    <Container>
      <Flex className=" items-start gap-x-8 ">
        <Flex className="w-[711px] h-[830px] flex-wrap gap-[30px]">
          <div className="w-[46%]">
            <Image className="w-full h-full" ImgSrc={img5}></Image>
          </div>
          <div className="w-[46%]">
            <Image className="w-full h-full" ImgSrc={img5}></Image>
          </div>
          <div className="w-[46%]">
            <Image className="w-full h-full" ImgSrc={img5}></Image>
          </div>
          <div className="w-[46%]">
            <Image className="w-full h-full" ImgSrc={img5}></Image>
          </div>
        </Flex>

        <div>
          <h3 className="w-[700px] font-hind font-bold text-primary text-7xl mb-[30px] leading-[90px]">
            Quilted gilet with hood
          </h3>
          <Flex className="justify-between items-center">
            <Flex className="items-center gap-x-20">
              <h4 className="font-hind font-bold text-secondary text-2xl">
                $145{" "}
                <del className="font-hind font-light text-[#C4C4C4] text-base ml-2.5">
                  $249
                </del>
              </h4>
              <Flex className="items-center gap-x-2.5 font-hind font-normal  text-base">
                <FaCircle className="text-[#3B7F05]"></FaCircle>In stock
              </Flex>
            </Flex>
            <Button className="text-base font-medium py-[5] px-2.5 rounded-[20px]">
              Only 5 left
            </Button>
          </Flex>
          <Flex className="mt-5 gap-x-2.5 mb-[50px] ">
            <Flex className="text-base text-[#FFBD69] items-center font-extrabold">
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiOutlineStar></AiOutlineStar>
            </Flex>
            <p className="font-hind font-normal  text-base text-primary">
              6 Review
            </p>
            <div className="font-hind font-normal  text-base text-primary">
              |
            </div>

            <p className="font-hind font-normal  text-base text-primary">
              Add review
            </p>
          </Flex>

          <p className="font-hind text-base font-light text-secondaryTextColor">
            Sed pretium turpis id orci molestie, vitae placerat ligula
            vulputate. Duis volutpat ante sed laoreet tempus. Vivamus diam
            purus, vehicula ac tortor ut, dictum vestibulum nisi. Nulla
            condimentum felis quis augue viverra, et tempor arcu dapibus.
          </p>

          <Flex className="mt-[120px] justify-between items-center">
            <Flex className="items-center gap-10 ">
              <Flex className="items-center text-secondaryTextColor py-3 px-4 text-sm font-normal gap-x-2.5 border border-solid border-secondaryTextColor rounded-[50px]">
                <FaMinus></FaMinus>
                <input className="w-2.5" value={1}></input>
                <FaPlus></FaPlus>
              </Flex>
              <Button className="py-2.5 px-[30px] rounded-[50px] text-[#fff]">
                <Flex className="items-center gap-x-2.5">
                  <LiaShoppingBagSolid className="h-5 w-5 "></LiaShoppingBagSolid>
                  <div className="inline-block bg-[#E5E5E5] w-[1px] h-7"></div>
                  <p className="font-hind font-normal text-lg">Add To Cart</p>
                </Flex>
              </Button>
              <p className="font-bold font-hind text-[22px] text-primary">
                $265
              </p>
            </Flex>
            <Flex className="text-3xl gap-x-5 text-secondary">
              <BiHeartCircle></BiHeartCircle>
              <MdOutlineBalance></MdOutlineBalance>
            </Flex>
          </Flex>
          <div className="mt-[47px]">
          <p className="text-base text-secondaryTextColor font-sm font-light">
            Category{""}
            <span className="font-normal text-primary">Woman Accessories</span>
          </p>

         
            <p className="text-base text-secondaryTextColor font-sm font-light">
              Brand: <span className="font-normal text-primary">Yippee</span>
            </p>

            <p className="text-base text-secondaryTextColor font-sm font-light">
              SKU:{" "}
              <span className="font-normal text-primary">TR6085670457</span>
            </p>
          </div>
          <Flex className="text-3xl text-secondary mt-[30px] gap-x-[30px]">
            <BsInstagram></BsInstagram>
            <TiSocialTwitter></TiSocialTwitter>
            <TiSocialFacebook></TiSocialFacebook>
          </Flex>
        </div>
      </Flex>
    </Container>
  );
};

export default ProductDetails;
