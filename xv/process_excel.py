import pandas as pd
import json
import os
import shutil

def process_invitados(file_path):
    # Read without headers since the Excel has no header row
    df = pd.read_excel(file_path, header=None)
    df.columns = ['NOMBRE', 'ADULTOS', 'MENORES']
    
    invitados_list = []
    guest_id = 1
    
    # Section headers to skip (they end with ":" or are category labels)
    section_markers = ['HIDALGO:', 'MONTERREY:', 'AMIGOS DE REGINA:', 
                       'AMIGOS DE CARLITOS:', 'GRUPO DE REGINA']
    
    for index, row in df.iterrows():
        name = str(row['NOMBRE']).strip()
        
        # Skip empty rows and section headers
        if name == 'nan' or not name:
            continue
        
        # Skip section markers (lines that are labels, not guests)
        is_section = False
        for marker in section_markers:
            if marker in name.upper():
                is_section = True
                break
        if is_section:
            continue
        
        # Parse adults - handle NaN and non-numeric values
        try:
            adult_val = pd.to_numeric(row['ADULTOS'], errors='coerce')
            adults = int(adult_val) if pd.notna(adult_val) else 0
        except:
            adults = 0
            
        # Parse minors - handle NaN, non-numeric values, and "*"
        try:
            minor_val = pd.to_numeric(row['MENORES'], errors='coerce')
            minors = int(minor_val) if pd.notna(minor_val) else 0
        except:
            minors = 0
        
        total = adults + minors
        
        # Skip rows where both are 0 (like RUPER, GONZALO, etc. - these might be TBD)
        # Actually keep them but mark as 0 pases - the user may update later
        
        # Determine pase type
        is_personal = False
        if minors >= 1 and adults == 0:
            # Minor only = PASE PERSONAL (like Regina's friends)
            is_personal = True
            total = minors  # Use minors count
        
        if total == 0:
            pases_text = "POR CONFIRMAR"
        elif is_personal:
            pases_text = "PASE PERSONAL"
        elif total == 1:
            pases_text = "1 PASE"
        else:
            pases_text = f"{total} PASES"
            
        invitado_data = {
            "id": guest_id,
            "name": name,
            "adults": adults,
            "minors": minors,
            "total": total,
            "is_personal": is_personal,
            "pases_text": pases_text
        }
        invitados_list.append(invitado_data)
        guest_id += 1
        
    return invitados_list

if __name__ == "__main__":
    file_path = 'Invitados.xlsx'
    
    # Look for the file in common locations
    search_paths = [
        file_path,
        os.path.expanduser('~/Projects/InvitacionesXV/Invitados.xlsx'),
    ]
    
    found_path = None
    for p in search_paths:
        if os.path.exists(p):
            found_path = p
            break
    
    if found_path:
        data = process_invitados(found_path)
        
        # Save JSON locally
        with open('invitados.json', 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=4)
        
        # Also copy to the public XVRegina folder for Netlify deploy
        xv_regina_path = os.path.expanduser('~/Projects/Macintech/public/XVRegina/invitados.json')
        xv_regina_dir = os.path.dirname(xv_regina_path)
        if os.path.isdir(xv_regina_dir):
            with open(xv_regina_path, 'w', encoding='utf-8') as f:
                json.dump(data, f, ensure_ascii=False, indent=4)
            print(f"Also saved to {xv_regina_path}")
        
        print(f"\n✅ Processed {len(data)} guests successfully!")
        print(f"JSON saved to: invitados.json")
        print(f"\nFirst 10 guests:")
        for g in data[:10]:
            print(f"  ID {g['id']:3d}: {g['name']:<30s} → {g['pases_text']}")
        print(f"  ...")
        print(f"\nLast 5 guests:")
        for g in data[-5:]:
            print(f"  ID {g['id']:3d}: {g['name']:<30s} → {g['pases_text']}")
    else:
        print(f"❌ Excel file not found. Searched in:")
        for p in search_paths:
            print(f"  - {p}")
