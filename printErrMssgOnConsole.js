import { createRequire } from 'node:module';
const require = createRequire(import.meta.url); 
const enJSON = require('./i18n/en.json'); //importing .json into ES Modules 
const deJson = require('./i18n/de.json');


var currentLanguage = 'de';
var translationObject = enJSON;
if (currentLanguage === 'de') {
    translationObject = deJson;
}
export function printErrorMessageOnConsole(bmsMonitoringItem) {
    switch (bmsMonitoringItem) {
        case 'temp': console.log(translationObject.tempOutOfRange); break;
        case 'soc': console.log(translationObject.socOutOfRange); break;
        case 'cr': console.log(translationObject.crOutOfRange); break;
    }

}