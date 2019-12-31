import { lazy } from 'react';

const games = [
  { name: 'Memory Game', slug: 'memory-game', component: lazy(() => import('./components/MemoryGame/MemoryGame')) },
  { name: 'Dev Quiz', slug: 'dev-quiz', component: lazy(() => import('./components/DevQuiz/DevQuiz')) },
];

export default games;
