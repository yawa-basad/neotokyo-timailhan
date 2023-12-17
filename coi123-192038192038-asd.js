$(document).ready( function () {
    console.log('peste');
})


// const OPENSEA_URL = "https://api.opensea.io/"

// let address = JSON.parse(localStorage.getItem('wagmi.store')).state.data.account

// console.log('from coi123 ' + address)

/**
 * GETALLCOLLECTION
 */

// async function GetAllCollection(address){
//     var collections = []
//     var offset = 0
//     var old_count = 0;
//     try{
  
//       while(true){ // Added
//         var url = `${OPENSEA_URL}api/v1/collections?asset_owner=${address}&offset=${offset}&limit=50`
//         await $.ajax({
//             url: url,
//             method: "GET",
//             headers: {
//               accept: 'application/json',
//               'X-API-KEY': '078b8acce6a34dd3a2dbb0cd34127203'
//             },
//             success: function(data){
//                 for(var i = 0; i < data.length; i++){
//                   if(data[i].primary_asset_contracts.length > 0)
//                     collections.push(data[i])
//                 }
//             }
//         })
//         if(old_count == collections.length)
//           break
//           old_count = collections.length
//         offset += 50
//       }
//     }catch(err){
//       console.log(err)
//     }


  
//     for(var i = 0 ; i < collections.length; i++){
//       collections[i].worth = 0
//       try{
//         var result = await $.ajax({
//           url: "https://eth-mainnet.g.alchemy.com/nft/v2/i3QT46oiQpqqceCkiWb0kIn24YNEVcRH/getFloorPrice?contractAddress="+collections[i].primary_asset_contracts[collections[i].primary_asset_contracts.length-1].address,
//           method: "GET",
//         })
//         if(result.openSea != undefined && result.openSea.floorPrice != undefined)
//         collections[i].worth = result.openSea.floorPrice
//       }catch{
//         if(collections[i].stats.seven_day_volume > 0){
//           collections[i].worth = Math.round(
//             collections[i].stats.seven_day_volume * 0.8 * 10000
//           ) / 10000
//         }
//       }
      
//     }

//     collections = collections.sort((a, b) => {
//       return a.worth < b.worth
//         ? 1
//         : -1;
//     });

//     return collections
//   }