# 1.Introduccion Composición de componentes

## Principios de diseño en React

fuente :https://es.reactjs.org/docs/design-principles.html

### Abstracciones comunes:

- se refiere que a React no quiere incluir código inútil en su core, código que sea demasiado especifico para caso de uso demasiado concreto. Sin embargo, existen excepciones.

### Interoperabilidad:

- React trata de trabajar bien con otras bibliotecas de interfaz de usuario.

### Estabilidad:

- React va a mantener sus apis, componentes, funcionamiento, etc… aunque estén descontinuados para no romper el código que usamos.

### Válvulas de escape:

- Cuando React quiera descontinuar un patrón que no les gusta, es sus responsabilidad considerar todos los casos de uso existentes para él, y antes de descontinuarlo educar a la comunidad respecto a las alternativas.

### Experiencia de desarrollo:

- el objetivo de React no es solo que con su código podamos solucionar nuestro problemas también van a buscar una solución que nos den una buena experiencia y disfrute.

## Implementación:

- Siempre que sea posible React preferirá código aburrido a código elegante. El código es descartable y cambia a menudo. Así que es importante que no introduzca nuevas abstracciones internas al menos que sea absolutamente necesario. Código detallado que sea fácil de mover, cambiar y eliminar es preferido sobre código elegante que esté abstraído de manera prematura y que sea difícil de cambiar.
  Optimizado para instrumentación: React siempre va a buscar el nombre mas distintivos y detallados(no necesariamente nombres largos).

## Dogfooding:

- significa que React va a periodizar la implementación de funcionalidades que necesite su empresa, Facebook, Esto tiene la ventaja no solo para su empresa sino también a todos los desarrolladores que utiliza React.

## Planificación:

- Acá es donde nosotros dividimos nuestras responsabilidades de los que debemos hacer y lo que tiene que hacer React por detrás con las descripciones que le hacemos. react tranforma nuestro codigo para que funciones en htlm

## Configuración:

- React cree que una configuración global no funciona bien con la composición. Dado que la composición es central en React, no proveen configuración global en el código, no deja entrar al codigo profundo. React siempre se asegurara que nosotros tengamos compatibilidad entre cualquier librería y aplicación que utilicemos React.

## Depuración:

- se refiere que a React siempre va a dejarte pistas un rastro predecible, donde podamos buscar los errores en nuestra aplicación.

## Composición:

# 2 . Render props y render functions

- Es un nuevo patron ,
- render funcions : entregar informacion por una funcion y renderizar la funcion
- render props : renderizar components segun su estado

# 3. High Order Components (HOC)

- funciones de vuelven otra funcion .
- Las funciones como las conocemos pueden devolvernos un valor en sus returns, pero estas funciones de “orden superior”, son funciones que devuelven otras funciones.

- Si llamamos a la high order function y le enviamos un parámetro no tendremos todavía un resultado, como está devolviendo otra función tenemos que llamar a esa función que obtenemos luego de llamar a la de orden superior, enviarle los nuevos parámetros que necesita la función de retorno y entonces si, obtendremos nuestro resultado.

```
function highOrderFunction(var1) {
	return function returnFunction(var2) {
		return var1 + var2;
	}
}

const withSum1 = highOrderFunction(1);
const sumTotal = withSum1(2);
```

## repaso

Principios de diseño de React

Los principios de diseño son las reglas que un equipo sigue para crear sus aplicaciones o proyectos, y el equipo de Facebook encargado de mantener y crear nuevas APIs para React no es la excepción, ellos también cuentan con ciertos principios a la hora de escribir su código.

## Principios

### 1.Abstracciones comunes

En el core de React no se van a incluir APIs para resolver problemas demasiado específicos, a menos de que muchas personas estén resolviendo dicho problema de una manera muy mala y poco funcional.

### 2.Interoperabilidad

React debe ser capaz de convivir con otras herramientas sin causar ningún problema, por lo tanto podemos tener proyectos que usan diferentes herramientas y funcional igualmente, o también podemos migrar proyectos que están construidos con otra herramienta y lentamente incluir React sin que la app se rompa.

### 3.Estabilidad

React no va a lanzar nuevas versiones de su core si estas rompen el código que ya existe, por lo tanto el código que escribimos hace varios meses o años todavía va a funcionar a día de hoy. En caso de que el equipo de React saque alguna funcionalidad que cause conflictos con APIs anteriores, entonces le avisaran a la comunidad para así poder implementar una solución diferente a tiempo.

### 4.Experiencia de desarrollo

