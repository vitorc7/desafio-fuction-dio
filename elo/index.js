elo(110,5)

function elo (vitorias, derrotas) {
    let resultado = vitorias - derrotas

    if(resultado <= 10) {
        console.log("O Herói tem de saldo de **{"+resultado +"}** está no nível de **{Ferro}**")
    }else if (resultado > 10 && resultado <= 20) {
        console.log("O Herói tem de saldo de **{"+resultado +"}** está no nível de **{Bronze}**")
    }else if (resultado > 20 && resultado <= 50) {
        console.log("O Herói tem de saldo de **{"+resultado +"}** está no nível de **{Prata}**")
    }else if (resultado > 50 && resultado <= 80) {
        console.log("O Herói tem de saldo de **{"+resultado +"}** está no nível de **{Ouro}**")
    }else if (resultado > 80 && resultado <= 90) {
        console.log("O Herói tem de saldo de **{"+resultado +"}** está no nível de **{Diamante}**")
    }else if (resultado > 90 && resultado <= 100) {
        console.log("O Herói tem de saldo de **{"+resultado +"}** está no nível de **{Lendário}**")
    }else if (resultado > 100) {
        console.log("O Herói tem de saldo de **{"+resultado +"}** está no nível de **{Imortal}**")
    }
 }

