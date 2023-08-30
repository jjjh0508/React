import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

function Navber() {
    const [number, setNumber] = useState(0);
    const activeStyle = {
        backgroundColor: 'blue' ,
        // fontColor : 'red',
        color : 'red' 
    }
    const onClick = () => {
        setNumber(number + 1);
    }
    return (
        <>
            {
                // <div>
                //     <ul>
                //         <li><a href={"/"}>Home</a></li>
                //         <li><a href={"/mypage"}>마이페이즈</a></li>
                //         <li><a href={"/login"}>로그인</a></li>
                //     </ul>

                // </div>

                //     <div>
                //     <ul>
                //         <li><Link to="/home"></Link> Home</li>
                //         <li><Link to="/mypage"></Link> 마이페이즈</li>
                //         <li><Link to="/login"></Link> 로그인</li>
                //     </ul>
                // </div>
            }

            <div>
                <ul>
                    <li>
                        <NavLink to="/" style={({isActive})=>isActive ?  activeStyle : undefined }>
                        Home
                        </NavLink> 
                    </li>
                    <li>
                        <NavLink to="/mypage" style={({isActive})=> isActive ? activeStyle : undefined}>
                        마이페이즈
                        </NavLink> 
                    </li>
                    <li>
                        <NavLink to="/login" style={({isActive})=> isActive ? activeStyle : undefined}>
                        로그인
                        </NavLink> 
                    </li>
                </ul>
            </div>

            <p>{number}</p>
            <button onClick={onClick}>state 테스트</button>
        </>
    )
}

export default Navber;