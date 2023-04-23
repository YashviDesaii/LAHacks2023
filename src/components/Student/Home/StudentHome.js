import React from "react";
import { Layout } from "antd";
import DashboardCard from "../../UI Components/Card/DashboardCard";
import StudentPageLayout from "../Layout/StudentPageLayout";
import axios from "axios";
import StudentClasses from "../StudentHome.module.css";
import { cohere_overview, transcript_text } from './constants';
import { cohere_todolist } from './constants';
import { Link } from 'react-router-dom';
import "./StudentHome.css"
import Card from 'react-bootstrap/Card';
import AttendanceCard from "../../UI Components/Calender/AttendanceCard";
import AssignmentsTab from "../../UI Components/AssignmentsTab/AssignmentsTab";

import { Typography } from "antd";

import Button from 'react-bootstrap/Button';
import BasicExample from './card'







// import { SpeechClient } from '@google-cloud/speech';
// import { promisify } from 'util';



const { Content } = Layout;

class SiderDemo extends React.Component {

  
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     transcript: '',
  //   };
  //   this.handleSpeechRecognition = this.handleSpeechRecognition.bind(this);
  // }
  

  handleAudioUpload = async(event) => {
    const file = event.target.files[0];
    console.log('Selected file:', file.name);
    //const { promisify } = require('util');
    //upload it to a server
    // const url = 'https://storage.googleapis.com/upload/storage/v1/b/la2023hacks/o?uploadType=media&name=${file.name}';
    const audioUrl = 'https://storage.googleapis.com/upload/storage/v1/b/la2023hacks/o?uploadType=media&name='+file.name;
     try {
        const response = await fetch(audioUrl, {
            method: 'POST',
            body: file,
            mode: 'cors',
            headers: {
              authorization: 'Bearer ya29.a0Ael9sCP6ww8gk1FGkA9hRlWOnNePlPzMMBf-PYbZ-4qIgZCZgZhH7ObMQB41tpPRUVxpuDQsb5Dz0idH1YE_x0y4don3TRIZmMzIFBa1hUlFOMaw6E-UJy1-GG90RNbM8XOD-74VjEqAI2HFuw5IJe-ngYp2aCgYKAVESARISFQF4udJhmH36OPSWWp6otprvhLltNQ0163'
            }
        });
        console.log(response);
        const bucketUrl = response.url;
        const speechToTextUrl = 'https://speech.googleapis.com/v1p1beta1/speech:longrunningrecognize';
        //console.log(response.url);

        const secondResponse = await fetch(speechToTextUrl, {
          method: 'POST',
          headers: {
           // 'Content-Type': 'application/json',
           authorization: 'Bearer ya29.a0Ael9sCPG3MJUrwrpe23MqLM0EwdA3k7IruOXg95HOS-aCUR-CnVZAiKCKclmZhqsmsI2OesGBkw-mDGNYHK4muC55c6wVp_S-DPB8zZrUBPbxJJsTDDU9iSeY79hqMw688cjJ0NvowNebAv0G02jXBGW-Td0aCgYKAXoSARISFQF4udJhuuSeARZWhKO1Zhs0Eh_DJA0163'
          },
          body: JSON.stringify( {
            config: {
              "encoding": "MP3",
              "sample_rate_hertz": 16000,
              "language_code": "en-US"
            },
            audio: {
              "uri": "gs://la2023hacks/audio-files_Introduction_to_the_Course.mp3"
            },
            output_config: {
              "gcs_uri": "gs://la2023hacks/transcript/transcript7.txt"
            }
          })
      });
  
      //Handle the response from the second API call
      const data = await secondResponse.json();
      console.log(data);
      const transcriptUrl = "https://storage.googleapis.com/la2023hacks/transcript/transcript6.txt"
      fetch(transcriptUrl)
      .then(response => response.text())
      .then(data => {
        console.log(data);
      })

    } catch (error) {
        console.error('Error:', error);
    }
   
  }
 
  onCohereCall =(cohere_parameter)=>{
    console.log(cohere_parameter);
    const options = {
      method: 'POST',
      url: 'https://api.cohere.ai/v1/generate',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: 'Bearer Aqd9HhJm4cAU9Myu4f2RG4ktJvbMh08MvoYrqGf8'
      },
      data: {
        k: 0,
        max_tokens: 300,
        model: 'command-xlarge-nightly',
        return_likelihoods: 'NONE',
        
        stop_sequence: [],
        stream: true,
        temperature: 0.9,
        prompt: transcript_text + cohere_parameter
      }
    };
    
    axios
      .request(options)
      .then(function (response) {
        const data = response.data
        let result = "";

    for (let key in data) {
      if (data.hasOwnProperty(key) && key === "text") {
        result += data[key];
  }
}
console.log(result);
        })
        

     
.catch(function (error) {
        console.error(error);
      });
    
    };

  render() {
    return (
      <StudentPageLayout menuSelect="1">
  <div style={{ display: 'flex' }}>
    {/* Left side */}
    <div style={{ flex: 2, paddingTop: 50, paddingLeft: 100 }}>
      <Content className={StudentClasses.dashboard} style={{ padding: 16 }}>
        <label htmlFor="audio-upload">Upload Audio File:</label>
        <input type="file" id="audio-upload" onChange={this.handleAudioUpload} />

        {/* <div style={{ marginTop: 20, overflow: 'scroll', width: '100%', paddingBottom: 16 }}>
          <Typography.Title style={{ textAlign: "left", color: "rgba(0,0,0,0.6)", fontWeight: "normal" }}>Transcription </Typography.Title>
        </div> */}
        <BasicExample />
      </Content>
    </div>

    {/* Right side */}
    <div>
      <div className="button-wrapper" style={{ flex: 2, paddingTop: 100, paddingLeft: 100 }}>
      <Link to="/overview"><button onClick={() => this.onCohereCall(cohere_overview)}>
          Generate lecture overview
        </button>
        </Link>
        <Link to="/todo"><button onClick={() => this.onCohereCall(cohere_todolist)}>
          Create a To-Do List
        </button>
        </Link>
        <Link to="/quiz">
          <button>Quiz me!</button>
        </Link>
      </div>
    </div>
  </div>
</StudentPageLayout>

    );
  }
}

  

export default SiderDemo;
