import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Switch from "./components/Switch";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  console.log(switch1);
  console.log(switch2);
  console.log(switch3);

  return (
    <>
      <div>
        <header>
          <div>
            <i
              className="fa-solid fa-shuttle-space"
              style={{ color: "#5c49d3" }}
            ></i>
            <h1>Ready to go</h1>
          </div>
        </header>
        <main className="container">
          <div>
            <div>
              <button
                onClick={() => {
                  setSwitch1(true);
                }}
                className={switch1 ? "selected" : ""}
              >
                On
              </button>
              <button
                onClick={() => {
                  setSwitch1(false);
                }}
                className={switch1 ? "" : "selected"}
              >
                Off
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  setSwitch2(true);
                }}
                className={switch2 ? "selected" : ""}
              >
                On
              </button>
              <button
                onClick={() => {
                  setSwitch2(false);
                }}
                className={switch2 ? "" : "selected"}
              >
                Off
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  setSwitch3(true);
                }}
                className={switch3 ? "selected" : ""}
              >
                On
              </button>
              <button
                onClick={() => {
                  setSwitch3(false);
                }}
                className={switch3 ? "" : "selected"}
              >
                Off
              </button>
            </div>
          </div>
          <button
            className={
              switch1 && switch2 && switch3 ? "greenLight" : "redLight"
            }
          >
            {switch1 && switch2 && switch3 ? "Go!" : "No way"}
          </button>
        </main>

        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
