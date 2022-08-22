import React from "react";
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import store from './store';
import {createRoot} from 'react-dom/client'
import Button from "./components/button";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
<Provider store={store}>
    <Button/>
    </Provider>
);
