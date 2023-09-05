import AboutUs from "./Components/AboutUs";
import AddProduct from "./Components/AddProduct";
import BusinessOwner from "./Components/BusinessOwner";
import Cart from "./Components/Cart";
import ContactUs from "./Components/ContactUs";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import LastPage from "./Components/LastPage";
import ManageProduct from "./Components/ManageProduct";
import Payment from "./Components/Payment";
import Register from "./Components/Register";
import RemoveProduct from "./Components/RemoveProduct";
import SchoolAdmin from "./Components/SchoolAdmin";
import ServiceAfterLogin from "./Components/ServiceAfterLogin";
import Services from "./Components/Services";
import Student1 from "./Components/Student1";
import SuperAdmin from "./Components/SuperAdmin";
import "./css/chatbox.css";
import "./css/index.css";
import "./css/tp.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import GenerateReport from "./Components/GenerateReport";
import DataTemplate from "./Components/DataTemplate";
import ManageStudents from "./Components/ManageStudents";
import ManageBusinessOwner from "./Components/ManageBusinessOwner";
import ManageSchoolAdmin from "./Components/ManageSchoolAdmin";
import ManagePosts from "./Components/ManagePosts";
import EditStudent from "./Components/EditStudent";
import ForgotPassword from "./Components/ForgotPassword";
import Advertisement from "./Components/Advertisement";
import Advertisement1 from "./Components/Advertisement1";
import DeleteAdvertisement1 from "./Components/DeleteAdvertisement1";
import PostAdvertisement from "./Components/PostAdvertisement";
import JoinClub from "./Components/JoinClub";
import LeaveClub from "./Components/LeaveClub";
import AddClub from "./Components/AddClub";
import DeleteClub from "./Components/DeleteClub";
import JoinedClub from "./Components/JoinedClub";
import { useEffect, useState } from "react";
import EditProfile from "./Components/EditProfile";
import ReturnProducts from "./Components/ReturnProducts";
import PastOrders from "./Components/PastOrders";

function App() {

  const [role, setRole] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")).role
      : 0
  );

  const updateRoute = () => {
    setRole(
      localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user")).role
        : 0
    );
  };

  // const navigate = useNavigate();


  // useEffect(() => {
  //   console.log("history")
  // }, [navigate])
  
  console.log(role);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login.html" element={<Login update={updateRoute} />} />
          <Route path="/register.html" element={<Register />} />
          <Route path="/forgotpassword.html" element={<ForgotPassword />} />
          <Route path="/home.html" element={<Home />} />
          

          {/* Student: */}
          {parseInt(role) === 1 ? (
             <> 
              <Route path="/" element={<Home />} />
              <Route path="/header.html" element={<Header />} />
              <Route path="/aboutus.html" element={<AboutUs />} />
              <Route path="/contactus.html" element={<ContactUs />} />
              <Route path="/services.html" element={<Services />} />
              <Route path="/cart.html" element={<Cart />} />
              <Route path="/lastpage.html" element={<LastPage />} />
              <Route path="/payment.html" element={<Payment />} />
              <Route path="/editprofile.html" element={<EditProfile />} />
              <Route
                path="/service_afterlogin.html"
                element={<ServiceAfterLogin />}
              />
              <Route path="/student1.html" element={<Student1 />} />

              <Route
                path="/postadvertisement.html"
                element={<PostAdvertisement />}
              />
              <Route path="/joinclub.html" element={<JoinClub />} />
              <Route path="/leaveclub.html" element={<LeaveClub />} />
              <Route path="/joinedclub.html" element={<JoinedClub />} />
              <Route path="/returnproducts.html" element={<ReturnProducts />} />
              <Route path="/pastorders.html" element={<PastOrders />} />
            </>
          ) : null}

          {/* BusinessOwner: */}
          {parseInt(role) === 2 ? (
            <>
              <Route path="/addproduct.html" element={<AddProduct />} />
              <Route path="/businessowner.html" element={<BusinessOwner />} />
              <Route path="/manageproduct.html" element={<ManageProduct />} />
              <Route path="/removeproduct.html" element={<RemoveProduct />} />
              <Route path="/advertisement.html" element={<Advertisement />} />
              <Route path="/advertisement1.html" element={<Advertisement1 />} />
              <Route
                path="/deleteadvertisement1.html"
                element={<DeleteAdvertisement1 />}
              />
            </>
          ) : null}

          {/* School Admin: */}
          {parseInt(role) === 3 ? (
            <>
              <Route path="/schooladmin.html" element={<SchoolAdmin />} />
              <Route path="/datatemplate.html" element={<DataTemplate />} />
              <Route path="/manageposts.html" element={<ManagePosts />} />
              <Route path="/addclub.html" element={<AddClub />} />
              <Route path="/deleteclub.html" element={<DeleteClub />} />
              <Route path="/generatereport.html" element={<GenerateReport />} />
            </>
          ) : null}

          {/* Super admin: */}
          {parseInt(role) === 4 ? (
            <> 
              <Route path="/superadmin.html" element={<SuperAdmin />} />
              <Route
                path="/manageschooladmin.html"
                element={<ManageSchoolAdmin />}
              />
            </>
          ) : null}
          {/* Both */}
          {parseInt(role) === 2 || parseInt(role) === 3 || parseInt(role)===4 ? (
            <>
              <Route path="/managestudents.html" element={<ManageStudents />} />
              <Route
                path="/managebusinessowner.html"
                element={<ManageBusinessOwner />}
              />
              <Route path="/editstudent.html/:id" element={<EditStudent />} />
              <Route path="/editstudent.html" element={<EditStudent />} />
            </>
          ) : null}
          <Route path="*" element={<Navigate to="/login.html" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
