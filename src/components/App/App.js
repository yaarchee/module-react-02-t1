import React, { Component } from "react";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import Sections from "../Sections/Sections";
import Notification from "../Notification/Notification";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    top: 0,
  };

  onLeaveFeedback = (gradeFeedBack) => {
    console.log(this.state);
    this.setState((prevState) => {
      return {
        [gradeFeedBack]: prevState[gradeFeedBack] + 1,
      };
    });
  };

  onTotalState() {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  }

  positivePercentage() {
    return ((this.state.good / this.onTotalState()) * 100).toFixed(2);
  }

  onStatistics() {
    return Object.entries(this.state);
  }

  render() {
    return (
      <>
        <Sections>
          <h2>Please leave feedback</h2>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Sections>

        <Sections>
          <h2>Statistics:</h2>
          {this.onTotalState() ? (
            <Statistics
              statistics={this.onStatistics()}
              total={this.onTotalState()}
              positivePercentage={this.positivePercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Sections>
      </>
    );
  }
}
