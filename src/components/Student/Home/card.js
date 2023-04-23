import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './card.css'; // Import CSS file

function BasicExample() {
  return (
    <Card className="custom-card"> {/* Add custom class name */}
      <Card.Body>
        <Card.Title>Transcription</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the buexample text to build on the card title and make up the buexample text to build on the card title and make up the buexample text to build on the card title and make up the buexample text to build on the card title and make up the buexample text to build on the card title and make up the buexample text to build on the card title and make up the buexample text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
