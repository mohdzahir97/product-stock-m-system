import React,{useEffect} from 'react'
import axios  from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
const DeleteProductData = () => {


  useEffect(() => {
   DeleteProductData()
  }, [])

 const {id}= useParams()
 const Navigate=useNavigate()


  const DeleteProductData=async ()=>{
    try {
      const response=await axios.delete(`/product/${id}`)
      if (response.data.success) {
        Navigate("/getallproduct")
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='text-center mt-5'>
        <h1>Loading...</h1>
    </div>
  )
}

export default DeleteProductData