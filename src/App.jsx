import {Routes, Route} from "react-router-dom"
//import halaman
import LandingPage from "./pages//Customer/LandingPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/Customer/RegisterPage"
import HomePage from "./pages/Customer/HomePage"
import MeetingPage from "./pages/Customer/MeetingPage"
import EventPage from "./pages/Customer/EventPage"
import CospacePage from "./pages/Customer/CospacePage"
import PaymentPage from "./pages/Customer/PaymentPage"
import SuccesPage from "./pages/Customer/SuccesPage"
import OrderPage from "./pages/Customer/OrderPage"

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" Component={LandingPage}/>
        <Route path="/login"Component={LoginPage}/>
        <Route path="/register"Component={RegisterPage}/>
        <Route path="/home"Component={HomePage}/>
        <Route path="/meeting"Component={MeetingPage}/>
        <Route path="/event"Component={EventPage}/>
        <Route path="/coworking"Component={CospacePage}/>
        <Route path="/payment"Component={PaymentPage}/>
        <Route path="/success"Component={SuccesPage}/>
        <Route path="/order"Component={OrderPage}/>
      </Routes>
    </>
  )
}

export default App
