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

  // const updateUser = async () => {
  //   try {
  //     const response = await HTTP({
  //       url: "/users/6518af7c2927278899a7137a",
  //       method: "PUT",
  //       data: {
  //         "_id": "6518af7c2927278899a7137a",
  //         "name": "Ariana",
  //         "last_name": "Diaz",
  //         "email": "team@techhubsouthflorida.org",
  //         "phone": "561-425-8918",
  //         "address_street": "313 Datura St, Suite 200",
  //         "address_city": "West Palm Beach",
  //         "address_zip": "33401",
  //         "address_state": "FL",
  //         "cancer_type": "Skin Cancer",


  //         "gender": "female"
  //       }

  //     })
  //   } catch (error) {
  //     console.log("ERROR: " + error);
  //   }
  // }


  return (
    <>
      <Card className="w-25 d-flex justify-content-center user-card-card" >
        <Card.Body className="d-flex align-items-center">
          <Image
            className="dashboard-rounded-avatar me-1"
            roundedCircle
            width="100"
            height="100"
            src={ariPic}
            alt="image" />
          <div className="float-end w-100 h-100">
            <p className="d-block text-center profile-name">{user.name}</p>
            <p className="d-block text-center profile-gender">{user.gender}</p>
          </div>
        </Card.Body>
      </Card>

    </>

  );
}
