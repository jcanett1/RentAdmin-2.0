#!/bin/bash

echo "🚀 Script de despliegue para RentAdmin - GitHub Pages"
echo "=================================================="

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo "❌ Error: No se encuentra package.json. Ejecuta este script desde la carpeta rentadmin."
    exit 1
fi

# Solicitar información del usuario
echo "📝 Configuración del repositorio:"
read -p "Tu nombre de usuario de GitHub: " GITHUB_USER
read -p "Nombre del repositorio (ej: rentadmin): " REPO_NAME

# Construir la aplicación
echo "🔨 Construyendo la aplicación..."
npm install
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Error al construir la aplicación"
    exit 1
fi

echo "✅ Aplicación construida exitosamente"

# Inicializar repositorio Git
echo "📦 Inicializando repositorio Git..."
git init
git add .
git commit -m "Initial commit - RentAdmin GitHub Pages"

# Crear rama main
git branch -M main

# Configurar repositorio remoto
echo "🔗 Configurando repositorio remoto..."
REMOTE_URL="https://github.com/${GITHUB_USER}/${REPO_NAME}.git"
git remote add origin ${REMOTE_URL}

# Subir a GitHub
echo "⬆️ Subiendo a GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 ¡Éxito! Aplicación subida a GitHub"
    echo "=================================="
    echo "📋 Próximos pasos:"
    echo "1. Ve a: https://github.com/${GITHUB_USER}/${REPO_NAME}"
    echo "2. Ve a Settings → Pages"
    echo "3. Source: Deploy from a branch"
    echo "4. Branch: main / root"
    echo "5. Click Save"
    echo ""
    echo "🌐 Tu sitio estará disponible en:"
    echo "https://${GITHUB_USER}.github.io/${REPO_NAME}/"
    echo ""
    echo "🔐 Credenciales de acceso:"
    echo "Email: admin@rentadmin.com"
    echo "Contraseña: admin123"
    echo ""
else
    echo "❌ Error al subir a GitHub"
    echo "Verifica que:"
    echo "1. El repositorio exista en GitHub"
    echo "2. Tengas permisos de escritura"
    echo "3. Las credenciales sean correctas"
fi