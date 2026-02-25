# Setup: API para Invitados (una sola vez)

## Paso 1: Crear Google Apps Script

1. Ve a [script.google.com](https://script.google.com)
2. Clic en **"Nuevo proyecto"**
3. Borra el código que aparece y pega el siguiente:

```javascript
function doGet(e) {
  var action = (e && e.parameter && e.parameter.action) || '';

  if (action === 'getGuests') {
    var sheet = getOrCreateSheet();
    var data = sheet.getRange('A1').getValue();
    if (!data) data = '[]';
    return ContentService.createTextOutput(data).setMimeType(ContentService.MimeType.JSON);
  }

  return ContentService.createTextOutput('[]').setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  var action = (e && e.parameter && e.parameter.action) || '';

  if (action === 'saveGuests') {
    var sheet = getOrCreateSheet();
    // Data comes from form submission (e.parameter.data) or fetch body (e.postData.contents)
    var data = (e.parameter && e.parameter.data) ? e.parameter.data : e.postData.contents;
    sheet.getRange('A1').setValue(data);
    // Also update timestamp
    sheet.getRange('B1').setValue(new Date().toISOString());
    return ContentService.createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  return ContentService.createTextOutput(JSON.stringify({ error: 'unknown action' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getOrCreateSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('GuestData');
  if (!sheet) {
    sheet = ss.insertSheet('GuestData');
  }
  return sheet;
}
```

4. Ponle nombre al proyecto: **"XV Regina API"**
5. Guarda (Ctrl+S)

## Paso 2: Vincular con Google Sheet

1. Antes de desplegar, abre cualquier Google Sheet (puede ser el mismo de las confirmaciones)
2. Ve a **Extensiones > Apps Script**
3. Pega el mismo código ahí (así queda vinculado al Sheet)
4. O desde el editor de Apps Script (script.google.com), ve a **Resources > Advanced Google Services** y asegúrate de que Google Sheets API esté habilitado

**Alternativa más simple:** Desde el editor del script:
1. Clic en el ícono de **"+"** junto a "Servicios" en el panel izquierdo
2. Si aparece "Sheets API", agrégalo (si no aparece, no es necesario — ya funciona por defecto)

## Paso 3: Desplegar como Web App

1. Clic en **Desplegar > Nueva implementación**
2. Tipo: **Aplicación web**
3. Configurar:
   - **Ejecutar como:** "Yo" (tu cuenta)
   - **Quién tiene acceso:** "Cualquier persona"
4. Clic en **Desplegar**
5. **¡COPIA LA URL!** Se ve así: `https://script.google.com/macros/s/XXXXX/exec`

## Paso 4: Pegar URL en el código

1. Abre `dispatch.html`
2. Busca la línea: `const API_URL = '';`
3. Pega tu URL: `const API_URL = 'https://script.google.com/macros/s/XXXXX/exec';`

4. Abre `index.html`
5. Busca la misma línea: `const API_URL = '';`
6. Pega la misma URL

## Paso 5: Push final

```bash
cd ~/Projects/Macintech
git add public/XVRegina/
git commit -m "feat: API backend for guest management"
git push
```

## ¡Listo! 🎉

A partir de ahora:
- Editas invitados en el dispatcher → se guardan automáticamente en Google
- Los invitados ven sus datos actualizados sin que hagas push
- Puedes agregar/eliminar invitados desde el dispatcher
