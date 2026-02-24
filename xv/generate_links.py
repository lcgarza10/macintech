import json

# Cambia esta URL por la URL donde vayas a subir la invitación final
BASE_URL = "https://tu-dominio-temporal.com/invitacion"

def generate_links():
    with open('invitados.json', 'r', encoding='utf-8') as f:
        invitados = json.load(f)
    
    print(f"{'Invitado':<30} | {'Link Personalizado'}")
    print("-" * 80)
    
    with open('links_invitados.txt', 'w', encoding='utf-8') as f_out:
        for guest in invitados:
            link = f"{BASE_URL}/index.html?id={guest['id']}"
            line = f"{guest['name']:<30} | {link}"
            print(line)
            f_out.write(f"{guest['name']}: {link}\n")

if __name__ == "__main__":
    generate_links()
    print("\n¡Listo! Los links se han guardado en 'links_invitados.txt'")
