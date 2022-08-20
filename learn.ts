function undifHandler(): string{
    return "ur var can't be undefined"
}

const variable:undefined = undefined


function varcheck(vari:any): any {
    return vari!.undifHandler
}

console.info(varcheck(variable))