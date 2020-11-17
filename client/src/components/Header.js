import {Heading} from "../StyledComponents/StyledHeader";
import {Link,useHistory} from "react-router-dom";


const Header = () => {
    const history = useHistory();
    return (
        <Heading>
            <div className="logo"><h2 onClick={()=>{history.push('/homefeed')}}>ExpatJournal</h2></div>
            <div className="icons">
                <div>
                
                <Link to = "/homefeed"><span><i className={`fa fa-home`}></i></span></Link>
                </div>
                <div>
                <span>Log out&nbsp;
                <Link to = "/"><i className={`fa fa-sign-out`}></i></Link>
                
                </span>  
                </div>
            </div>
        </Heading>
    )
}

export default Header;