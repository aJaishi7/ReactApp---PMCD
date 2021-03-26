import {Component} from "react";
import {SocialIcon} from "react-social-icons";

class IconSocial extends Component{
    render() {
        return (
            <div>
                <p>
                    {<SocialIcon url={'https://twitter.com/jaketrent'} style={{height:"30px", width:'30px', marginRight:'2px'}}/>  }
                    {<SocialIcon url={'https://facebook.com/jaketrent'} style={{height:"30px", width:'30px' , marginRight:'2px'}}/> }
                    {<SocialIcon url={'https://instagram.com/jaketrent'} style={{height:"30px", width:'30px' , marginRight:'2px'}}/> }
                </p>

            </div>
        );
    }
}

export default IconSocial;