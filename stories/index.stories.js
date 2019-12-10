import * as React from 'react';
import { Button } from '@reastic/components';
import { storiesOf } from '@storybook/react';

storiesOf('Buttons', module).add('Default', () => (
  <div>
    <Button>Default</Button>
    <Button disabled>Disabled</Button> <Button variant="outlined">Outline</Button>
    <Button variant="outlined" disabled>
      Disabled
    </Button>
    <Button variant="flat">Flat</Button>
    <Button variant="flat" disabled>
      Disabled
    </Button>
  </div>
));
