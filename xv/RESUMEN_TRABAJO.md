# Resumen de Trabajo - Invitación XV Regina (24 Feb 2026)

Este documento resume lo que hemos avanzado hoy para que tengas todo a la mano al cambiar de contexto o hacer el deploy.

## ✅ Lo que ya está listo
1. **Rediseño Premium**: Reconstruimos la invitación con un diseño de *long-scrolling* que imita la original. Usamos fondos celestiales, texturas plateadas y tipografía elegante (`Aboreto`, `Rosarivo`, `Arizonia`).
2. **Dynamic Data**: La invitación lee automáticamente el `?id=X` de la URL y personaliza:
   - Nombre del invitado/familia.
   - Cantidad de pases (calculada de tu Excel: Adultos + Menores).
   - Tipo de pase (FAMILIA o PERSONAL).
3. **WhatsApp RSVP**: El botón de confirmación redacta automáticamente un mensaje y lo envía al contacto del anfitrión (+52 81 8206 4610).
4. **Despachador de Invitaciones**: Creamos `whatsapp_dispatcher.html` para que envíes los 139 links personalizados de forma masiva y fácil.
5. **Preparación para Deploy**: Ya copiamos los archivos necesarios a la carpeta `/Macintech/public/XVRegina/`.

## 📂 Archivos en Macintech (Listos para Git Push)
Ubicación: `public/XVRegina/`
- `index.html` (Invitación principal)
- `invitados.json` (Base de datos de los 139 invitados)
- `whatsapp_dispatcher.html` (Herramienta de envío)

## 🚀 Próximos Pasos (En Macintech)
1. **Git Push**: 
   ```bash
   git add public/XVRegina
   git commit -m "feat: agregar invitacion XV Regina"
   git push
   ```
2. **Verificación**: Una vez que Netlify termine el build, el link será:
   `https://macintech.it.com/XVRegina/index.html?id=1`
3. **Ajustes en Celular**: Probar el link en móvil y verificar que no haya scroll horizontal o imágenes estiradas.

---
*Nota: Ten cuidado con los archivos borrados que aparecen en tu repositorio de Macintech (`src/components/ui/`) al hacer el commit.*
