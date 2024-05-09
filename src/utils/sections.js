function searchSections(file){
    const page = []
    var parraf = []

    const inLinePattern = /.+\$(.*)\$.*/gi
    const lines = file.split("\n")
    let readType = null
    let aux = ""

    lines.forEach( line => {
        if (line == ""){
            page.push(parraf)
            parraf = []
        }
        else if ( /^\$\$|^\\begin\(equation\)/.test(line) ){ // Block
            if (readType !== null){ // mode write block
                parraf.push({
                    type: 'block',
                    content: aux
                })

                aux = ""
                readType = null
            }
            else {
                readType = 'b'
            }
        }
        else if (readType) {
            aux += line+" \\\\ "
        }
        else { // Linea
            let temp = line.replace(/\\\$/g, '\\money') // Remove \$ for equations
            let match = inLinePattern.exec( temp ) // Search equations
            const _break = /\\\\$|\\newline$/.test(temp)
            temp = temp.replace(/\\\\$|\\newline$/, "")

            if ( match !== null ){
                const all = temp.split('$'+match[1]+'$')

                parraf.push({
                    type: 'text',
                    content: all[0],
                    break: _break
                })
                parraf.push({
                    type: 'eq',
                    content: match[1],
                    break: _break
                })
                parraf.push({
                    type: 'text',
                    content: all[1],
                    break: _break
                })
            } else {
                parraf.push({
                    type: 'text',
                    content: temp,
                    break: _break
                })
            }
        }
    });

    page.push(parraf)

    return page
}

export default searchSections