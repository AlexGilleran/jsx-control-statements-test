import React from 'react';

export default function TestIf() {
  return (
    <div>
      <h1>With Test</h1>
      <With foo="this" bar="works">
        <span>{foo}</span>
        <span>{bar}</span>
      </With>
    </div>
  );
}
