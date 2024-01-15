import requests, json, os, signal
from colorama import Fore

def def_handler(sig, frame):
    print(Fore.RED + "\n[!] " + Fore.RESET + "Saliendo...")
    exit(1)

signal.signal(signal.SIGINT, def_handler)

#variables globales
api_url = "https://javierdz.xyz/api/v1/main.json" #Esto se puede cambiar al gusto de cada uno, he puesto mi API de ejemplo
r = requests.get(api_url) #Definicion del request para parsearlo abajo
data = json.loads(r.text) #Parseo JSON del request a la API

def init():
    print(Fore.YELLOW + "What value would you like to get?")
    param = input(Fore.GREEN + ">  " + Fore.RESET)
    try:
        print(data[param])
    except KeyError:
        print(Fore.RED + "Unable to locate data")
        init()
    init()

def checkUpdates():
    update_url = "https://javierdz.xyz/api/v1/main.json"
    upreq = requests.get(update_url)
    data = json.loads(upreq.text)
    updateA = data['update']
    if updateA == "yes":
        if os.name == "nt":
            os.system("powershell -c Invoke-WebRequest https://javierdz.xyz/api/v1/resources/api_debug.py")
        else:
            print("Are you running linux? [Y/n]")
            isLinux = input(">")
            if isLinux == "y":
                os.system("wget https://javierdz.xyz/api/v1/resources/api_debug.py | python3")
            else:
                print(Fore.RED + "[!] Unable to detect your system")
    else:
        init()




            
if __name__ == "__main__":
    print(Fore.YELLOW + "Javierdz API Debugger - Version 1.0" + Fore.RESET)
    print(Fore.GREEN + "host: " + api_url + Fore.RESET)
    checkUpdates()