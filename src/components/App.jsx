import React, { useState } from 'react';

import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Section from "components/Section/Section";
import Statistics from "./Statistics/Statistics";
import Notification from "components/Notification/Notification";

import css from  "components/App.module.css"

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = ( option ) => {
    switch (option) {
        case 'good':
          setGood(prev => prev + 1);
          break;
        case 'neutral':
          setNeutral(prev => prev + 1);
          break;
        case 'bad':
          setBad(prev => prev + 1);
          break;
        default:
          return;
      }
  }

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

    return (
      <div className={css.app}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={handleClick}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (<Notification message="There is no feedback" />)
          }
        </Section>
      </div>
    );

}


export default App;