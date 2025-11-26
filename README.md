# RentAdmin - Versión GitHub Pages

Esta es una versión simplificada del sistema de gestión de alquileres RentAdmin, optimizada para funcionar completamente en GitHub Pages usando localStorage para almacenar los datos.

## ✅ Características

- **Aplicación completamente estática** - No requiere servidor backend
- **Datos simulados** - Utiliza localStorage para persistencia local
- **Dashboard interactivo** - Muestra estadísticas en tiempo real
- **Sistema de autenticación** - Simulado con credenciales predefinidas
- **Responsive design** - Funciona en desktop y móvil
- **Datos de demostración** - Incluye propiedades, clientes, rentas y gastos de ejemplo

## 🚀 Instalación Rápida

### Opción 1: Subir a GitHub (Recomendado)

1. **Crea un nuevo repositorio en GitHub**
   ```bash
   # Ir a https://github.com/new
   # Nombre del repositorio: rentadmin
   # Marcar como público
   ```

2. **Sube los archivos**
   ```bash
   cd /workspace/github-pages-deploy
   git init
   git add .
   git commit -m "Initial commit - RentAdmin GitHub Pages"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/rentadmin.git
   git push -u origin main
   ```

3. **Configura GitHub Pages**
   - Ve a Settings → Pages en tu repositorio
   - Source: Deploy from a branch
   - Branch: main / root
   - Click Save

4. **¡Listo!** 
   - Tu sitio estará disponible en: `https://TU-USUARIO.github.io/rentadmin/`

### Opción 2: Uso Local

```bash
cd /workspace/github-pages-deploy

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Preview de la build
npm run preview
```

## 🔐 Credenciales de Acceso

- **Email:** admin@rentadmin.com
- **Contraseña:** admin123

## 📁 Estructura del Proyecto

```
rentadmin/
├── public/
│   └── index.html          # Archivo HTML principal
├── src/
│   ├── components/         # Componentes reutilizables
│   ├── contexts/          # Contextos de React (Auth)
│   ├── layouts/           # Layouts de la aplicación
│   ├── pages/             # Páginas principales
│   ├── services/          # Servicios de datos (localStorage)
│   ├── App.jsx            # Componente principal
│   ├── main.jsx           # Punto de entrada
│   └── index.css          # Estilos con Tailwind
├── package.json           # Dependencias y scripts
├── vite.config.js         # Configuración de Vite
├── tailwind.config.js     # Configuración de Tailwind
└── postcss.config.js      # Configuración de PostCSS
```

## 🛠️ Tecnologías Utilizadas

- **React 18** - Framework de JavaScript
- **Vite** - Herramienta de build rápida
- **Tailwind CSS** - Framework de estilos
- **localStorage** - Almacenamiento local del navegador

## 📊 Datos de Demostración

La aplicación incluye datos de ejemplo:

### Propiedades (2)
- Apartamento Centro - $1,500/mes (disponible)
- Casa Residencial - $2,200/mes (ocupada)

### Clientes (2)
- Juan Pérez - juan@example.com
- María García - maria@example.com

### Estadísticas del Dashboard
- Total de propiedades: 2
- Ocupadas: 1
- Ingresos mensuales: $2,200
- Gastos: $1,550
- Utilidad neta: $650

## 🔧 Personalización

### Cambiar Datos Iniciales
Edita el archivo `src/services/localDataService.js` para modificar los datos de demostración.

### Cambiar Tema/Colores
Modifica la configuración en `tailwind.config.js` para cambiar los colores.

### Cambiar URL Base
Si tu repositorio tiene un nombre diferente, actualiza `base` en `vite.config.js`.

## 📱 Responsive

La aplicación es completamente responsive y funciona en:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚨 Limitaciones

- **Datos locales**: Los datos se guardan solo en el navegador local
- **Sin sincronización**: No hay backup ni sincronización entre dispositivos
- **Sin usuarios múltiples**: Funciona solo para un usuario por navegador
- **Sin backend**: No puede integrarse con bases de datos reales

## 💡 Próximos Pasos

Si necesitas más funcionalidades:
1. **Backend completo**: Usar la versión con Node.js/Express
2. **Base de datos**: Integrar con PostgreSQL, MySQL o MongoDB
3. **Autenticación real**: Implementar con JWT o OAuth
4. **Pagos**: Integrar con pasarelas de pago como Stripe
5. **Notificaciones**: Sistema de alertas por email/SMS

## 🎯 Versión Completa

Para la versión completa con backend, consulta el proyecto en `/workspace/rentadmin_backend/` que incluye:
- API REST completa
- Base de datos SQLite
- Autenticación JWT
- Gestión de archivos
- Validación de datos
- Middleware de seguridad

## 📞 Soporte

Si encuentras algún problema:
1. Verifica que GitHub Pages esté habilitado
2. Asegúrate de que la rama `main` tenga los archivos en la raíz
3. Verifica la configuración de `base` en `vite.config.js`
4. Revisa la consola del navegador para errores

---

**¡Tu aplicación RentAdmin está lista para funcionar en GitHub Pages!** 🎉