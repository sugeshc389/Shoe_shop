import { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { footContext } from '../../Context';

export default function EditProduct() {
  const data = useContext(footContext);
  const { men } = data;

  const nav = useNavigate();
  const { id } = useParams();
  

  const filteredProduct = men.filter((item) => item.id === parseInt(id));
  

  const [editProduct, setEditProduct] = useState(filteredProduct[0]);

  console.warn(editProduct);

 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditProduct((prev) => {
      return { ...prev, [name]: value };
    });
   
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const index = men.findIndex((item) => item.id === parseInt(id));
    men[index] = editProduct;
    
    nav('/products');
  };

  return (
    <>
      <div className="auth-form">
        <h2>Edit Product</h2>
        <img
          style={{ width: '8rem', height: '8rem', marginLeft: '5rem' }}
          src={editProduct.Image}
          alt="Product"
        />
        <form>
          <div className="form-group">
            <label>Title:</label>
            <input
              className="inpt"
              type="text"
              name="Title"
              value={editProduct.Title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Category:</label>
            <input
              className="inpt"
              type="text"
              name="Category"
              value={editProduct.Category}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Gender:</label>
            <input
              className="inpt"
              type="text"
              name="Gender"
              value={editProduct.Gender}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Price:</label>
            <input
              className="inpt"
              type="number"
              name="Price"
              value={editProduct.Price}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Image URL:</label>
            <input
              className="inpt"
              type="text"
              name="Image"
              value={editProduct.Image}
              onChange={handleChange}
            />
          </div>
          <div>
            <button onClick={(e) => handleEdit(e)} type="submit">
              Update
            </button>
            <button type="button" onClick={() => nav('/products')}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
