import { useContext } from "react"
import { footContext } from "../../Context"
import './Users.css'

export default function Users() {
    const data = useContext(footContext)
    const { password } = data
    
    return (
        <>
            <h1 className="users">Users</h1>

            <table >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>

                    </tr>
                </thead>

                {password.map((item, index) => {
                    return (
                        <tbody key={index}>

                            <tr>
                                <td>{item.Name}</td>
                                <td>{item.Email}</td>
                                <td>{item.Password}</td>


                            </tr>
                        </tbody>
                    )
                })}

            </table>

        </>
    )
}