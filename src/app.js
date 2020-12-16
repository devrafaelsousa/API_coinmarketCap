// My api key
let apikey = {
    key: 'f975fb19-8e36-456c-8a9a-fdae945ebdab'
}

// GET Fetch Requisition
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apikey.key).then((response) => {
    if (!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
    return response.json();
    })
    .then((api) => { 
        // console.log(api);
        let texto = "";
        //Get 10 coins and symbols
        for (let i = 0; i < 2; i++) {
            
            
            // Show API information
            texto = texto + `
            
            <main>

                <div class="media">
                <div class="media-body">
                    <div class="container">
                    <ul class="list-group">
                    <span class="border border-primary">
                        <li class="list-group-item active">
                        <img src="../assets/img/coin.svg" class="p-2 bd-highlight"  alt="coin" width="80" height="80">
                        </li>                 
                        <li class="list-group-item"><b>${api.data[i].name}</b></li>
                        <li class="list-group-item">${api.data[i].symbol}</li>
                        <li class="list-group-item">${api.data[i].first_historical_data}</li>
                    </span>
                    </ul>
                </div>

            </main>
            `;
            document.getElementById("coins").innerHTML = texto;
        }
    })
    .catch((error) => {
        console.log(error.message);
    });