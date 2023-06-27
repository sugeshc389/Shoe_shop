
import { useContext } from 'react'
import './Products.css';
import { footContext } from '../../Context'
import { useNavigate } from 'react-router-dom';

export default function Products() {
    const data = useContext(footContext);
    const { addProduct, men } = data
    console.log('oldArray:', men);
    console.log('newArray:', addProduct);
    const allProducts = [...men, ...addProduct]
    const nav = useNavigate()

    return (
        <>
        <div>
            <button onClick={()=>nav('/addProducts')}>Add Product</button>
        </div>
            {
                allProducts.map((item, index) => {
                    return (
                        <div key={index}>


                            <table>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Category</th>
                                        <th>Gender</th>
                                        <th>Price</th>
                                        <th>Id</th>
                                        <th>Image</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{item.Title}</td>
                                        <td>{item.Category}</td>
                                        <td>{item.Gender}</td>
                                        <td>{item.Price}</td>
                                        <td>{item.id}</td>
                                        <td><img style={{width:'8rem',height:'8rem'}} src={item.Image}/></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )
                })
            }
        </>
    )
}