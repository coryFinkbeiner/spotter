import { SplitScreen } from './SplitScreen';

const LeftHandComponent = ({ name }) => {
  return <h1 style={{ backgroundColor: 'green' }}>{name}</h1>;
}

const RightHandComponent = ({ name }) => {
  return <p style={{ backgroundColor: 'red' }}>{message}</p>;
}

function FakeApp() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponent name='Shaun' />
      <RightHandComponent message='Hello' />
    </SplitScreen>
  );
}

export default FakeApp