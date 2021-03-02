import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useFormik } from "formik";
import { validationSchema } from "../utils/UserFormSchema";

const UsersForm = ({
  isShowAddModal = false,
  onHide = () => {},
  onSubmit = () => {},
  title = "",
  primaryBtnLabel = "",
  secondaryBtnLabel = "",
  data = {},
  ...props
}) => {
  const formik = useFormik({
    initialValues: {
      userName: "",
      userAge: 18,
      userEmail: "",
    },
    onSubmit: onSubmit,
    validationSchema,
  });

  return (
    <Modal show={isShowAddModal} {...props}>
      <Modal.Header>
        <span className="font-weight-bold">{title}</span>
      </Modal.Header>
      <Modal.Body>
        <Form id="add-user-form" onSubmit={formik.handleSubmit} noValidate>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              id="userName"
              name="userName"
              type="text"
              placeholder="Input user name"
              onChange={formik.handleChange}
              value={formik.values.userName}
              isValid={formik.touched.userName}
              isInvalid={formik.errors.userName}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Age</Form.Label>
            <Form.Control
              id="userAge"
              name="userAge"
              type="number"
              placeholder="What is user age?"
              onChange={formik.handleChange}
              value={formik.values.userAge}
              isValid={formik.touched.userAge}
              isInvalid={formik.errors.userAge}
              required
            />
            <Form.Control.Feedback type="invalid">
              Only age from 18 to 40 is allowed!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              id="userEmail"
              name="userEmail"
              type="email"
              placeholder="Email for user avatar"
              onChange={formik.handleChange}
              value={formik.values.userEmail}
              isValid={formik.touched.userEmail}
              isInvalid={formik.errors.userEmail}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid email address!
            </Form.Control.Feedback>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button form="add-user-form" type="submit">
          {primaryBtnLabel}
        </Button>
        <Button variant="outline-secondary" onClick={onHide}>
          {secondaryBtnLabel}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default React.memo(UsersForm);
