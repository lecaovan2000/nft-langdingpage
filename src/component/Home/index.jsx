import InfoCard from "../InfoCard";
import SelectButton from "../SelectButton";

function Home(){
   return(
      <div className="home">
         <div className="content">
           <div className="content__hero">
            <div className="left">
               <h3>Create, Sell & <br/> Collect Your Own <br/> Creative NFT</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Nunc vulputate libero et velit.</p>
               <div className="group__btn">
                  <SelectButton text='Explore Now' width='200px' background='linear-gradient(214.02deg, #B75CFF 6.04%, #671AE4 92.95%)' marginRight='30px' />
                  <SelectButton text='Sell NFT' width='150px' background='rgba(255, 255, 255, 0.1)' />
               </div>
               <div>
                  <InfoCard/>
               </div>
            </div>

            <div className="right"><h1>menu right</h1></div>
           </div>
         </div>
      </div>
   )
}
export default Home;