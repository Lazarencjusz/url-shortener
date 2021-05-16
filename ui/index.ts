import { onShortIt } from './actions';
import { shoutItButton } from './selectors';

function run() {
  shoutItButton.addEventListener('click', onShortIt);
}

run();
