/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 IndiaMap.glb 
*/
import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import "./States.css";
import { MOUSE, Texture } from "three";
import axios from "axios";

let response = "";
let language = "";
let eng_response = "";
const handleTTSreq = async ({ response, language }) => {
  try {
    console.log(response);
    const val = {
      text: response,
    };
    const res = await axios.post(
      "http://localhost:4000/api/tts/" + language,
      val
    );
    console.log(res);
    const audioBase64 = res.data.audioResponse;

    // Create an audio element
    const audio = new Audio();
    //audio.muted= "muted";
    // Set the base64 audio data as the audio source
    audio.src = `data:audio/mpeg;base64,${audioBase64}`;
    //console.log(audio);
    // Play the audio
    audio.play();
    //<audio src={res.data} controls autoPlay/>
    //<AudioPlayer source={res.data}/>
  } catch (err) {
    console.log(err);
  }
};
const handleTTSreq2 = async ({ eng_response }) => {
  try {
    console.log(eng_response);
    const val = {
      text: eng_response,
    };
    const res = await axios.post("http://localhost:4000/api/tts", val);
    console.log(res);
    const audioBase64 = res.data.audioResponse;

    // Create an audio element
    const audio = new Audio();
    //audio.muted= "muted";
    // Set the base64 audio data as the audio source
    audio.src = `data:audio/mpeg;base64,${audioBase64}`;
    //console.log(audio);
    // Play the audio
    audio.play();
    //<audio src={res.data} controls autoPlay/>
    //<AudioPlayer source={res.data}/>
  } catch (err) {
    console.log(err);
  }
};

