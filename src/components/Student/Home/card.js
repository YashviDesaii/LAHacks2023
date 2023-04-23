import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './card.css'; // Import CSS file
import { transcript_text } from './constants';

function BasicExample() {
  return (
    <Card className="custom-card"> {/* Add custom class name */}
      <Card.Body>
        <Card.Title>Transcription</Card.Title>
        <Card.Text>
          {transcript_text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
