import React from 'react';
import { useParams } from 'react-router-dom';

export function Fallback() {
  const { page } = useParams<{ page: string }>();
  const heading = page || 'Dashboard';

  return (
    <h1 className="uppercase text-2xl sm:text-5xl lg:text-7xl">{heading}</h1>
  );
}
