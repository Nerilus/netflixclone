import React from 'react';
import { BrowseContainer } from '../containers/browse';
import { useContent } from '../hooks';
import selectionFilter from '../utils/selection-filter';

export default function Browse() {
  // we nedd the serie and the films
  const { series } = useContent('series');
  const { films } = useContent('films');
  const slides = selectionFilter({
    series,
    films,
  });
  console.log(slides);

  // we need slides

  return <BrowseContainer slides={slides} />;
}
