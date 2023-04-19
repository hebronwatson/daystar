import {cleanup, fireEvent, render} from '@testing-library/react';
import App from "../components/App"

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('Renders app without exploding.', () => {
  const app = render(
    <App />
  );

  expect(app).toBeTruthy()
});