import React from 'react';
import Dropdown from 'react-dropdown';
import './style.scss';
import Input from '../Input';


class PopUp extends React.Component {


    render() {

const options = [
  'התעניינות באירוע', 'מבצעים שווים'
];
      return (
      <div styleName="container">
      <form styleName="parent">
          <Dropdown  options={options}    styleName="dropdown"   placeholder="נושא פניה" />
      <Input placeholder="שם פרטי  *" />
      <Input placeholder="מספר טלפון  *" />
      <Input placeholder="כתובת מייל" />

    <div styleName="note">  *שדות מילוי חובה</div>

      <button styleName="button">שלח</button>
      </form>
     </div>
        );

}

}
export default PopUp;
