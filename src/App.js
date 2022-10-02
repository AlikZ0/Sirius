import {ROUTER_NAMES} from "./routers";
import { Route, Routes} from "react-router-dom";

import HeaderComponents from "./components/login"
import Products   from "./components/products"
import UserProfile from "./components/products/userprofile"

function App() {

  return (
    <div >
      


       <Routes>
              <Route path={ROUTER_NAMES.LOGIN} element={<HeaderComponents/>}></Route>
              <Route path={ROUTER_NAMES.PRODUCTS} element={<Products/>}></Route>
               <Route path={ROUTER_NAMES.GET_LIST} element={<UserProfile/>}></Route>
            </Routes>
    </div>
  );
}

export default App;
