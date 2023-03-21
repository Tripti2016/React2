import React from "react";
import "./header.scss";
import people from "../../assets/people.png";
import Illust from "../../assets/Illust.png";

const Header = () => {
  return (
    <div className="gpt__header section__padding">
      <div className="gpt3__header-content" id="home">
        <h1 className="gradient__text">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="gpet3__header-content__input">
          <input type="email" placeholder="Your Email" />
          <button type="button">Get Strated</button>
        </div>
        <div className="gpt3__header-conetent__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={Illust} alt="illust" />
      </div>
    </div>
  );
};

export default Header;
