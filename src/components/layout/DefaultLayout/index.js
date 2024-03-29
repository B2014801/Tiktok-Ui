import Header from "~/components/layout/components/Header";
import SideBar from "./SideBar";
import style from './DefaultLayout.module.scss';
import classNames from "classnames/bind";

const cx=classNames.bind(style)

function DefaultLayout({children}) {
    return ( 
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx("container")}>
                <SideBar></SideBar>
                <div className={cx("content")}>
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;