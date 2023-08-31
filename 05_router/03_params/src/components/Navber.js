import {NavLink} from 'react-router-dom';


function Navber(){
    const activeStyle ={
        backgrounderColor : 'purple',
        color : 'red'
    }

    return(
        <div>
            <ul>
                <li>
                    <NavLink to="/main" style={
                        (isActive)=>
                        isActive ? activeStyle : null
                    }>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" style={
                        (isActive)=>
                        isActive ? activeStyle : null
                    }>소개</NavLink>
                </li>
                <li>
                    <NavLink to="/menu" style={
                        (isActive)=>
                        isActive ? activeStyle : null
                    }>메뉴목록</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navber;