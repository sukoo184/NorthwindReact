import React from 'react'
import TextInput from '../toolbox/TextInput'

const ProductDetail = (categories, product, onSave, onChange, value) => {
  return (
    <form onSubmit={onSave}>
      <h1>{product.id ? 'Güncelle' : 'Ekle'}</h1>
      <TextInput
        name="productName"
        label="Product Name"
        value={product.productName}
        onChange={onChange}
        error="Hata"
      />

      <button type="submit" className="btn btn-success">
        Save
      </button>
    </form>
  )
}

export default ProductDetail()
