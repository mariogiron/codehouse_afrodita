## Registro App/Login

  ruta del server  https://da1c-88-3-9-108.ngrok.io

     POST https://da1c-88-3-9-108.ngrok.io/register donde se registra el usuario en la bbdd.
     POST https://da1c-88-3-9-108.ngrok.io/login donde haremo peticion para obtener acceso
      
    GET https://da1c-88-3-9-108.ngrok.io/premio para poder ver el premio necesitais el token del login.
    headers user-token

  

 - Crear interface de Users
 id,  name, surname, username, password, mail, address, age 
 - Crear componentes Login y Register.
 - Seran dos formularios el de login de tipo template y el de Register de tipo Model
 - El form de register debera validar todos campos requeridos, campos de tipo email y comprobar password.


 // --- ///

 - Crear ruta Home, Register, Login. Que cargue componentes correspondientes
 - Componente home tendrá un boton que debera llevarme al premio.

 - RegisterComponent
    - Formulario.
    - Cuando se envie el formulario redirect to login

 - Login 
    - Formulario
    - Logearse con user y password.
    - REedirect to home , y mirar el premio guardado en el localstorage


