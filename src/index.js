import React from 'react';
import { createRoot } from 'react-dom/client';

const element = <h1>Coba</h1>;

const root = createRoot(document.getElementsById(element));
root.render(element);