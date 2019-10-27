import React from 'react';
import './style.scss';


class PopUp extends React.Component {


render() {
    return (
      <div>
     Enter Your Info
     <form> Full Name: <input type="text"/>
           E-mail: <input type="text"/>
           <button styleName="button">Submit</button>
     </form>
     </div>
        );

}

}
export default PopUp;
