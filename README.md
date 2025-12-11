# 📚 CRUD de Libros con Firebase

Proyecto educativo de React + Firebase para gestión de libros. Este repositorio contiene la estructura base con componentes y estilos implementados. Los estudiantes deben completar la integración con Firebase y las operaciones CRUD.

## 🎯 Objetivo del Proyecto

Este repositorio proporciona la base visual y estructural de una aplicación de gestión de libros. Los estudiantes deberán:

- Configurar y conectar Firebase al proyecto
- Implementar las operaciones CRUD (Crear, Leer, Actualizar, Eliminar)
- Integrar la lógica de negocio con los componentes proporcionados

## 🛠️ Tecnologías Utilizadas

- **React** - Biblioteca de JavaScript para construir interfaces de usuario
- **Vite** - Herramienta de construcción rápida para proyectos frontend
- **React Router** - Navegación entre páginas
- **Firebase** - Backend as a Service (Firestore Database)
- **Styled Components** - Estilos CSS-in-JS

## 📋 Prerequisitos

Antes de comenzar, asegúrate de tener instalado:

- Node.js (versión 16 o superior)
- npm o yarn
- Una cuenta de Firebase
- Editor de código (VS Code recomendado)

## 🚀 Instalación

1. Clona este repositorio:
```bash
git clone <url-del-repositorio>
cd <proyecto>
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`


## ✅ Tareas a Completar

### 1. Configuración de Firebase

**Objetivo:** Conectar la aplicación con Firebase.

- [ ] Crear un proyecto en [Firebase Console](https://console.firebase.google.com/)
- [ ] Habilitar Firestore Database
- [ ] Crear el archivo `src/firebase/config.js`
- [ ] Agregar las credenciales de Firebase
- [ ] Inicializar Firebase en la aplicación


### 2. Listar Libros (READ)

**Objetivo:** Mostrar todos los libros almacenados en Firestore.

- [ ] Importar las funciones necesarias de Firestore (`collection`, `getDocs`)
- [ ] Crear un estado para almacenar los libros
- [ ] Implementar `useEffect` para cargar los libros al montar el componente
- [ ] Mapear los libros en el componente de lista


### 3. Registrar Libro (CREATE)

**Objetivo:** Agregar un nuevo libro a Firestore.

- [ ] Importar `addDoc` y `collection` de Firestore
- [ ] Capturar los datos del formulario
- [ ] Implementar la función para guardar el libro
- [ ] Manejar errores y mostrar mensaje de éxito
- [ ] Redirigir a la página principal después de guardar


### 4. Editar Libro (UPDATE)

**Objetivo:** Actualizar la información de un libro existente.

- [ ] Obtener el libro por ID usando `getDoc` y `doc`
- [ ] Prellenar el formulario con los datos actuales
- [ ] Implementar la función de actualización con `updateDoc`
- [ ] Redirigir después de actualizar

### 5. Eliminar Libro (DELETE)

**Objetivo:** Eliminar un libro de Firestore.

- [ ] Importar `deleteDoc` y `doc` de Firestore
- [ ] Implementar la función de eliminación
- [ ] Agregar confirmación antes de eliminar
- [ ] Actualizar la lista después de eliminar


## 📚 Recursos de Aprendizaje

### Firebase
- [Documentación oficial de Firebase](https://firebase.google.com/docs)

### React
- [React Hooks](https://react.dev/reference/react)
- [React Router](https://reactrouter.com/)
- [Styled Components](https://styled-components.com/)


## 📝 Licencia

Este proyecto es de uso educativo.

---

**¡Buena suerte con tu proyecto! 🚀**