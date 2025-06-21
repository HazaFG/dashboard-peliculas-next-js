🚦 1️⃣ ¿Qué es Redux?
Redux es una librería para manejar estado global de una aplicación.

👉 Estado global = datos que necesitas usar en muchos componentes a la vez.

Por ejemplo:

Un carrito de compras.

Un usuario autenticado.

Un contador que se ve en varias páginas.

🍰 2️⃣ ¿Qué es un slice?
Imagina Redux como un pastel (store).

Un slice es una rebanada de ese pastel: maneja una parte del estado, por ejemplo:

counterSlice → solo sabe contar.

userSlice → maneja usuario logueado.

cartSlice → maneja carrito.

Cada slice:
✅ Define su estado inicial
✅ Define acciones (qué puede cambiar ese estado)
✅ Define reducers (las funciones que realmente cambian el estado)
