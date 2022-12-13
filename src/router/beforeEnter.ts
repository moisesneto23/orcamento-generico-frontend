export default async (to: any, from: any, next: any) => {
    if (
        (from.path === "/sobre" ||
        from.path === "/cadastro-usuario" ||
        from.path === "/login") && await estaAutenticado() 
        
      ) {
        console.log(estaAutenticado());
        next(true);
      }else{
        console.log("jwt apagado no enter");
        localStorage.removeItem("ocirenegotnemacro");
        return next('/login'); 
      }
        
    }
    
var autenticado = estaAutenticado();

async function estaAutenticado(): Promise<boolean> {
    if (localStorage.getItem("ocirenegotnemacro") !== undefined ) {
      return true;
    } else {
      return false;
    }
  }
  