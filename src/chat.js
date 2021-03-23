import React from "react";
import { fontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

library.add(faLocationArrow);

function Chat(p) {
  return (
  <div className="card">
    <div className="card-header msg_head">
      <div className="d-flex bd-highlight">
        <div className="img_cont">
          <img src={p.data.profileImg} className="rounded-circle user_img"/>
          {
            p.data.status ? <span className="online_icon"></span>: <span className="offline_icon"></span>
          }
        </div>
        <div className="user_info">
          <span>{p.data.name}</span>
        </div>
      </div>
    </div>
    <div className="card-body msg_card_body">
      {
        p.data.items.map((item,index) => {
          return item.position ? <div className="d-flex justify-content-start mb-4" key={index}>
            <div className="img_cont_msg">
              <img src={p.data.profileImg} className="rounded-circle user_img_msg"/>
            </div>
            <div className="msg_cotainer">
              {item.message}
            </div>
            </div> : <div className="d-flex justify-content-end mb-4" key={index}>
            <div className="msg_cotainer">
              {item.message}
            </div>
            <div className="img_cont_msg">
              <img src={p.data.profileImg} className="rounded-circle user_img_msg"/>
            </div>
            </div>
        })
      }
    </div>
    <div className="card-footer">
      <div className="input-group">
        <textarea name="" id={p.data.messageIndex} className="form-control type_msg" placeholder="Type a message"></textarea>
        <div className="input-group-append">
          <span className="input-group-text send_btn" onClick={() => 
          p.handleClick(p.data.messageIndex)}><i class="fas fa-location-arrow"></i></span>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Chat;
