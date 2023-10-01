import { Card, Container, Dropdown, Button, ListGroup, Form } from "react-bootstrap";
import "../styles/userCard.css"
import { useEffect, useState } from "react";
import HTTP from "./../utils/http";

export default function UserInfo() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [user, setUser] = useState({});

  console.log(user);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await HTTP({
          url: "/users/6518af7c2927278899a7137a",
        });

        console.log(response.data);
        setUser(response.data);
        if (response?.data?.["_id"]) {
          // navigate("/profile");
        }
      } catch (error) {
        console.log("ERROR: " + error);
      }
    };

    fetchUser();
  }, []);

  // const updateUser = async () => {
  //   try {
  //     const response = await HTTP({
  //       url: "/users/6518af7c2927278899a7137a",
  //       method: "PUT",
  //       data: {

  //       }

  return (

    <>
    <Form>
      <Form.Group>
        
      </Form.Group>
    </Form>
      <ListGroup as="ul">
        <ListGroup.Item as="li" active>Contact Info</ListGroup.Item>
        <ListGroup.Item as="li">Phone: 561-425-8918</ListGroup.Item>
        <ListGroup.Item as="li">Address:</ListGroup.Item>
        <ListGroup.Item as="li">Email:</ListGroup.Item>
        <ListGroup.Item as="li">Address:</ListGroup.Item>
        <ListGroup.Item as="li">City</ListGroup.Item>
        <ListGroup.Item as="li">Zip:</ListGroup.Item>
      </ListGroup>

    </>

  )
}
