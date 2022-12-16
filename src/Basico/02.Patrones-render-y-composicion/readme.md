# 1.Introduccion Composición de componentes

# Filosofía y principios de diseño en React

fuente :https://es.reactjs.org/docs/design-principles.html

## Abstracciones comunes:

-   se refiere que a React no quiere incluir código inútil en su core, código que sea demasiado especifico para caso de uso demasiado concreto. Sin embargo, existen excepciones.

## Interoperabilidad:

-   React trata de trabajar bien con otras bibliotecas de interfaz de usuario.

## Estabilidad:

-   React va a mantener sus apis, componentes, funcionamiento, etc… aunque estén descontinuados para no romper el código que usamos.

## Válvulas de escape:

-   Cuando React quiera descontinuar un patrón que no les gusta, es sus responsabilidad considerar todos los casos de uso existentes para él, y antes de descontinuarlo educar a la comunidad respecto a las alternativas.

## Experiencia de desarrollo:

-   el objetivo de React no es solo que con su código podamos solucionar nuestro problemas también van a buscar una solución que nos den una buena experiencia y disfrute.

## Implementación:

-   Siempre que sea posible React preferirá código aburrido a código elegante. El código es descartable y cambia a menudo. Así que es importante que no introduzca nuevas abstracciones internas al menos que sea absolutamente necesario. Código detallado que sea fácil de mover, cambiar y eliminar es preferido sobre código elegante que esté abstraído de manera prematura y que sea difícil de cambiar.
    Optimizado para instrumentación: React siempre va a buscar el nombre mas distintivos y detallados(no necesariamente nombres largos).

## Dogfooding:

-   significa que React va a periodizar la implementación de funcionalidades que necesite su empresa, Facebook, Esto tiene la ventaja no solo para su empresa sino también a todos los desarrolladores que utiliza React.

## Planificación:

-   Acá es donde nosotros dividimos nuestras responsabilidades de los que debemos hacer y lo que tiene que hacer React por detrás con las descripciones que le hacemos. react tranforma nuestro codigo para que funciones en htlm

## Configuración:

-   React cree que una configuración global no funciona bien con la composición. Dado que la composición es central en React, no proveen configuración global en el código, no deja entrar al codigo profundo. React siempre se asegurara que nosotros tengamos compatibilidad entre cualquier librería y aplicación que utilicemos React.

## Depuración:

-   se refiere que a React siempre va a dejarte pistas un rastro predecible, donde podamos buscar los errores en nuestra aplicación.

## Composición:

# 2 . Render props y render functions

-   Es un nuevo patron ,
-   render funcions : entregar informacion por una funcion y renderizar la funcion
-   render props : renderizar components segun su estado

# 3. High Order Components (HOC)

-   funciones de vuelven otra funcion .
-   Las funciones como las conocemos pueden devolvernos un valor en sus returns, pero estas funciones de “orden superior”, son funciones que devuelven otras funciones.

-   Si llamamos a la high order function y le enviamos un parámetro no tendremos todavía un resultado, como está devolviendo otra función tenemos que llamar a esa función que obtenemos luego de llamar a la de orden superior, enviarle los nuevos parámetros que necesita la función de retorno y entonces si, obtendremos nuestro resultado.

```
function highOrderFunction(var1) {
	return function returnFunction(var2) {
		return var1 + var2;
	}
}

const withSum1 = highOrderFunction(1);
const sumTotal = withSum1(2);
```

-
