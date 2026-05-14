import { Routes } from '@angular/router';

import { About } from './pages/about/about';
import { Blog } from './pages/blog/blog';
import { contact } from './pages/contact/contact';

export const routes: Routes = [
    
    {
        path: 'about',
        component:About
    },
    {
        path: 'blog',
        component:Blog
    },
    {
        path: 'contact',
        component:contact
    }
];
