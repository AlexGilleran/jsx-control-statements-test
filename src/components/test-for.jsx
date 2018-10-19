import React from 'react';

export default function TestIf() {
  return (
    <div>
      <h1>For Test</h1>
      <For each="thing" of={['thing 1', 'thing 2', 'thing 3']}>
        {thing}
      </For>
    </div>
  );
}
