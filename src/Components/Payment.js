import React from "react";
import Axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { baseURL } from "../util";

export default function Payment() {
  const navigate = useNavigate();

  const makePayment = (e) => {
    e.preventDefault();
    let id = localStorage.getItem("studentid");
    Axios.post(baseURL + `soldproduct.php/${id}`)
      .then(function (response) {
        console.log(response.data);
        navigate("/lastpage.html");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "green",
          color: "white",
          fontFamily:
            "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex" }}>
          <div>
            <h2 style={{ marginLeft: "20px" }}>
              <a href="home.html" style={{ fontSize: "100%", color: "white" }}>
                STUDENT<br></br>MARKETPLACE
              </a>
            </h2>
          </div>
        </div>
      </div>

      <div
        className="flex flex-wrap"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <form id="payment" style={{ marginTop: "20px" }} onSubmit={makePayment}>
          <div>
            <h2>Payment</h2>
            <table>
              <tr>
                <th>
                  <label for="cardname">Name on Card</label>
                </th>
                <td>
                  <input type="text" id="cardname" name="cardname" required />
                </td>
              </tr>

              <tr>
                <th>
                  <label for="cardnum">Card Number</label>
                </th>
                <td>
                  <input
                    type="text"
                    id="cardnum"
                    name="cardnumber"
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                    required
                  />
                </td>
              </tr>

              <tr>
                <th>
                  <label for="expiry">Expiry</label>
                </th>
                <td>
                  <input type="text" id="exp" placeholder="MM/YY" required />
                </td>
              </tr>

              <tr>
                <th>
                  <label for="cvv">CVV</label>
                </th>
                <td>
                  <input type="number" id="cvv" required />
                </td>
              </tr>
            </table>
            <br></br>
          </div>

          <div>
            <h2>Billing Address</h2>
            <table style={{ margin: "0px", padding: "0px" }}>
              <tr>
                <th>
                  <label for="name">Name</label>
                </th>
                <td>
                  <input type="text" id="name" />
                </td>
              </tr>

              <tr>
                <th>
                  <label for="email">E-Mail</label>
                </th>
                <td>
                  <input type="email" id="email" />
                </td>
              </tr>

              <tr>
                <th>
                  <label for="address">Address</label>
                </th>
                <td>
                  <input type="textarea" rows="4" cols="20" id="address" />
                </td>
              </tr>

              <tr>
                <th>
                  <label for="city">City</label>
                </th>
                <td>
                  <input type="text" id="city" />
                </td>
              </tr>

              <tr>
                <th>
                  <label for="state">State</label>
                </th>
                <td>
                  <input type="text" id="stabrte" />
                </td>
              </tr>

              <tr>
                <th>
                  <label for="zip">Zip code</label>
                </th>
                <td>
                  <input type="text" id="zip" />
                </td>
              </tr>
            </table>
            <br></br>

            <label>
              <input type="checkbox" defaultChecked name="shipping" /> Shipping
              address same as billing
            </label>
            <br></br>

            <button
              type="submit"
              id="paybutton"
              onClick={(e) => makePayment(e)}
            >
              Make Payment
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
