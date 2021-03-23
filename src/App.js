import logo from './logo.svg';
import './App.css';
import Chat from "./chat";
import { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
library.add(faLocationArrow);

function App() {
    let [msgdetails, updatemsg] = useState([
        {
          messageIndex: "uid0",
          name: "kalpu Bro",
          myImg: "https://static.turbosquid.com/Preview/2019/01/25__13_20_13/1a.png3F0D8235-23F1-478D-A726-2FFF389E8457DefaultHQ.jpg",
          profileImg: "https://static.turbosquid.com/Preview/2019/01/25__13_20_13/1a.png3F0D8235-23F1-478D-A726-2FFF389E8457DefaultHQ.jpg",
          status: true,
          items:[
            {
              message: "Hi",
              position: true
            },
            {
              message: "Gud mrng bean",
              position: true
            }
          ]
        },
        {
          messageIndex: "uid1",
          name: "I",
          myImg: "https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg",
          profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4_oDCpYXF_hXElVqjIQpUsSD6S7kxk4-hwg&usqp=CAU",
          status: true,
          items:[
            {
              message: "Hi",
              position: true
            },
            {
              message: "hey dude, how are you",
              position: true
            }
          ]
        },
        {
          messageIndex: "uid2",
          name: "Me",
          myImg: "https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg",
          profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4_oDCpYXF_hXElVqjIQpUsSD6S7kxk4-hwg&usqp=CAU",
          status:false,
          items:[
            {
              message: "Hello",
              position: true
            },
            {
              message: "Hi who is this?",
              position: false
            }
          ]
        },
        {
          messageIndex: "uid3",
          name: "Myself",
          myImg: "https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg",
          profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4_oDCpYXF_hXElVqjIQpUsSD6S7kxk4-hwg&usqp=CAU",
          status: true,
          items:[
            {
              message: "Hi",
              position: true
            },
            {
              message: "are you there??",
              position: true
            }
          ]
        }
      ]);
    
    let [item, getItem] = useState(msgdetails[0]);
    let updateMsg = (messageIndex) => {
      let msg = document.getElementById(messageIndex).value;
      let currentIndex = messageIndex.substr(3,4);
      let obj = {
        message: msg,
        position: false
      }
      msgdetails[currentIndex].items.push(obj);
      document.getElementById(messageIndex).value = " ";
      updatemsg([...msgdetails]);
    }


  return (
    <div className="container-fluid h-100 padMar20">
      <div className="row justify-content-left h-100">
        <div className="col-md-4 col-xl-3 chat">
          <div className="card mb-sm-3 mb-md-0 contacts_card">
            <div className="card-body contacts_body">
              <ul className="contacts">
                <li><input type="text" placeholder="enter name to search"></input></li>
                  {
                    msgdetails.map((message, index) =>{
                      return <li key={index} className="pointerCursor" onClick={() =>{
                        getItem(message);
                      }}>
                          <div className="d-flex bd-highlight">
                            <div className="img_cont">
                              <img src={message.profileImg} className="rounded-circle user_img"/>
                              {
                                message.status ? <span className="online_icon"></span>: <span className="offline_icon"></span>
                              }
                            </div>
                            <div className="user_info">
                              <span>{message.name}</span>
                              <p className="text-truncate maxWidth200">{message.items[message.items.length -1].message}</p>
                            </div>
                          </div>
                      </li>
                    })
                  }
              </ul>
            </div>
            <div className="card-footer"></div>
          </div>
        </div>
        <div className="col-md-8 col-xl-6 chat">
          {<Chat data={item} handleClick = {updateMsg}></Chat>}
        </div>
      </div>
    </div>
   
  );
}

export default App;
