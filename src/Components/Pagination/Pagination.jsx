import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import { productArr } from '../../data/data';

import CartDesign from '../CartDesign/CartDesign';

// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item,index) => 
            <CartDesign key={index} product={productArr[index]}></CartDesign>
          )}
      </>
    );
  }
  
  
const Pagination = ({ itemsPerPage }) => {
  console.log(itemsPerPage);
 
     // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [itemSelected, setItemSelected] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemSelected(event.selected)
    setItemOffset(newOffset);
  };

    return (
        <>
          <Items currentItems={currentItems} />
          <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        previousLabel=""
        pageClassName="inline-block py-2 px-3.5 font-dm font-regular text-sm "
        // pageLinkClassName="inline-block border border-sloid border-[#F0F0F0] py-2 px-3.5 font-dm font-regular text-sm  bg-black text-white "
        previousClassName=""
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        containerClassName="flex gap-x-3.5 mt-12"
        activeClassName="inline-block rounded-full border border-sloid border-[#F0F0F0] py-2 px-3.5 font-dm font-regular text-sm  bg-info text-white"
        renderOnZeroPageCount={null}
      />
    </>
      );
    }
    
    export default Pagination;