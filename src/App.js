import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '~/pages/Home'
import Following from '~/pages/Following'
import { publicRoutes } from "~/routes";
import { DefaultLayout } from "./components/layout";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {
                        publicRoutes.map((route, index) =>{
                            let Layout = DefaultLayout
                            if(route.layout){
                                Layout=route.layout
                            }
                            else if(route.layout===null){
                                Layout=Fragment
                            }
                            const Pages=route.component // phai viet hoa chu cai dau tien

                            return (<Route path={route.path} element={
                                <Layout>
                                    <Pages></Pages>
                                </Layout>
                            }></Route>)
                        })
                    }
                </Routes>
            </div>
        </Router>
    );
}

export default App;
