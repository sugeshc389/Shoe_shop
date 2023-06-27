import { useContext, useEffect, useRef } from 'react'
// import './Addproducts.css'
import { useNavigate } from 'react-router-dom'
import { footContext } from '../../Context'

export default function AddProducts(){

    const inputref = useRef(null)
    const data = useContext(footContext)
    const {addProduct,setAddProduct} = data;
    const nav =useNavigate()
    useEffect(()=>{
console.log(addProduct);
    },[addProduct])
    const handleSubmit = (e)=>{
        e.preventDefault();
        const Title = inputref.current.Title.value
        const Category = inputref.current.Category.value
        const Gender = inputref.current.Gender.value
        const Price = inputref.current.Price.value
        const id = inputref.current.id.value
        const Image = inputref.current.Image.value
        setAddProduct([{Title,Category,Gender,Price,id,Image}])
        


        nav('/products')

    }
    return(
        <>
        <div className="auth-form">
                <h2>Add Product</h2>
                <form ref={inputref} onSubmit={handleSubmit} >
                    <div className="form-group">
                        <label htmlFor="password">Title:</label>
                        <input
                            className="inpt"
                            name="Title"
                            type="text"
                            id="Title"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Category:</label>
                        <input
                            className="inpt"
                            name="Category"
                            type="text"
                            id="Category"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Gender:</label>
                        <input
                            className="inpt"
                            name="Gender"
                            type="text"
                            id="Gender"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Price:</label>
                        <input
                            className="inpt"
                            name="Price"
                            type="number"
                            id="Price"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Id:</label>
                        <input
                            className="inpt"
                            name="id"
                            type="number"
                            id="id"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Image</label>
                        <input
                            className="inpt"
                            name="Image"
                            type="text"
                            id="Image"
                            required
                        />
                    </div>
                    <button type="submit">Add Product</button>
                    <div className="toggle-link">

                    </div>
                </form>
            </div>
        </>
    )
}