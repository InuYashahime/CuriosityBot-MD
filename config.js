/* ⚙️ Credits to:
* AzamiJs
* Elrebelde21
* GataNina-Li */

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [['994406674437', 'ShadowBot-MD 🍧', true], ['994406674437', '👑 shadow 👑', true], ['5217294888993'], ['5214531287294'], ['5492266466080'], ['5492266613038'], ['573012482597'], ['5215610314499'], ['51935531943'], ['33760536110'], ['59162714296'], ['5492964650915'], ['50558124470'], ['5214434703586'], ['18293132203'], ['573003025991']]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '+994406674437' //Ejemplo: +59309090909
global.confirmCode = ''

global.suittag = ['5214531287294']
global.mods = []
global.prems = []

//Solo desarrolladores aprobados
global.isdev = [ /* ['5217294888993'], */ ['994406674437'], ['5492266466080'], ['5492266613038'], ['573012482597'], ['5215610314499'], ['51935531943'], ['33760536110'], ['5492964650915'], ['50558124470']]

//Aqui encuentras los nombres del bot 
global.packname = 'shadow'
global.author = 'shadowBot'
global.wm = '© shadowBot-MD'
global.wm2 = 'shadow : Bot'
global.azami = 'shadow'
global.cb = 'shadowBot'


//Las Versiones Y Entre Otros
global.vs = 'V2'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '¿Azami ~ Zam?'
global.devnum = '+994 406674437'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
