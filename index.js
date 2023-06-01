const opn = require("opn")
const gerator = require('./src/menugenerate')

const malito=require('./src/malito')
const ownner = { user: "+92 3237045919" }
const ascii= require('./src/ascii')
const readline=require('readline-sync')

 async function main() {
    console.log(ascii.logo())  
    console.log(ascii.menu())
        let comand = readline.question('comando: ')
        switch (comand) {
            case '1':
                let number = readline.question("number: ")
                await opn(`https://wa.me/${number}`)
                console.clear()
                main()
            case '2':
              
                let title = readline.question("titulo: ")
                let rules = []
                let key = 1
                while (key == 1) {
                    console.log("☢ adicionar nova regra? ☢\n[1]-sim\n[0]-não")
                    key = readline.question("comando: ")
                    if (key == 1) {
                        let rule = readline.question("escreva a regra: ")
                        rules.push(rule)
                        console.log(' \u001b[32m regra adicionada \u001b[0m')
                    } else {
                        key = 0
                        console.clear()
                    }
                }
                console.clear()
                 const rulex= await gerator.genemenu(title, rules)
                let alvin=readline.question('numero para enviar: ')
                await opn(`https://api.whatsapp.com/send?phone=${alvin}&text=${rulex}`)
               
                rules.splice(0, rules.length)
                await main()
                break;
            case '3':
                let aviso=readline.question("digite o aviso: ")
                let alvintwo=readline.question('numero para enviar: ')
                let avisopronto=gerator.aviso(aviso)
                await opn(`https://api.whatsapp.com/send?phone=${alvintwo}&text=${avisopronto}`)
    
                await main()
            break
            case '4':
            console.clear()
            console.log(ascii.aviso('maill text disactive/ number fakes. No me responsibility to use indevide.'))
             let numb=readline.question("numerber: ")
              await  malito.disactive(number)
              main()
            break
            case '5':
                console.clear()
              console.log(ascii.aviso('maill text \033[41;1;37m Negritodroid \033[0m  \u001b[31m'))
                let numbtwo=readline.question("number: ")
                  await  malito.desbanir(numbertwo)
                  main()
                break
    
            case '9':
                let me = ownner.user
                let strig = 'bot man! just api whatsapp!'
                await opn(`https://api.whatsapp.com/send?phone=${me}&text=${strig}`)
                console.clear()
                main()
                break;
            case '0':
                console.log("bye")
            break
            default:
                console.clear()
                console.log("\n command invalid!\n")
               await main()
            break
        }
    }

main()
