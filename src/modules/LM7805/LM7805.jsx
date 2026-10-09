import React from 'react';
import QuizEngine from '../../QuizEngine/QuizEngine';
import { lm7805Questions } from './data';

export default function LM7805Module() {
  return <QuizEngine title="Trắc nghiệm IC LM7805" questions={lm7805Questions} />;
}