import { Routes } from '@angular/router';
import { Home } from './pages/home/home'
import { About} from './pages/about/about'
import { Contact } from './pages/contact/contact'
import { Services } from './pages/services/services'

export const routes: Routes = [
  { path: '',         component: About },
  { path: 'home',    component: Home },
  { path: 'services', component: Services },
  { path: 'contact',  component: Contact },
  { path: '**',       redirectTo: '' }  // rota curinga (404)
];