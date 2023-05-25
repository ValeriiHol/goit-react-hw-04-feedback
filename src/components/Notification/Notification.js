import PropTypes from 'prop-types';
import css from '../Notification/Notification.module.css'


function Notification({ message }) {
    return (
        <p className={css.message}>{ message }</p> 
    )
}

Notification.prototype = {
    message: PropTypes.string, 
}


export default Notification ;