import React from 'react';
import Container from '../../Layout_Components/Container';
import Flex from '../../Layout_Components/Flex';
import List from '../../Layout_Components/List';
import ListItem from '../../Layout_Components/ListItem';

import CartDesign from '../../Components/CartDesign/CartDesign';
import Pagination from '../../Components/pagination/pagination';

const ShopCollection = () => {
    return (
        <Container>
            <Flex className='item-center gap-x-36'>
            <div className='w-[336px]'>
                <div className='pt-7 pb-5 pl-[30px] pr-5 bg-[#EEF2F5] mb-10'>
              <Flex className="items-center justify-between mb-2.5">
                    <h3 className='font-hind font-bold text-primary text-lg'>Refine by</h3> 
                    <span className='font-hind font-light text-base underline cursor-pointer text-secondary '>Clear All</span>
                    </Flex>
                    <Flex className="items-center gap-x-3">
                    <p className='font-hind font-light text-base  text-primary '>Price</p>    
                    <span className='font-hind font-light text-base  text-primary '> $12-$97</span>
                    </Flex>
                    <Flex className="items-center gap-x-3">
                    <p className='font-hind font-light text-base  text-primary'>Color</p>    
                    <span className='w-4 h-4 border-2 border-[#C4C4C4] rounded-full bg-[#622060] inline-block'></span>
                    </Flex>
                    <Flex className="items-center gap-x-3">
                    <p className='font-hind font-light text-base  text-primary'>Size</p>    
                    <span className='font-hind font-bold text-lg  text-primary'>M</span>
                    </Flex>
                </div>
               <div>
                <h3 className='font-hind font-bold text-primary text-lg pb-6'>Categories</h3>
               <List className="list-none">
                    <ListItem className='font-hind font-light text-primary text-lg mb-12'>Sport Wear</ListItem>
                    <ListItem className='font-hind font-light text-primary text-lg'>Accessories</ListItem>
                    <ListItem className='font-hind font-light text-primary text-lg'>New</ListItem>
                </List>
               </div>
            </div>
            <div className='grid grid-cols-2 gap-x-7 gap-y-[60px]'>

               {/* { 
               productArr.map((items,index)=><CartDesign key={index} product={items}></CartDesign>)
               } */}
               {
               <Pagination itemsPerPage={6}></Pagination>
               }
            </div>
        </Flex>
        </Container>
    );
};

export default ShopCollection;