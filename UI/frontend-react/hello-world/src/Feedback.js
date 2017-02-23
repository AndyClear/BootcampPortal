import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class Feedback extends React.Component {

  state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return 'How did you find the instructors?';
      case 1:
        return 'How did you find the facilities?';
      case 2:
        return 'Anything else you would add?';
      default:
        return 'Feedback';
    }
  }

  render() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};


    return (
      <div style={{width: '100%', maxWidth: 500, margin: 'auto'}}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Question One</StepLabel>
          </Step>
          <Step>
            <StepLabel>Question Two</StepLabel>
          </Step>
          <Step>
            <StepLabel>Question Three</StepLabel>
          </Step>
        </Stepper>

        <div style={contentStyle}>
          {finished ? (
            <p>
              Thank you! Your feedback has been recorded.
            </p>
          ) : (
            <div>
              <p>{this.getStepContent(stepIndex)}</p>
              <div style={{marginTop: 12}}>
                <FlatButton
                  label="Back"
                  disabled={stepIndex === 0}
                  onClick={this.handlePrev}
                  style={{marginRight: 12}}
                />
                <RaisedButton
                  label={stepIndex === 2 ? 'Finish' : 'Next'}
                  primary={true}
                  onClick={this.handleNext}
                />
                <div>
                   <TextField hintText="Question One" />
                  <TextField hintText="Question Two" />
                  <TextField hintText="Question Three" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Feedback