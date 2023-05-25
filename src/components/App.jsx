import { Component } from 'react';

import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Section from "components/Section/Section";
import Statistics from "./Statistics/Statistics";
import Notification from "components/Notification/Notification";

import css from  "components/App.module.css"

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = state => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, state) => total + state, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={css.app}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (<Notification message="There is no feedback" />)
          }
        </Section>
      </div>
    );
  }
}


export default App;