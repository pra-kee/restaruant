/* import UserCard from "./UserCard";
import QrCode from "./qr-Code"; 
import NewState from "./usestate";*/
import Advice from "./Advice";
import Details from "./Details";
import UserCard from "./UserCard";
function Props () {
    return(
        <div>
               {/*  <Student Name="Prakash" Age={21} Married = {true}/>
                <Student Name="Keerthika" Age={19} Married = {false}/>
                <Student Name="Akashiya" Age={18} Married = {false}/> 
                <Student />  */}
                <UserCard name="KEERTHIKA" place="Chennai" role="Front-End Developer" img="pic-2.png" skills={["Html","css","Javascript","prakash","keerthika"]} online={true}/>
                {/* <QrCode/> */}
                <UserCard name="KEERTHIKA" place="Chennai" role="Front-End Developer" img="pic-2.png" skills={["Html","css","Javascript","prakash","keerthika"]} online={true}/>
                {/* <QrCode/> */}
                <UserCard name="KEERTHIKA" place="Chennai" role="Front-End Developer" img="pic-2.png" skills={["Html","css","Javascript","prakash","keerthika"]} online={false}/>
                {/* <QrCode/> */}
                {/* <NewState/> */}
                {/* <Details/>  */}
                 
        </div>
        
    )

}

export default Props;