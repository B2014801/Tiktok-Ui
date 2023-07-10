import Header from "~/components/layout/components/Header";
import SideBar from "./SideBar";

function DefaultLayout({children}) {
    return ( 
        <div>
            <Header />
            <div className="container">
                <SideBar></SideBar>
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;