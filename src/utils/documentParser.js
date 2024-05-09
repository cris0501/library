import codeSections from "./sections.json"

function readFile(_document, callBack) {
    let file = null;
    let reader = new FileReader();

    reader.onload = (e) => {
      file = e.target.result;
      callBack(file)
    };
    
    reader.readAsText(_document);
}

function searchSections(file){
    const regex = /\$([\s\S*?]\$)/g
    let notes = {
        count: 0,
        notes: []
    };

    let allOptions = { // Bloques completos de opciones, cada elemento tiene opciones
        count: 0,
        allOptions: []
    }

    let match;
    while( (match = regex.exec(file) !== null ))
}

function init(e, setTex){
    let _document = e.target.files[0];
    readFile(_document, (file) => {
        setTex(file)
    })
    // setTex(readFile(_document));
}

export default init