import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Blog } from './pages/blog/blog';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
    {
        path: '',
        component:Home
    },
    {
        path: 'About',
        component:About
    },
    {
        path: 'Blog',
        component:Blog
    },
    {
        path: 'Contact',
        component:Contact
    }
];
