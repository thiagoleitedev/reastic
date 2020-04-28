import * as React from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Form,
  TextField,
} from '@reastic/components';
import { storiesOf } from '@storybook/react';

storiesOf('Buttons', module)
  .add('Default', () => (
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
  ))
  .add('Sizes', () => (
    <div>
      <Button size="small">adsasd</Button>
      <Button size="medium">adsasd</Button>
      <Button size="large">adsasd</Button>
    </div>
  ));

storiesOf('Cards', module).add('Default', () => (
  <div style={{ background: '#eee', position: 'absolute', width: '100%', height: '100%' }}>
    <Card>
      <CardHeader>asdasdasd</CardHeader>
      <CardBody>asdasdasd</CardBody>
    </Card>
  </div>
));

storiesOf('Table', module).add('Default', () => (
  <div>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell align="right">Email</TableCell>
          <TableCell align="center">Country</TableCell>
          <TableCell align="justify">Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>dasdasdasd</TableCell>
          <TableCell align="right">dasdasdasd</TableCell>
          <TableCell align="center">dasdasdasd</TableCell>
          <TableCell align="justify">dasdasdasd</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>dasdasdasd</TableCell>
          <TableCell align="right">dasdasdasd</TableCell>
          <TableCell align="center">dasdasdasd</TableCell>
          <TableCell align="justify">dasdasdasd</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
));

storiesOf('Form Input', module).add('Default', () => (
  <div>
    <Form
      initialValues={{ name: '', age: '' }}
      onSubmit={values => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <TextField label="Name" name="name" placeholder="your name" />
      <TextField label="Age" name="age" placeholder="your age" />
      <Button type="submit">Submit</Button>
    </Form>
  </div>
));
