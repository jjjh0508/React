import {useEffect, useState }  from 'react';
import MenuItem from "../components/MenuItem";
import boxStyle from "./Menu.module.css"
import {useNavigate} from 'react-router-dom'
import { getMenuList } from '../api/MenuApi';

function Menu(){
    const [menuList, setMenuList] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        setMenuList(getMenuList())
    },[])

    const onClickHandler = () =>{
        navigate(`/menu/search?menuName=${searchValue}`);
        /*navigate location.href 새로고침이 일어나지 않음*/
    }

    return(
        <>
            <h1>판매 메뉴 목록</h1>
            <div>
                <input type="search" name='menuName' onChange={e=> setSearchValue(e.target.value)}/>
                <button onClick ={onClickHandler}>검색</button>
            </div>
            <div className={boxStyle.MenuBox}>
                {menuList.map((menu)=>
                    <MenuItem key={menu.menuCode} menu={menu}/>
                )}
            </div>
        </>
    )

}

export default Menu;