import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

import './home.css'

export const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        axios
        .get(`https://dummyjson.com/products`)
        .then((response)=>{
            let data =response.data.products
            setProducts(data)
        })
    },[])

  return (
    <>
     <Typography variant='h4'>Products</Typography>
     <Box className="products">
       {
        products.map((item,index)=>{
            return(
                <>
               
            <Box
              className="each_item"
              key={item.id}>
                <img src={item.thumbnail} />
                <p className='product_title'>{item.title}</p>
                <p>{item.brand}</p>
                <p>Description {item.description}</p>
                <p>Rating {item.rating}</p>
                <p>Price {item.price}</p>

            </Box>
            </>
            )
        })
       }
       </Box>
    </>
  )
}
