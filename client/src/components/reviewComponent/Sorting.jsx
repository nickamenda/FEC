import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Sorting = (props) => {
  // RElevant should be on by default
  return (
    <div>
      <h3 data-testid="sorting">{props.product.length} reviews, sorted by
      <select>
        <option>Relevant</option>
        <option>Helpful</option>
        <option>Newest</option>

      </select>
      </h3>
    </div>
  )
}

export default Sorting;