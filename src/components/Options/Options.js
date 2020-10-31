import React from 'react';
import { Radio } from 'antd';

/** Displays a radio group with the current question's options to choose from */
const Options = ({...props}) => {

  /** Determines whether the selected option is correct or not by returning a class name
   * @option: the selected option
   * Returns 'correct', 'incorrect' or an empty string
  */
  const setRadioClass = (option) => {
    if ((props.submitted && props.selected === option && option === props.question.correct) ||
      (props.submitted && option === props.question.correct)) {
        return 'correct';
    }
    if (props.submitted && props.selected === option && option !== props.question.correct) {
      return 'incorrect';
    }
    return '';
  };

  return (
    <Radio.Group onChange={props.handleChange} value={props.selected}>
      {props.options.map((option, idx) => (
        <Radio
          className={setRadioClass(option)}
          key={idx} value={option}
          disabled={props.submitted}
        >{option}</Radio>
      ))}
    </Radio.Group>
  );
};

export default Options;
