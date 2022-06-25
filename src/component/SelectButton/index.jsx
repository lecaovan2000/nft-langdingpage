import './style.scss'
function SelectButton(props){
   return(
      <div className='btn-selectWallet' 
      style={{
         background:props.background,
         width:props.width,
         marginRight:props.marginRight
      }}
      >
         <button>{props.text}</button>
      </div>
   )
}export default SelectButton;