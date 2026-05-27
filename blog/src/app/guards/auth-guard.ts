import { CanActivateFn } from '@angular/router';

// Lógica de autenticação aqui, retorne true se o usuário estiver autenticado, caso contrário, retorne false
export const authGuard: CanActivateFn = (route, state) => {
  return false; 
};
