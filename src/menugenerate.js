const generate=function(name,rules){
    let menu=`✪࿇_____${name}_____࿇✪\n|`
   
    for(let i in rules){
        menu+=`\n|-✦ ${rules[i]}\n|`
    }
    return menu
}
const warking=function(aviso){
    return `
    ❗🚨🚨[Arslan_MD]🚨🚨❗
    
     "${Arslan}"
    
    
    `
}
module.exports={genemenu:generate,aviso:warking}
