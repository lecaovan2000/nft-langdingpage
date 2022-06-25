import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
function InputSearch(props){
   const{placeholder, icons}=props
   return(
      <div className='inputSearch'>
         <Input placeholder={placeholder} prefix={icons} />
      </div>
   )
}
export default InputSearch