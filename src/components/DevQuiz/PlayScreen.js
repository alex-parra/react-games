import React from 'react';

import shuffleArray from '../../utils/shuffleArray';

const question = {
  id: 1,
  hint: '_BLANK_ lets your components “wait” for something before they can render.',
  topic: 'JavaScript > React',
  options: [
    { id: 1, label: 'Suspense', correct: true },
    { id: 2, label: 'Async / Await', correct: false },
    { id: 3, label: 'Render Props', correct: false },
    { id: 4, label: 'Reconciliation', correct: false },
    { id: 5, label: '5', correct: false },
    { id: 6, label: '6', correct: false },
    { id: 7, label: '7', correct: false },
    { id: 8, label: '8', correct: false },
    { id: 9, label: '9', correct: false },
  ],
  get randomOptions() {
    const correctOption = question.options.find(o => o.correct === true);
    const wrongOptions = question.options.filter(o => o.correct !== true);
    return shuffleArray([ correctOption, ...(shuffleArray(wrongOptions).slice(0, 3)) ]);
  }
}

const blankMarkRegx = new RegExp('_BLANK_', 'g');
const blankMarkReplace = '[ ? ]';

const PlayScreen = (props) => {
  const { onEnd } = props;
  return (
    <div className="PlayScreen">
      <div className="Question">
        <small className="topic">{question.topic}</small>
        <p>{question.hint.replace(blankMarkRegx, blankMarkReplace)}</p>
        <ul className="options">
          {question.randomOptions.map(o => (
            <li key={o.id}>{o.label}</li>
          ))}
        </ul>
      </div>
      <button onClick={onEnd}>End</button>
    </div>
  );
}

export default PlayScreen;
