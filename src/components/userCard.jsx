import { Card, Container, Dropdown, Button, Image } from "react-bootstrap";
import ariPic from "../images/aripic.jpg"
import "../styles/userCard.css"
import { useEffect, useState } from "react";
import HTTP from "../utils/http";

export default function UserCard() {
  const [user, setUser] = useState({});

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

  return (
    <Card className="w-25 d-flex justify-content-center">
      <Card.Body className="d-flex">
        <Image
          className="dashboard-rounded-avatar me-1"
          roundedCircle
          width="100"
          height="100"
          src={ariPic}
          alt="image" />
        <div className="float-end">
          <p className="d-block text-center">{user.name}</p>
          <p className="d-block">{user.gender}</p>
        </div>
      </Card.Body>
    </Card>


  );
}