React no solo busca que podamos implementar soluciones a nuestros problemas con sus APIs, sino que también busca que estas soluciones sean disfrutables, y que brinden una buena experiencia a la hora de ser implementadas.

### 5.Implementación(prioridad)

El código 'aburrido' siempre se va a preferir sobre el código elegante, ya que este último puede llegar a ser difícil de mover o eliminar en caso de que se deseen hacer modificaciones a la app.

### 6.Optimizado para la instrumentación(prioridad)

Los nombres de las APIs de react siempre tratarán de ser autodescriptivos, detallados y distintivos, aunque esto no significa que se vayan a colocar nombres muy largos.

### 7.Dogfooding(prioridad)

Debemos recordar que React es un proyecto creado por y para Facebook, por lo tanto el equipo encargado de crear nuevas funcionalidades siempre priorizará lo que necesita Facebook y no lo que quiere o necesita la comunidad. Aunque esto parece malo a primera vista, es todo lo contrario, ya que React cuenta con el apoyo y mantenimiento de una empresa enorme, lo cual lo convierte en una herramienta muy confiable.

## Principios para la comunidad

    1.Planificación

Antes de empezar cualquier proyecto debemos definir qué responsabilidades le vamos a delegar a React y cuales dependen de nosotros.
2.Configuración

Nosotros no podemos, o mejor, no deberíamos modificar directamente el código de React, ya que esto podría causar conflictos a la hora de añadir nuevas herramientas al entorno de nuestro proyecto.
3.Depuración

    React siempre nos va a dejar pequeñas pistas cada vez que ocurra un error dentro de nuestra aplicación, para así poder encontrar cuál es el foco del problema y saber que deberíamos cambiar.

    4.Composicion


    • Principio de composición de componentes

    La Composición de componentes ,es un patron o principio, indica que cada componente debe darnos mucha libertad para elegir donde y como usarlo
    Cada componente debe realizar una tarea en específica, pero no debe de decirnos como usar esa solución que nos brinda, debe de ser flexible al momento de utilizarlo
    Nos permitirá tener componentes mucho más fáciles de integrar al resto de componentes
    Nos facilitará reutilizar o hacer cambios en nuestros componentes


    La colocación de estado(es un problemas)
    	○ Maxima cercania a la relevancias : poner acerca al App
    	○ Stateful vs stateless : no mezclar UI con lógica.


    -App (estado general compartido)
    --TodoHeader
    ---TodoCounter (stateless)
    ---TodoSearch (statefull)
    --TodoList
    ---TodoItem (statefull)



    Render props
    Las render props son una técnica avanzada que nos permite reutilizar componentes y lógica, para no tener que reinventar la rueda.

    Esta técnica se basa en pasar una función como prop a un componente, dicha función se encargará de renderizar lo que queremos que contenga este componente, removiendo así la lógica del render hacia otra parte y permitiéndonos reutilizar la lógica que contenga la función.


    Render functions

    Es un patrón , reciben una función para enviar la información






    En el ejemplo anterior renderizamos una lista con el nombre de varias personas, pero el contenido de nuestra lista no lo define el componente ListOfPeople, sino App por medio de la función render que le pasamos a ListOfPeople en sus props.



    High Order Components


    Los high order components (o componentes de orden superior) son componentes que reciben un componente y retornan otro componente con nuevas props o elementos, lo cual nos permite reutilizar lógica dentro de varios componentes.


    Y con este HOC ahora podemos reutilizar este código, y ya no tenemos que crear un estado local para cada componente, sino que le delegamos esta tarea a otro componente.





    Render props vs HOCs vs React Hooks


    Desde ahora cabe aclarar que cada herramienta está pensada para realizar diferentes tareas, por lo tanto no es una batalla como tal, sino más bien una comparación entre la funcionalidad de cada uno de estos patrones.
    Render props
    Las render props son muy útiles cuando deseamos realizar validaciones o renderizados condicionales, ya que podemos definir que es lo que vamos a mostrar en un componente desde sus props.
    HOCs
    Los high order components muestran todo su potencial cuando queremos reutilizar lógica, código e inyectar información a un componente por medio de sus props. Es cierto que estos aumentan la complejidad de nuestro código, pero si son utilizados correctamente llegan a ser una herramienta muy poderosa.
    Custom Hooks
    Los hooks de React son una herramienta que está disponible desde la versión 16.8.0, estos nos permiten encapsular lógica dentro de una función, la cual podemos utilizar tantas veces como queramos. Por ejemplo, podríamos crear un custom hook que nos permite hacer peticiones hacia cierto endpoint y que nos retorne el estado actual de la petición para saber que renderizar mientras llega la data.
