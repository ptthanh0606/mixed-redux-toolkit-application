import React from "react";

import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import UserCard from "./components/UserCard";
import UsersForm from "./components/UsersForm";

import "./CRUDUsers.scss";
import {
  addUser,
  removeUser,
  updateUser,
  userSelector,
} from "./slices/userSlice";

const CRUDUsers = () => {
  const userList = useSelector(userSelector);
  const dispatch = useDispatch();

  const [isShowAddModal, setShowAddModal] = React.useState(false);
  const [isShowUpdateModal, setShowUpdateModal] = React.useState(false);
  const [formData, setFormData] = React.useState({});

  const [selectedId, setSelectedId] = React.useState(0);

  const handleShowAddUser = React.useCallback(() => {
    setShowAddModal(true);
  }, []);

  const handleShowUpdateModal = React.useCallback((id) => {
    setShowUpdateModal(true);
    setSelectedId(id);
  }, []);

  const handleSubmitFormAdd = React.useCallback(
    (data) => {
      data = {
        ...data,
        id: userList.length
          ? userList.map((user) => user.id).sort((a, b) => b - a)[0] + 1
          : 1,
      };
      dispatch(addUser(data));
      setShowAddModal(false);
      toast.success("Added!");
    },
    [dispatch, userList]
  );

  const handleSubmitFormUpdate = React.useCallback(
    (data) => {
      dispatch(
        updateUser({
          ...data,
          id: selectedId,
        })
      );
      setShowUpdateModal(false);
      toast.success("User info changed!");
    },
    [dispatch, selectedId]
  );

  const handleRemoveUser = React.useCallback(
    (id) => {
      dispatch(removeUser(id));
    },
    [dispatch]
  );

  return (
    <Container
      className="curd-users-container d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <h2>My simple users CRUD (with form validation)</h2>
      <span>Add a user and update or delete him</span>
      <Button onClick={handleShowAddUser} className="mt-3">
        Add user
      </Button>
      <div className="mt-5 users-wrapper">
        {(userList &&
          (userList.length ? (
            <div className="user-list">
              {userList.map((user, idx) => (
                <UserCard
                  key={idx}
                  info={user}
                  onUpdate={handleShowUpdateModal}
                  onRemove={handleRemoveUser}
                />
              ))}
            </div>
          ) : (
            <p style={{ textAlign: "center", fontSize: "20px" }}>
              <span className="text-muted">No available users</span>
              <br />
              <span
                className="font-weight-bold text-primary"
                style={{ fontSize: "16px" }}
              >
                Try adding one!
              </span>
            </p>
          ))) || (
          <p style={{ textAlign: "center", fontSize: "20px" }}>
            <span className="text-muted">No available users</span>
            <br />
            <span
              className="font-weight-bold text-primary"
              style={{ fontSize: "16px" }}
            >
              Try adding one!
            </span>
          </p>
        )}
      </div>

      <UsersForm
        isShowAddModal={isShowAddModal}
        onHide={() => setShowAddModal(false)}
        onSubmit={handleSubmitFormAdd}
        title="Add new user"
        primaryBtnLabel="Confirm"
        secondaryBtnLabel="Cancel"
        centered
      />

      <UsersForm
        data={formData}
        isShowAddModal={isShowUpdateModal}
        onHide={() => setShowUpdateModal(false)}
        onSubmit={handleSubmitFormUpdate}
        title="Change this user info"
        primaryBtnLabel="Confirm changes"
        secondaryBtnLabel="Cancel"
        centered
      />
    </Container>
  );
};

export default React.memo(CRUDUsers);
