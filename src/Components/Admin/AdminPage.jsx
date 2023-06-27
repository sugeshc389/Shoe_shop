import { useContext } from "react"
import { footContext } from "../../Context"

export default function AdminPage(){
    const data = useContext(footContext)
    // const {password} = userContext;
    // const [user] = password;
    console.log(data);
    return(
        <>
       <h3>Name</h3>
       <h3>Email</h3>
       <h3>Password</h3>
        </>
    )
}