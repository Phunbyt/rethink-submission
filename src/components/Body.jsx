import React from 'react';
import TextCard from './TextCard';
import './Body.css';
import FloatingCircle from './FloatingCircle';
import ChatCard from './ChatCard';
import Character from './Character';
const Body = () => {
  return (
    <div className="app_body">
      <div className="section_one">
        <div className="hero_text">
          <h1>What are you looking for?</h1>
        </div>

        <div className="text_cards">
          <TextCard
            cardTitle="Help me create a Marketing Plan!"
            cardText="The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that"
          />

          <TextCard
            cardTitle="I know what i am looking for."
            cardText="The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that"
          />
        </div>
      </div>
      <div className="section_two">
        <Character />
        <div className="chat_cards">
          <ChatCard cardText="Hi there! Need help in creating a Marketing plan for your business? I can help you to create one using Retink AI engine." />
          <ChatCard cardText="Click on the options to get started" />
        </div>
      </div>

      <FloatingCircle size={200} top={144} xValue={900} />
      <FloatingCircle size={160} left={68} top={407} />
      <FloatingCircle size={112} left={124} top={478} />
      <FloatingCircle size={112} top={689} />

      <FloatingCircle
        size={200}
        top={144}
        xValue={900}
        left={1300}
        xValue={-1100}
      />
      <FloatingCircle
        size={160}
        top={522}
        xValue={900}
        left={1300}
        xValue={-1100}
      />
    </div>
  );
};

export default Body;
