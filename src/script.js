import React from "react";
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import store from './store';
import {createRoot} from 'react-dom/client'
import Button from "./components/button";
import Modal from "./components/modal";
import Logo from "./components/logo";
import List from "./components/list";
import ErrorMessage from "./components/errorMessage";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
<Provider store={store}>
    <header>
    <Button/>
    <Modal/>
    <Logo/>
    </header>
    <List/>
    <ErrorMessage/>
    </Provider>

);
