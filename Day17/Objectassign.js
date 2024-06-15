// Default settings
const defaultSettings = {
    theme: "light",
    notifications: true,
    language: "en",
    settings: {
        volume:40,
        resolution: "1080p"
    }};
// User-defined settings
const userSettings = {
    theme: "dark",
    language: "Hn",
    settings: {
        volume:80
    }};
// Using the customAssign function to merge settings
const finalSettings = customAssign({}, defaultSettings, userSettings);
console.log(finalSettings);
{/*  
 Output
 {
     theme: "dark",
     notifications: true,
     language: "Hn",
     settings: {
         volume: 80,
       resolution: "1080p"
    }} 
*/}

function customAssign(target, ...sources) {
    if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
    }

    let to = Object(target);

    for (let source of sources) {
        if (source != null) {
            for (let key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    to[key] = source[key];
                }
            }

            let symbols = Object.getOwnPropertySymbols(source);
            for (let symbol of symbols) {
                if (Object.prototype.propertyIsEnumerable.call(source, symbol)) {
                    to[symbol] = source[symbol];
                }
            }
        }
    }

    return to;
}
