import React from 'react';

export default function TestIf() {
  return (
    <div>
      <h1>If Test</h1>
      <If condition>This should show</If>
      <If condition={false}>This should not show</If>
    </div>
  );
}
