import React from 'react';
import QuizEngine from '../../QuizEngine/QuizEngine';
import { footprintQuestions } from './data';

export default function FootPrintModule() {
  return <QuizEngine title="Trắc nghiệm Footprint" questions={footprintQuestions} />;
}