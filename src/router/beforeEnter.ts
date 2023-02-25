export default async (to: any, from: any, next: any) => {
  debugger;
    if (
        /*(from.path === "/sobre" ||
        from.path === "/cadastro-usuario" ||
        from.path === "/login") &&*/ await estaAutenticado() 
        
      ) {
        next(true);
      }else{
        localStorage.removeItem("ocirenegotnemacro");
        return next('/login'); 
      }
    }
    
var autenticado = false;
function estaAutenticado(): boolean {
  let autenticacao = localStorage.getItem("ocirenegotnemacro");
    if (autenticacao !== null ) {
      return true;
    } else {
      return  false;
    }
  }
  