export function IndiaMap(props) {
  const Navigate = useNavigate();
  const { nodes, materials } = useGLTF("/IndiaMap.glb");
  const [givPos, setGivPos] = useState(Array(24).fill(4.611));

  return (
    <group {...props} dispose={null}>
      {/* <OrbitControls enablePan={true} enableRotate={true} maxDistance={15} /> */}
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        position={[0, 0, 4.611]}
      />
      <mesh
        geometry={nodes.Cube001.geometry}
        material={materials.Material}
        position={[0, 0, 0.222]}
      />
      <mesh
        geometry={nodes.Cube002.geometry}
        material={materials.IndiaMap}
        position={[0, 0, 4.611]}
      />

      <mesh
        onPointerOver={() => {
          let temp = Array(24).fill(4.611);
          temp[0] = 4.711;
          setGivPos(temp);
        }}
        onPointerLeave={() => {
          let temp = Array(24).fill(4.611);

          setGivPos(temp);
        }}
        geometry={nodes.TN.geometry}
        material={materials.IndiaMap}
        onClick={() => {
          Navigate("/TN");
          eng_response = "Welcome to Tamil Nadu";
          console.log(eng_response);
          response = "தமிழ்நாடு உங்களை அன்புடன் வரவேற்கிறது";
          language = "tamil";
          handleTTSreq({ response, language });
          setTimeout(() => {
            handleTTSreq2({ eng_response });
          }, 7700);
        }}
        position={[0, 0, givPos[0]]}
      />

      <mesh
        onPointerOver={() => {
          let temp = Array(24).fill(4.611);
          temp[1] = 4.711;
          setGivPos(temp);
        }}
        onPointerLeave={() => {
          let temp = Array(24).fill(4.611);

          setGivPos(temp);
        }}
        geometry={nodes.Kerala.geometry}
        material={materials.IndiaMap}
        position={[0, 0, givPos[1]]}
      />
      <mesh
        onPointerOver={() => {
          let temp = Array(24).fill(4.611);
          temp[2] = 4.711;
          setGivPos(temp);
        }}
        onPointerLeave={() => {
          let temp = Array(24).fill(4.611);

          setGivPos(temp);
        }}
        geometry={nodes.AP.geometry}
        material={materials.IndiaMap}
        onClick={() => {
          Navigate("/AP");
          eng_response = "Welcome to Andhra Pradesh";
          console.log(eng_response);
          response = "ఆంధ్ర ప్రదేశ్ కు స్వాగతం";
          language = "telugu";
          handleTTSreq({ response, language });
          setTimeout(() => {
            handleTTSreq2({ eng_response });
          }, 7700);
        }}
        position={[0, 0, givPos[2]]}
      />
      <mesh
        onPointerOver={() => {
          let temp = Array(24).fill(4.611);
          temp[3] = 4.711;
          setGivPos(temp);
        }}
        onPointerLeave={() => {
          let temp = Array(24).fill(4.611);

          setGivPos(temp);
        }}
        onClick={() => {
          Navigate("/Karnataka");
          eng_response = "Welcome to Karnataka";
          console.log(eng_response);
          response = "ಕರ್ನಾಟಕಕ್ಕೆ ಸ್ವಾಗತ";
          language = "kannada";
          handleTTSreq({ response, language });
          setTimeout(() => {
            handleTTSreq2({ eng_response });
          }, 7700);
        }}
        geometry={nodes.Karnataka.geometry}
        material={materials.IndiaMap}
        position={[0, 0, givPos[3]]}
      />
      <mesh
        onPointerOver={() => {
          let temp = Array(24).fill(4.611);
          temp[4] = 4.711;
          setGivPos(temp);
        }}
        onPointerLeave={() => {
          let temp = Array(24).fill(4.611);

          setGivPos(temp);
        }}
        geometry={nodes.Telangana.geometry}
        material={materials.IndiaMap}
        onClick={() => {
          Navigate("/Telangana");
          response = "తెలంగాణకు స్వాగతం";
          eng_response = "Welcome to Telangana";
          console.log(eng_response);
          language = "telugu";
          handleTTSreq({ response, language });
          setTimeout(() => {
            handleTTSreq2({ eng_response });
          }, 7700);
        }}
        position={[0, 0, givPos[4]]}
      />
      <mesh
        onPointerOver={() => {
          let temp = Array(24).fill(4.611);
          temp[5] = 4.711;
          setGivPos(temp);
        }}
        onPointerLeave={() => {
          let temp = Array(24).fill(4.611);

          setGivPos(temp);
        }}
        geometry={nodes.Maharashtra.geometry}
        material={materials.IndiaMap}
        onClick={() => {
          Navigate("/Maharashtra");
          eng_response = "Welcome to Maharashtra";
          console.log(eng_response);
          response = "महाराष्ट्रात आपले स्वागत आहे";
          language = "marathi";
          handleTTSreq({ response, language });
          setTimeout(() => {
            handleTTSreq2({ eng_response });
          }, 7700);
        }}
        position={[0, 0, givPos[5]]}
      />
      <mesh
        onPointerOver={() => {
          let temp = Array(24).fill(4.611);
          temp[6] = 4.711;
          setGivPos(temp);
        }}
        onPointerLeave={() => {
          let temp = Array(24).fill(4.611);

          setGivPos(temp);
        }}
        geometry={nodes.Gujarath.geometry}
        material={materials.IndiaMap}
        position={[0, 0, givPos[6]]}
      />
      <mesh
        onPointerOver={() => {
          let temp = Array(24).fill(4.611);
          temp[7] = 4.711;
          setGivPos(temp);
        }}
        onPointerLeave={() => {
          let temp = Array(24).fill(4.611);

          setGivPos(temp);
        }}
        geometry={nodes.Rajasthan.geometry}
        material={materials.IndiaMap}
        position={[0, 0, givPos[7]]}
      />
      <mesh
        onPointerOver={() => {
          let temp = Array(24).fill(4.611);
          temp[8] = 4.711;
          setGivPos(temp);
        }}
        onPointerLeave={() => {
          let temp = Array(24).fill(4.611);

          setGivPos(temp);
        }}
        geometry={nodes.MP.geometry}
        material={materials.IndiaMap}
        position={[0, 0, givPos[8]]}
      />
      <mesh
        onPointerOver={() => {
          let temp = Array(24).fill(4.611);
          temp[9] = 4.711;
          setGivPos(temp);
        }}
        onPointerLeave={() => {
          let temp = Array(24).fill(4.611);

          setGivPos(temp);
        }}
        geometry={nodes.Chhattisgarh.geometry}
        material={materials.IndiaMap}
        position={[0, 0, givPos[9]]}
      />
      <mesh
        onPointerOver={() => {
          let temp = Array(24).fill(4.611);
          temp[10] = 4.711;
          setGivPos(temp);
        }}
        onPointerLeave={() => {
          let temp = Array(24).fill(4.611);

          setGivPos(temp);
        }}
        geometry={nodes.Odisha.geometry}
        material={materials.IndiaMap}
        position={[0, 0, givPos[10]]}
      />
      <mesh
        onPointerOver={() => {
          let temp = Array(24).fill(4.611);
          temp[11] = 4.711;
          setGivPos(temp);
        }}
        onPointerLeave={() => {
          let temp = Array(24).fill(4.611);

          setGivPos(temp);
        }}
        geometry={nodes.WB.geometry}
        material={materials.IndiaMap}
        onClick={() => {
          Navigate("/WB");
        }}
        position={[0, 0, givPos[11]]}
      />
      <mesh
        onPointerOver={() => {
          let temp = Array(24).fill(4.611);
          temp[12] = 4.711;
          setGivPos(temp);
        }}
        onPointerLeave={() => {
          let temp = Array(24).fill(4.611);

          setGivPos(temp);
        }}
        geometry={nodes.Jharkandh.geometry}
        material={materials.IndiaMap}
        position={[0, 0, givPos[12]]}
      />
      <mesh
        onPointerOver={() => {
          let temp = Array(24).fill(4.611);
          temp[13] = 4.711;
          setGivPos(temp);
        }}
        onPointerLeave={() => {
          let temp = Array(24).fill(4.611);

          setGivPos(temp);
        }}
        geometry={nodes.Bihar.geometry}
        material={materials.IndiaMap}
        position={[0, 0, givPos[13]]}
      />
      <mesh
        onPointerOver={() => {
          let temp = Array(24).fill(4.611);
          temp[14] = 4.711;
          setGivPos(temp);
        }}
        onPointerLeave={() => {
          let temp = Array(24).fill(4.611);

          setGivPos(temp);
        }}
        onClick={() => {
          Navigate("/UttarPradesh");
          eng_response = "Welcome to Uttar Pradesh";
          console.log(eng_response);
          response = "उत्तर प्रदेश में आपका स्वागत है";
          language = "hindi";
          handleTTSreq({ response, language });
          setTimeout(() => {
            handleTTSreq2({ eng_response });
          }, 7700);
        }}
        geometry={nodes.UP.geometry}
        material={materials.IndiaMap}
        position={[0, 0, givPos[14]]}
      />
      <mesh
        onPointerOver={() => {
          let temp = Array(24).fill(4.611);
          temp[15] = 4.711;
          setGivPos(temp);
        }}
        onPointerLeave={() => {
          let temp = Array(24).fill(4.611);

          setGivPos(temp);
        }}
        onClick={() => {
          Navigate("/Delhi");
          eng_response = "Welcome to Delhi";
          console.log(eng_response);
          response = "दिल्ली में आपका स्वागत है";
          language = "hindi";
          handleTTSreq({ response, language });
          setTimeout(() => {
            handleTTSreq2({ eng_response });
          }, 7700);
        }}
        geometry={nodes.Haryana.geometry}
        material={materials.IndiaMap}
        position={[0, 0, givPos[15]]}
      />
      <mesh
        onPointerOver={() => {
          let temp = Array(24).fill(4.611);
          temp[16] = 4.711;
          setGivPos(temp);
        }}
        onPointerLeave={() => {
          let temp = Array(24).fill(4.611);

          setGivPos(temp);
        }}
        geometry={nodes.Uttarakandh.geometry}
        material={materials.IndiaMap}
        position={[0, 0, givPos[16]]}
      />
      <mesh
        onPointerOver={() => {
          let temp = Array(24).fill(4.611);
          temp[17] = 4.711;
          setGivPos(temp);
        }}
        onPointerLeave={() => {
          let temp = Array(24).fill(4.611);

          setGivPos(temp);
        }}
        geometry={nodes.Punjab.geometry}
        material={materials.IndiaMap}
        onClick={() => {
          Navigate("/Punjab");
          eng_response = "Welcome to Punjab";
          console.log(eng_response);
          response = "ਪੰਜਾਬ ਵਿੱਚ ਤੁਹਾਡਾ ਸੁਆਗਤ ਹੈ";
          language = "punjabi";
          handleTTSreq({ response, language });
          setTimeout(() => {
            handleTTSreq2({ eng_response });
          }, 7700);
        }}
        position={[0, 0, givPos[17]]}
      />
      <mesh
        onPointerOver={() => {
          let temp = Array(24).fill(4.611);
          temp[18] = 4.711;
          setGivPos(temp);
        }}
        onPointerLeave={() => {
          let temp = Array(24).fill(4.611);

          setGivPos(temp);
        }}
        geometry={nodes.HP.geometry}
        material={materials.IndiaMap}
        position={[0, 0, givPos[18]]}
      />
      <mesh
        onPointerOver={() => {
          let temp = Array(24).fill(4.611);
          temp[19] = 4.711;
          setGivPos(temp);
        }}
        onPointerLeave={() => {
          let temp = Array(24).fill(4.611);

          setGivPos(temp);
        }}
        geometry={nodes.JK.geometry}
        material={materials.IndiaMap}
        position={[0, 0, givPos[19]]}
      />
      <mesh
        onPointerOver={() => {
          let temp = Array(24).fill(4.611);
          temp[20] = 4.711;
          setGivPos(temp);
        }}
        onPointerLeave={() => {
          let temp = Array(24).fill(4.611);

          setGivPos(temp);
        }}
        geometry={nodes.Meghalaya.geometry}
        material={materials.IndiaMap}
        position={[0, 0, givPos[20]]}
      />
      <mesh
        onPointerOver={() => {
          let temp = Array(24).fill(4.611);
          temp[21] = 4.711;
          setGivPos(temp);
        }}
        onPointerLeave={() => {
          let temp = Array(24).fill(4.611);

          setGivPos(temp);
        }}
        geometry={nodes.Assam.geometry}
        material={materials.IndiaMap}
        onClick={() => {
          Navigate("/Assam");
        }}
        position={[0, 0, givPos[21]]}
      />
      <mesh
        onPointerOver={() => {
          let temp = Array(24).fill(4.611);
          temp[22] = 4.711;
          setGivPos(temp);
        }}
        onPointerLeave={() => {
          let temp = Array(24).fill(4.611);

          setGivPos(temp);
        }}
        geometry={nodes.Arunachal_Pradesh.geometry}
        material={materials.IndiaMap}
        position={[0, 0, givPos[22]]}
      />

      <mesh
        onPointerOver={() => {
          let temp = Array(24).fill(4.611);
          temp[23] = 4.711;
          setGivPos(temp);
        }}
        onPointerLeave={() => {
          let temp = Array(24).fill(4.611);

          setGivPos(temp);
        }}
        geometry={nodes.Sikkim.geometry}
        material={materials.IndiaMap}
        position={[0, 0, givPos[23]]}
      />
    </group>
  );
}

useGLTF.preload("/IndiaMap.glb");
