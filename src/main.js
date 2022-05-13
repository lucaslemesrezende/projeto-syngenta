function getCheapestHotel (input) { //DO NOT change the function's name.
    return "Cheapest hotel name"
}

exports.getCheapestHotel = getCheapestHotel

var hoteis = [

    {
        nome: 'Lakewood',
        classificacao: 3,
        semanalRegular: 110,
        semanalRewards: 80,
        fdsRegular: 90,
        fdsRewards: 80
    },

    {
        nome: 'Bridgewood',
        classificacao: 4,
        semanalRegular: 160,
        semanalRewards: 110,
        fdsRegular: 60,
        fdsRewards: 50
            
    },

    {
        nome: 'Ridgewood',
        classificacao: 5,
        semanalRegular: 220,
        semanalRewards: 100,
        fdsRegular: 150,
        fdsRewards: 40
        
    },

]

console.log(hoteis)

console.log('Numeração de cada mês: \n 0  -  JANEIRO \n 1  -  FEVEREIRO \n 2  -  MARÇO \n 3  -  ABRIL \n 4  -  MAIO \n 5  -  JUNHO \n 6  -  JULHO \n 7  -  AGOSTO \n 8  -  SETEMBRO \n 9  -  OUTUBRO \n 10 -  NOVEMBRO \n 11 -  DEZEMBRO' )

var tipoCliente = prompt('Tipo de cliente: Regular ou Rewards?')
console.log(tipoCliente)

var datas = []
var diaDaSemana = []

var informarDatas = (dia, mes, ano) => {

    var data = new Date(ano, mes, dia)
    datas.push(data)

    var y = data.getDay()
    diaDaSemana.push(y)

      console.log(diaDaSemana)
}
console.log(datas)

var multFds = 0
  var multWeek = 0

  var nRG1 = 0, nRG2 = 0, nRG3 = 0, nFDS1 = 0, nFDS2 = 0, nFDS3 = 0
  var totalLK = 0, totalBD = 0, totalRD = 0

  var verificarDatas = () => {

      for(var i in diaDaSemana){

          if(diaDaSemana[i] == 6 || diaDaSemana[i] == 0){
              multFds++
          }else{
              multWeek++
          }
      }
  }
 
 var calcularRegular = () => {

     // console.log('Qtde semana ' + multWeek)
     // console.log('Qtde fim de semana ' + multFds)

     if(tipoCliente === 'Regular' && multWeek !== 0){

         nRG1 = hoteis[0].semanalRegular * multWeek
         nRG2 = hoteis[1].semanalRegular * multWeek
         nRG3 = hoteis[2].semanalRegular * multWeek

     }if(tipoCliente === 'Regular' && multFds !== 0){

         nFDS1 = hoteis[0].fdsRegular * multFds
         nFDS2 = hoteis[1].fdsRegular * multFds
         nFDS3 = hoteis[2].fdsRegular * multFds

     }

     totalLK = nRG1 + nFDS1
     totalBD = nRG2 + nFDS2
     totalRD = nRG3 + nFDS3

     console.log('Total Lakewood: ' + totalLK)
     console.log('Total Bridgewood: ' + totalBD)
     console.log('Total Ridgewood: ' + totalRD)

     var z = Math.min(totalLK, totalBD, totalRD)

     var array = [totalLK, totalBD, totalRD]	

     for(i=0; array.length; i++){
         
         if(array[i] == z){
             if(array[i] == array[i] && array[i] == array[i + 1] || array[i] == array[i] && array[i] == array[i + 2] ){
                 if(hoteis[i].classificacao > hoteis[i + 1].classificacao){
                      console.log('Lakewood')
                      break
                 }
                 else if (hoteis[i].classificacao > hoteis[i + 2].classificacao){
                      console.log('Lakewood')
                      break
                 }
                 
                 else if (hoteis[i].classificacao < hoteis[i + 2].classificacao){
                      console.log('Ridgewood')
                      break
                 }
             else if (array[i + 1] == array[i + 1] && array[i + 1] == array[i + 2] )
                 if(hoteis[i + 1].classificacao > hoteis[i + 2].classificacao){
                      console.log('Bridgewood')
                      break
                 }
                 else if (hoteis[i + 1].classificacao < hoteis[i + 2].classificacao){
                     console.log('Ridgewood')
                     break
                 }
             }	

         else {
                 console.log('Hotel mais barato ' + hoteis[i].nome)
                 break
                 }
         }
 }
}
 var calcularRewards = () => {

     if(tipoCliente === 'Rewards' && multWeek !== 0){

         nRG1 = hoteis[0].semanalRewards * multWeek
         nRG2 = hoteis[1].semanalRewards * multWeek
         nRG3 = hoteis[2].semanalRewards * multWeek

     }if(tipoCliente === 'Rewards' && multFds !== 0){

         nFDS1 = hoteis[0].fdsRewards * multFds
         nFDS2 = hoteis[1].fdsRewards * multFds
         nFDS3 = hoteis[2].fdsRewards * multFds

     }

     totalLK = nRG1 + nFDS1
     totalBD = nRG2 + nFDS2
     totalRD = nRG3 + nFDS3

     console.log("Total Lakewood: " + totalLK)
     console.log("Total Bridgewood: " + totalBD)
     console.log("Total Ridgewood: " + totalRD)

     var z = Math.min(totalLK, totalBD, totalRD)

     var array = [totalLK, totalBD, totalRD]

     for(i=0; array.length; i++){
         
         if(array[i] == z){
             if(array[i] == array[i] && array[i] == array[i + 1] || array[i] == array[i] && array[i] == array[i + 2] ){
                 if(hoteis[i].classificacao > hoteis[i + 1].classificacao){
                      console.log('Lakewood')
                      break
                 }
                 else if (hoteis[i].classificacao > hoteis[i + 2].classificacao){
                      console.log('Lakewood')
                      break
                 }
                 
                 else if (hoteis[i].classificacao < hoteis[i + 2].classificacao){
                      console.log('Ridgewood')
                      break
                 }
             else if (array[i + 1] == array[i + 1] && array[i + 1] == array[i + 2] )
                 if(hoteis[i + 1].classificacao > hoteis[i + 2].classificacao){
                      console.log('Bridgewood')
                      break
                 }
                 else if (hoteis[i + 1].classificacao < hoteis[i + 2].classificacao){
                     console.log('Ridgewood')
                     break
                 }
             }	

         else {
                 console.log('Hotel mais barato ' + hoteis[i].nome)
                 break
                 }
         }

     }
 }

 var verificarCliente = () => {

     if(tipoCliente === 'Regular'){
         calcularRegular()
     }else{
         calcularRewards()
     }
 }

informarDatas(26, 2, 2009)
informarDatas(27, 2, 2009)
informarDatas(28, 2, 2009)

verificarDatas()
verificarCliente()