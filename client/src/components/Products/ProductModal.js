import React from 'react'
import Modal from 'react-modal'

function ProductModal({isOpen,setIsOpen,product}) {
  return (
    <Modal  isOpen={isOpen} onRequestClose={()=>setIsOpen(false)} className="model-product" ariaHideApp={false}>
                <span className='icon-times' onClick={()=>setIsOpen(false)}>&times; </span>
                <div className="product-info">
                    <img src={product.imageUrl} alt={product.title} />
                    <p>{product.title }</p>
                    <p>{product.desc }</p>
                    <p>{product.price }$</p>
                </div>
             
            </Modal>
  )
}

export default ProductModal