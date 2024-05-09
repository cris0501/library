import searchSections from "./sections.js"

function readFileAsync(_document) {
    return new Promise( (resolve, reject) => {
        let reader = new FileReader()

        reader.onload = (e) => {
          const file = e.target.result
          resolve(file)
        }

        reader.onerror = (e) => {
            reject(e.target.error)
        }
        
        reader.readAsText(_document)
    })
}

async function init(e, setPage){
    let _document = e.target.files[0]

    const content = await readFileAsync(_document)
        .then( (file) => {
            return file
        })
        .catch( (error) => {
            console.log(e)
        })

    setPage(searchSections(content))
}

export default init