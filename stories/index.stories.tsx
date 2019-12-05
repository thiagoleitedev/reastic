import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@reastic/components';

storiesOf('Dialog', module).add('Conditionally rendering', () => {
  function Example() {
    return <Button>adasdas</Button>;
  }
  return <Example />;
});
