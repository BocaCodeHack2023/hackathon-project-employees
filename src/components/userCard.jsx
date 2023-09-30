import { Card, Container, Dropdown, Button } from "react-bootstrap";
import ariPic from "../images/aripic.jpg"
import "../styles/userCard.css"

export default function UserCard() {
  return (
    <Card className="w-full max-w-sm">
      <Card.Header className="d-flex justify-content-end px-4 pt-4">
      </Card.Header>
      <Card.Body className="flex flex-col items-center pb-10">
        <roundedCircle />
        <img
          className="w-25 h-25 mb-3 shadow-lg img-ari"
          src={ariPic}
          alt="image"
          
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900">Ariana Diaz</h5>
        <span className="text-sm text-gray-500">(Gender)</span>
        <div className="flex mt-4 space-x-3 md:mt-6">
         
          <Button
            href="#"
            variant="light"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 border border-gray-300 rounded-lg"
          >
            Message
          </Button>
        </div>
      </Card.Body>
    </Card>


  );
}
