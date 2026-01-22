# 📋 Sistema de Gestión de Reingresos - SENA

![Next.js](https://img.shields.io/badge/Next.js-16.0.0-black)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.9-38bdf8)

## 📖 Descripción

Sistema web para la gestión y registro de solicitudes de reingreso de aprendices en los diferentes centros de formación del SENA. La aplicación permite capturar, validar y enviar información relacionada con procesos de reingreso, manteniendo un control centralizado de las solicitudes.

## ✨ Características Principales

- 📝 **Formulario Interactivo**: Interfaz amigable para captura de datos de reingresos
- ✅ **Validación en Tiempo Real**: Validación de campos requeridos antes del envío
- 🎨 **UI Moderna**: Diseño responsivo con Tailwind CSS y componentes Radix UI
- 🔄 **Gestión de Estado**: Manejo eficiente del estado con Zustand
- 🏗️ **Arquitectura Limpia**: Implementación de Domain-Driven Design (DDD)
- 🌐 **Integración API**: Conexión con backend mediante Axios
- 🔔 **Notificaciones**: Sistema de toasts para feedback al usuario
- 🎯 **TypeScript**: Tipado fuerte para mayor seguridad y mantenibilidad

## 🏛️ Arquitectura

El proyecto sigue una arquitectura limpia basada en Domain-Driven Design (DDD):

```
src/
├── config/           # Configuración de la aplicación
│   ├── axiosInstance.ts  # Cliente HTTP configurado
│   └── index.ts
├── core/             # Núcleo de la aplicación
│   ├── domain/       # Entidades y tipos de dominio
│   │   ├── reingreso.ts  # Modelos de datos
│   │   └── index.ts
│   ├── infrastructure/  # Capa de infraestructura
│   │   ├── reingreso.infrastructure.ts  # Implementación API
│   │   └── index.ts
│   └── usecases/     # Casos de uso
│       ├── reingresoUseCase.ts  # Lógica de negocio
│       └── index.ts
├── hooks/            # React Hooks personalizados
│   └── useUploadReingreso.ts
└── stores/           # Gestión de estado global
    └── useReingresoStore.ts
```

### Capas de la Arquitectura

1. **Domain (Dominio)**: Define las entidades y tipos de datos
   - `ReingresoCreateRequest`: Estructura de datos de entrada
   - `ReingresoCreateResponse`: Estructura de respuesta del servidor

2. **Infrastructure (Infraestructura)**: Maneja la comunicación con servicios externos
   - `ReingresoInfrastructure`: Implementa las llamadas HTTP al backend

3. **Use Cases (Casos de Uso)**: Contiene la lógica de negocio
   - `createReingresoUseCase`: Procesa la creación de reingresos

4. **Presentation (Presentación)**: Componentes React y UI
   - Formularios, componentes visuales y manejo de interacciones

## 🚀 Tecnologías Utilizadas

### Core
- **Next.js 16.0.0**: Framework de React para producción
- **React 19.2.0**: Biblioteca para construir interfaces de usuario
- **TypeScript 5.x**: Superset de JavaScript con tipado estático

### Estado y Formularios
- **Zustand 5.0.8**: Gestión de estado ligera y escalable
- **React Hook Form 7.60.0**: Manejo eficiente de formularios
- **Zod 3.25.76**: Validación de esquemas

### UI/UX
- **Tailwind CSS 4.1.9**: Framework CSS utility-first
- **Radix UI**: Componentes accesibles y sin estilos
- **Lucide React**: Iconos modernos
- **Sonner**: Sistema de notificaciones toast
- **next-themes**: Soporte para tema claro/oscuro

### Utilidades
- **Axios 1.13.1**: Cliente HTTP
- **date-fns 4.1.0**: Manipulación de fechas
- **class-variance-authority**: Gestión de variantes de clases CSS

## 📋 Modelo de Datos

### ReingresoCreateRequest

```typescript
{
  año: string                 // Año de la solicitud (2023, 2024, 2025)
  fechaRegistro: string       // Fecha de registro en formato YYYY-MM-DD
  codigoCentro: string        // Código del centro de formación
  centroFormacion: string     // Nombre del centro de formación
  tipoDocumento: string       // Tipo de documento del aspirante
  numeroDocumento: string     // Número de documento del aspirante
  aspirante: string           // Nombre completo del aspirante
  numeroActa: string          // Número de acta del reingreso
  carpetaURL: string          // URL de la carpeta con documentación
  numeroResolucion: string    // Número de resolución
  fechaSolicitud: string      // Fecha de la solicitud
  fichaOrigen: string         // Ficha de origen del aprendiz
  fichaDestino: string        // Ficha destino del reingreso
  opcionAplicada: string      // Opción aplicada en el proceso
  estadoSofia: string         // Estado en el sistema SOFÍA
}
```

### Centros de Formación Disponibles

- **9307**: Centro de Comercio y Servicios
- **9221**: Centro de Teleinformática y Producción Industrial
- **9113**: Centro Agropecuario

## 🛠️ Instalación

### Requisitos Previos

- Node.js 18.x o superior
- yarn 1.x o superior (recomendado) o npm

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone <url-del-repositorio>
cd Reingresos-Front
```

2. **Instalar dependencias**
```bash
yarn install
# o
npm install
```

3. **Configurar variables de entorno**

Crear un archivo `.env.local` en la raíz del proyecto:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000/api/items
```

4. **Ejecutar en modo desarrollo**
```bash
yarn dev
# o
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## 📝 Scripts Disponibles

```bash
# Desarrollo
yarn dev          # Inicia el servidor de desarrollo

# Producción
yarn build        # Construye la aplicación para producción
yarn start        # Inicia el servidor de producción

# Calidad de código
yarn lint         # Ejecuta el linter (ESLint)
```

## 🔧 Configuración del Backend

La aplicación se conecta a un backend API REST. La URL base se configura mediante la variable de entorno:

```
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000/api/items
```

### Endpoint Principal

**POST** `/`
- **Descripción**: Crea un nuevo registro de reingreso
- **Body**: `ReingresoCreateRequest`
- **Response**: `ReingresoCreateResponse`

```typescript
// Respuesta exitosa
{
  success: true,
  id: "uuid-del-registro",
  message: "Reingreso creado exitosamente"
}

// Respuesta con error
{
  success: false,
  message: "Mensaje de error",
  data: { ... }
}
```

## 🎨 Componentes Principales

### ReingresoForm
Formulario principal para captura de datos de reingresos.

**Características:**
- Validación de campos requeridos
- Autocompletado de centro de formación según código
- Selección de fechas con calendario
- Feedback visual de errores
- Notificaciones de éxito/error

### Header
Componente de cabecera con el logo del SENA y branding.

### Theme Provider
Proveedor de temas para soporte de modo claro/oscuro.

## 📦 Estructura de Componentes UI

La carpeta `components/ui/` contiene componentes reutilizables basados en Radix UI:

- **Formularios**: Input, Select, Checkbox, Radio Group, Textarea
- **Navegación**: Button, Navigation Menu, Tabs, Breadcrumb
- **Overlay**: Dialog, Alert Dialog, Popover, Tooltip
- **Feedback**: Alert, Toast, Progress, Spinner
- **Layout**: Card, Separator, Scroll Area, Sidebar
- **Visualización**: Table, Calendar, Chart, Badge

## 🔐 Gestión de Estado

El estado de la aplicación se maneja con **Zustand**, proporcionando:

### Store Principal: `useReingresoStore`

```typescript
// Estado
- formData: ReingresoCreateRequest  // Datos del formulario
- loading: boolean                   // Estado de carga
- error: string | null               // Mensajes de error
- response: ReingresoCreateResponse  // Respuesta del servidor

// Acciones
- setFormField()      // Actualizar campo individual
- resetForm()         // Reiniciar formulario
- submitReingreso()   // Enviar datos al servidor
```

### Custom Hook: `useUploadReingreso`

Hook que expone el store de forma conveniente para los componentes:

```typescript
const { 
  formData, 
  loading, 
  error, 
  setFormField, 
  submitReingreso, 
  resetForm 
} = useUploadReingreso()
```

## 🎯 Flujo de Trabajo

1. **Usuario llena el formulario** con todos los datos requeridos
2. **Validación local** verifica que todos los campos estén completos
3. **Envío al backend** mediante `submitReingreso()`
4. **Procesamiento** en el use case → infrastructure → API
5. **Feedback al usuario** mediante notificaciones toast
6. **Limpieza del formulario** tras envío exitoso

## 🧪 Validaciones

### Campos Requeridos
Todos los campos del formulario son obligatorios:
- ✅ Año
- ✅ Fecha de Registro
- ✅ Código de Centro
- ✅ Centro de Formación
- ✅ Tipo de Documento
- ✅ Número de Documento
- ✅ Aspirante
- ✅ Número de Acta
- ✅ Carpeta URL
- ✅ Número de Resolución
- ✅ Fecha de Solicitud
- ✅ Ficha Origen
- ✅ Ficha Destino
- ✅ Opción Aplicada
- ✅ Estado SOFÍA

### Validación Pre-envío
```typescript
const validateForm = () => {
  // Verifica que todos los campos requeridos estén llenos
  // Retorna false si algún campo está vacío
}
```

## 📱 Responsividad

La aplicación está optimizada para todos los dispositivos:
- 📱 **Móvil**: < 768px
- 💻 **Tablet**: 768px - 1024px
- 🖥️ **Desktop**: > 1024px

Grid adaptativo: `grid-cols-1 md:grid-cols-2`

## 🎨 Temas

Soporte para modo claro y oscuro mediante `next-themes`:
- 🌞 Tema claro (por defecto)
- 🌙 Tema oscuro
- ⚙️ Automático (según preferencias del sistema)

## 🚀 Deploy

### Vercel (Recomendado)

1. Conectar repositorio con Vercel
2. Configurar variables de entorno
3. Deploy automático en cada push

### Build Manual

```bash
# Crear build de producción
yarn build

# Ejecutar servidor de producción
yarn start
```

## 🤝 Contribución

1. Fork el proyecto
2. Crear rama para feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add: AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto es propiedad del SENA (Servicio Nacional de Aprendizaje).

## 👥 Soporte

Para soporte técnico o consultas, contactar al equipo de desarrollo.

---

**Desarrollado para el SENA** 🇨🇴
