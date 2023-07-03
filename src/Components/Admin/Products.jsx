import { useContext } from 'react';
import './Products.css';
import { footContext } from '../../Context';
import { useNavigate } from 'react-router-dom';

export default function Products() {
  const data = useContext(footContext);
  const { addProduct, men } = data;
  const allProducts = [...men, ...addProduct];
  const nav = useNavigate();
  

  // State to keep track of the item being edited
  //   const [editItem, setEditItem] = useState(null);

  // Function to handle editing an item
  //   const handleEdit = (item) => {
  //     setEditItem(item);
  //     nav(`/editProduct/${item.id}`); // Navigate to the edit product page
  //   };

  return (
    <>
      <div>
        <button onClick={() => nav('/addProducts')}>Add Product</button>
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Gender</th>
              <th>Price</th>
              <th>Id</th>
              <th>Image</th>
              <th>Delete/Update</th>
            </tr>
          </thead>
          <tbody>
            {allProducts.map((item, index) => (
              <tr key={index}>
                <td>{item.Title}</td>
                <td>{item.Category}</td>
                <td>{item.Gender}</td>
                <td>{item.Price}</td>
                <td>{item.id}</td>
                <td>
                  <img style={{ width: '8rem', height: '8rem' }} src={item.Image} alt="Product" />
                </td>
                <td>

                  <button onClick={() => nav(`/editProduct/${item.id}`)}>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
