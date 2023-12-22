import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* {<StarRating maxRating={5} defaultRating={3} />}
    <StarRating maxRating={3} color="red" size={30} messages={["bad", "good", "best"]} />
    <Temp/> */}
  </React.StrictMode>
);
function Temp() {
  const [rating, setRating] = useState(0);
  return <div>
    <StarRating color="blue" onSetRating={setRating} />
    <p>given {rating }</p>
  </div>
}
