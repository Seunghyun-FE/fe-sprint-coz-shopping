import { Link } from "react-router-dom";

const DropdownMenu  = ({handleToggle}) => {

    return (
        <div>
            <ul>
                <li>OOO, 안녕</li>
                
                <li onClick={handleToggle}>
                    <Link to = "/products/list">상품리스트 페이지</Link>
                </li>

                <li onclick={handleToggle}>
                    <Link to = "/bookmark">북마크 페이지</Link>
                </li>

            </ul>
        </div>
    );

};

export default DropdownMenu;