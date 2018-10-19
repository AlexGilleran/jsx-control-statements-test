import React from 'react';

export default function TestIf() {
  return (
    <div>
      <h1>Choose Test</h1>
      <Choose>
        <When condition={false}>This should NOT show</When>
        <Otherwise>This should show</Otherwise>
      </Choose>
    </div>
  );
}
