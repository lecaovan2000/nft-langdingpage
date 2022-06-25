import {Link,animateScroll} from "react-scroll";
import InputSearch from "../InputSearch";
import { SearchOutlined } from '@ant-design/icons';
import SelectWallet from "../SelectButton";
function Header(){
   return(
      <div className="header">
         <div onClick={()=> animateScroll.scrollToTop() } className="logo">
            LangDingNFT
         </div>
          <div>
            <InputSearch icons={<SearchOutlined style={{color:'rgba(255, 255, 255, 0.5)' }} />} placeholder='Search items and collections' />
          </div>
          <div className="menu">
            <Link onClick={() => animateScroll.scrollTo(0)}  >Collection</Link>
            <Link onClick={() => animateScroll.scrollTo(700)}>Feature</Link>
            <Link onClick={() => animateScroll.scrollTo(1450)} >FAQ</Link>
            <SelectWallet text='Select Wallet' background='linear-gradient(214.02deg, #B75CFF 6.04%, #671AE4 92.95%)' />
          </div>
      </div>
   )
}export default Header;