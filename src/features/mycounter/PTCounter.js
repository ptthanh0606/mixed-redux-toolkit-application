import React from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, ptCountSelector } from "./PTCounterSlice";

const PTCounter = () => {
  const dispatch = useDispatch();
  const ptcount = useSelector(ptCountSelector);

  const handleDecrease = React.useCallback(() => {
    dispatch(decrease());
  }, [dispatch]);

  const handleIncrease = React.useCallback(() => {
    dispatch(increase());
  }, [dispatch]);

  // -------------------------------------------------------------------------

  return (
    <Container
      className="d-flex justify-content-center align-items-center flex-column"
      style={{ height: "100vh" }}
    >
      <h2>Welcome to my counter redux toolkit playground</h2>
      <span>Increase or decrease this value to test</span>
      <div className="mt-5 d-flex align-items-center justify-content-center">
        <Button
          onClick={handleDecrease}
          style={{ fontSize: "22px", height: '48px', width: '48px', textAlign: 'center' }}
        >
          -
        </Button>
        <h1 className="mx-5 text-primary" style={{ fontSize: "5rem" }}>
          {ptcount}
        </h1>
        <Button
          onClick={handleIncrease}
          style={{ fontSize: "22px", height: '48px', width: '48px', textAlign: 'center' }}
        >
          +
        </Button>
      </div>
    </Container>
  );
};

export default React.memo(PTCounter);
