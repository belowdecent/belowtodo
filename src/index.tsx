/* @refresh reload */
import { render } from 'solid-js/web';

import './reset.scss';
import './colors.scss';
import './index.scss';

import App from './App';

const root = document.getElementById('root');

render(() => <App />, root!);
