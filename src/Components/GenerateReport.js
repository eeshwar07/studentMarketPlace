import React from "react";
import Report from "../assets/images/report.png";
import Uta from "../assets/images/uta.jpg";
import Marketplace from "../assets/images/marketplace.png";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { baseURL } from "../util";
import Axios from "axios";
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function GenerateReport() {
  const id = parseInt(JSON.parse(localStorage.getItem("user")).id);
  const [data1Advertisement, setData1] = useState([]);
  const [data2Product, setData2] = useState([]);
  const [data3Club, setData3] = useState([]);
  const [data4Student, setData4] = useState([]);
  const [data5BusinessOwner, setData5] = useState([]);
  const [data6SchoolAdmin, setData6] = useState([]);
  const [data7SuperUser, setData7] = useState([]);
  const [data8ProductsSold, setData8] = useState([]);
  const [totalValue, setTotalValue] = useState(0);

  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }


  const data1 = {
    labels: ["Student", "Business Owner", "School Admin", "Super Admin"],
    datasets: [
      {
        label: "Users Comparison",
        data: [
          data4Student.length,
          data5BusinessOwner.length,
          data6SchoolAdmin.length,
          data7SuperUser.length,
        ],
        backgroundColor: "rgba(46, 204, 113)",
      },
    ],
  };

  const data2 = {
    labels: ["Total Available Products", "Products Sold"],
    datasets: [
      {
        label: "Products Available Vs. Products Sold",
        data: [data2Product.length, data8ProductsSold.length],
        backgroundColor: "rgba(46, 204, 113)",
      },
    ],
  };

  const data3 = {
    labels: ["Total Clubs", "Total Advertisements"],
    datasets: [
      {
        label: "Total Clubs Vs. Total Advertisements",
        data: [data3Club.length, data1Advertisement.length],
        backgroundColor: "rgba(46, 204, 113)",
      },
    ],
  };
  const options1 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Total Users",
      },
    },
  };
  const options2 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Products Comparison",
      },
    },
  };
  const options3 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Clubs and Advertisements",
      },
    },
  };

  useEffect(() => {
    getData1();
    getData2();
    getData3();
    getData4();
    getData5();
    getData6();
    getData7();
    getData8();
  }, []);

  //   console.log(
  //     data1Advertisement,
  //     data2Product,
  //     data3Club,
  //     data4Student,
  //     data5BusinessOwner,
  //     data6SchoolAdmin,
  //     data7SuperUser,
  //     data8ProductsSold
  //   );

  const getData1 = () => {
    Axios.get(baseURL + `advertisement`)
      .then(function (response) {
        if (response.data)
          if (response.data.length > 0) setData1(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const getData2 = () => {
    Axios.get(baseURL + `getproduct`)
      .then(function (response) {
        if (response.data)
          if (response.data.length > 0) setData2(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const getData3 = () => {
    Axios.get(baseURL + `joinclub`)
      .then(function (response) {
        if (response.data)
          if (response.data.length > 0) setData3(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const getData4 = () => {
    Axios.get(baseURL + `managestudents`)
      .then(function (response) {
        if (response.data)
          if (response.data.length > 0) setData4(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const getData5 = () => {
    Axios.get(baseURL + `managebusinessowner`)
      .then(function (response) {
        if (response.data)
          if (response.data.length > 0) setData5(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const getData6 = () => {
    Axios.get(baseURL + `manageschooladmin`)
      .then(function (response) {
        if (response.data)
          if (response.data.length > 0) setData6(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const getData7 = () => {
    Axios.get(baseURL + `managesuperadmin`)
      .then(function (response) {
        if (response.data)
          if (response.data.length > 0) setData7(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const getData8 = () => {
    Axios.get(baseURL + `viewsolditems1`)
      .then(function (response) {
        console.log(response);
        if (response.data)
          if (response.data.length > 0) {
            let total = 0;
            console.log(response.data);
            response.data.map((ele, ind) => {
              total += ele.price;
              console.log(ele.price);
            });
            setTotalValue(total);
            setData8(response.data);
          }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div align="center">
        <img
          className="logo"
          src={Uta}
          alt="Student clubs"
          width="300px"
          height="100px"
        />
        <img
          className="logo"
          src={Marketplace}
          alt="Student clubs"
          width="300px"
          height="100px"
        />
        <div>
          <button style={{ backgroundColor: "black" }}>
            <a
              href="login.html"
              onClick={() => localStorage.removeItem("user")}
              style={{ color: "white" }}
            >
              Logout
            </a>
          </button>
        </div>
      </div>

      <div className="owner">
        <button style={{ margin: "10px 10px" }}>
          <a style={{ color: "aliceblue" }} href="managestudents.html">
            Manage students
          </a>
        </button>
        <button style={{ margin: "10px 10px" }}>
          <a style={{ color: "aliceblue" }} href="managebusinessowner.html">
            Manage business owner
          </a>
        </button>
        <button style={{ margin: "10px 10px" }}>
          <a style={{ color: "aliceblue" }} href="generatereport.html">
            Generate reports
          </a>
        </button>
        <button style={{ margin: "10px 10px" }}>
          <a style={{ color: "aliceblue" }} href="manageposts.html">
            Manage Posts
          </a>
        </button>
        <button style={{ margin: "10px 10px" }}>
          <a style={{ color: "aliceblue" }} href="datatemplate.html">
            Manage Clubs
          </a>
        </button>
      </div>

      <div>
        <div
          className="Heading"
          style={{
            fontSize: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
        <h1>Users</h1>
        </div>
        <div className="report-page-layout">
          <div className="report-box-layout">
            <div className="report-page-text" style={{ fontSize: "20px" }}>
              <b>Total Number of Students:</b> {data4Student.length}
            </div>
            <div className="report-page-text" style={{ fontSize: "20px" }}>
              <b>Total Number of Business Owners:</b>{" "}
              {data5BusinessOwner.length}
            </div>
            <div className="report-page-text" style={{ fontSize: "20px" }}>
              <b>Total Number of School Admins:</b> {data6SchoolAdmin.length}
            </div>
            <div className="report-page-text" style={{ fontSize: "20px" }}>
              <b>Total Number of Super Admins:</b> {data7SuperUser.length}
            </div>
            <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <div
            style={{
              width:'70%'
            }}>
              <Bar options={options1} data={data1} />
            </div>
          </div>
          </div>
          <br></br>

          <div
          className="Heading"
          style={{
            fontSize: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
        <h1>Products</h1>
        </div>
          <div className="report-box-layout">
            <div className="report-page-text" style={{ fontSize: "20px" }}>
              <b>Total Number of Available Products:</b> {data2Product.length}
            </div>
            <div className="report-page-text" style={{ fontSize: "20px" }}>
            <b>Total Number of Products Sold:</b> {data8ProductsSold.length}
            </div>
            <div className="report-page-text" style={{ fontSize: "20px" }}>
            <b>Total Value of Products Sold:</b> ${totalValue.toFixed(2)}
            </div>
            <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <div
               style={{
                width:'70%'
              }}>
            <Bar options={options2} data={data2} />
            </div>
            </div>
          </div>
          <br></br>

          <div
          className="Heading"
          style={{
            fontSize: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
        <h1>Clubs vs Advertisements</h1>
        </div>
          <div className="report-box-layout">
            <div className="report-page-text" style={{ fontSize: "20px" }}>
            <b>Total Number of Clubs:</b> {data3Club.length}
            </div>
            <div className="report-page-text" style={{ fontSize: "20px" }}>
            <b>Total Number of Advertisements:</b> {data1Advertisement.length}
            </div>
            <div
             style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <div
              style={{
                width:'70%'
              }}>
            <Bar options={options3} data={data3} />
            </div>
            </div>
          </div>
        </div>
      </div>

      <button className="open-button" onClick={() =>openForm()}>Chat</button>
      <div className="chat-popup" id="myForm">
        <form action="/action_page" className="form-container">
          <h1>Chat</h1>

          <label for="msg">
            <b>Message</b>
          </label>
          <textarea placeholder="Type message.." name="msg" required></textarea>

          <button type="submit" className="btn">
            Send
          </button>
          <button type="button" className="btn cancel" onClick={() =>closeForm()}>
            Close
          </button>
        </form>
      </div>
    </>
  );
}
