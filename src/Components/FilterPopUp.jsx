import { useNavigate } from "react-router-dom";

const outerStyle = {
    position:'fixed',
    top:0,
    right:0,
    left:0,
    bottom:0,
    backgroundColor:'rgba(0,0,0,.7)',
    zIndex:1000
    
};
const popupStyle = {
    position:'fixed',
    top:'50%',
    left:'50%',
    transform:'translate(-50%,-50%)',
    backgroundColor:'rgba(0,0,150,0.3',
    padding:'50px',
    zIndex:1000

}
export default function FilterPopUp(){
    const nav = useNavigate()

    return(
        <>
        <div style={outerStyle}/>
        <div style={popupStyle}>
            <h2 onClick={()=> nav('/men')}>Men</h2>
            <h2 onClick={()=> nav('/women')}>Women</h2>
            <h2 onClick={()=> nav('/collection')}>Collection</h2>
            

        </div>
        </>
    )
}