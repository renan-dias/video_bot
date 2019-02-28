const readline = require('readline-sync')
function start(){
    const content = {}

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()
    
    function askAndReturnSearchTerm(){
        return readline.question("Digite um termo do Wikipedia: ")
    }
    function askAndReturnPrefix(){
        const prefixs = ['O que e','A historia de','Quem e']
        const selectedPrefixIndex = readline.keyInSelect(prefixs, 'Escolha uma opcao: ')
        const selectedPrefixText = prefixs[selectedPrefixIndex]
        return selectedPrefixText
    }
    console.log(content)
}
start()