import { Card, Container, Dropdown, Button, ListGroup } from "react-bootstrap";
import "../styles/userCard.css"

export default function UserInfo() {
  return (
   
<>

    <ListGroup as="ul">
      <ListGroup.Item as="li" active>
        Contact Info
      </ListGroup.Item>
      <ListGroup.Item as="li">Phone: 123-123-123</ListGroup.Item>
      <ListGroup.Item as="li" disabled>
        Address:
      </ListGroup.Item>
      <ListGroup.Item as="li">Email</ListGroup.Item>
      <ListGroup.Item as="li"></ListGroup.Item>
    </ListGroup>

</>

  )
}
