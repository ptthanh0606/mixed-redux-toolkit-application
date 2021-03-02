import React from "react";
import { Button, Card } from "react-bootstrap";
import { makeAvatar } from "../_helper";

const UserCard = ({
  info = {},
  onUpdate = () => {},
  onRemove = () => {},
  ...props
}) => {
  const handleUpdateUser = React.useCallback(() => {
    onUpdate(info.id);
  }, [info.id, onUpdate]);

  const handleRemoveUser = React.useCallback(() => {
    onRemove(info.id);
  }, [info, onRemove]);

  return (
    <Card {...props}>
      <Card.Img src={makeAvatar(info.userEmail)} />
      <Card.Header>
        [{info.id}] {info.userName}
      </Card.Header>
      <Card.Body>
        Current age of {info.userAge}
        <br />
        <div className="button-sections mt-3">
          <Button
            onClick={handleUpdateUser}
            variant="outline-primary"
            className="mr-2"
          >
            Update
          </Button>
          <Button onClick={handleRemoveUser} variant="outline-danger">
            Remove
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default React.memo(UserCard);
