import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import styles from './AccountItem.module.scss'

const cx=classNames.bind(styles)
function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJwDaV4oY36eLixhpUJvrpf9TChRzQD5uYUOOKbAqWQ&s"></img>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen van a</span>
                    <FontAwesomeIcon icon ={faCheckCircle} className={cx('check')}></FontAwesomeIcon>
                </h4>
                <span className={cx('username')}>nguyen van a</span>
            </div>
        </div>
     );
}

export default AccountItem;