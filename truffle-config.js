const path = require("path");

const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonicPhrase = "unable advice ritual ask bread accident town sunset bleak address inspire dish";

module.exports = {

    contracts_build_directory: path.join(__dirname, "app/src/contracts"),

    networks: {
        development: {
            host: "localhost",
            port: 7545,
            network_id: "5777"
        },
        ropsten :{
            provider : function(){
                return new HDWalletProvider(mnemonicPhrase, "https://ropsten.infura.io/v3/0d54d1da9d6b485cb3b40df43e4b82ac")
            },
            network_id: 3,
            gas : 4700000

            }
        // ropsten: {
        //     // must be a thunk, otherwise truffle commands may hang in CI
        //     provider: () =>
        //       new HDWalletProvider({
        //         mnemonic: {
        //           phrase: mnemonicPhrase
        //         },
        //         providerOrUrl: "https://ropsten.infura.io/v3/0d54d1da9d6b485cb3b40df43e4b82ac",
        //         numberOfAddresses: 1,
        //         shareNonce: true,
        //         derivationPath: "m/44'/1'/0'/0/"
        //       }),
        //     network_id: '3', //롭스텐 네트워크는 3, 메인넷 실제 이더리움 네트워크에 배포하려면 1로 바꿈
        // }
    },
    
};
