import {Link} from 'react-router-dom';
import {useState}  from 'react';
function Navber(){
    const [number, setNumber] = useState(0);
    const onClick = ()=>{
        setNumber(number+1);
    }
    return(
        <div>
            <ul>
                <li><a href={"/"}>Home</a></li>
                <li><a href={"/mypage"}>마이페이즈</a></li>
                <li><a href={"/login"}>로그인</a></li>
                
            </ul>
            <p>{number}</p>
            <button onClick={onClick}>state 테스트</button>
        </div>
    )
}

export default Navber;