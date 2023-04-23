import React, { useEffect, useState } from "react";
import axios from "axios";
// import * as fs from 'fs';
import fs from 'fs';
// const fs = require('fs');
function TodoList() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch('todo.txt') // Fetch the local JSON file
      // .then(response => response.json()) // Parse the JSON data
      .then(tasks => setTasks(tasks)) // Update the state with the JSON data
      .catch(error => console.error(error));
  // useEffect(() => {
    // Read file contents
    // const fileContents = fs.readFileSync('todo.txt',{encoding: 'utf-8'});
    // const fs = require('fs');
    // const fileContents = fs.readFileSync('todo.txt', 'utf-8');
    // const fs = require('fs');
    // const fileContents = fs.readFile('todo.txt', 'utf8', function(err, data) {
    // if (err) throw err;
    // console.log(data);
    // });
    // Split contents into array of lines
    // const lines = fileContents.split("\n");
    // Remove empty lines and whitespace
    // const tasks = lines.filter(line => line.trim() !== "");
    // Update state with tasks
    // setTasks(data);
    // Create board
    createBoard(tasks);
  }, []);
  async function createBoard(tasks) {
    // Create board
    const boardName = "My To-Do List";
    const boardDescription = "A list of things I need to do";
    const response = await axios.post("https://api.generaltask.com/boards", {
      name: boardName,
      description: boardDescription
    });
    // Add tasks to board as cards
    const boardId = response.data.id;
    tasks.forEach(async (task, index) => {
      const cardName = task;
      const cardDescription = `Task #${index + 1}`;
      await axios.post(`https://api.generaltask.com/boards/${boardId}/cards`, {
        name: cardName,
        description: cardDescription
      });
    });
  }
  return (
    <div>
      <h1>My To-Do List</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;