import React from "react";
import { Button } from "react-bootstrap";
import CRUDUsers from "./features/crudusers/CRUDUsers";
import PTCounter from "./features/mycounter/PTCounter";
import { FiArrowUp } from "react-icons/fi";
import { ToastContainer } from "react-toastify";

import "./App.scss";

function App() {
  React.useEffect(() => {}, []);

  return (
    <div className="app-wrapper">
      <div className="features-wrapper">
        <PTCounter />
        <CRUDUsers />
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Button
        onClick={() => window.scrollTo(0, 0)}
        variant="outline-primary"
        className="scroll-to-top-button"
      >
        <FiArrowUp size="20px" />
      </Button>
    </div>
  );
}

export default App;
