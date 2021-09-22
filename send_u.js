//Metamask account
module.exports = function(callback) {

    web3.eth.getAccounts()
        .then((accounts) => {
        web3.eth.sendTransaction({
            from: accounts[2],
            // to: "0xAFc4F9F3bA806dd2F8e47A524fFDa2418bBFc08a",
            to: "0x7A4A4f0360A005A0FAFE0fEC0c7875813d01CA34",
            value: web3.utils.toWei("10", "ether")
        }, (e, r) => callback());
        })
        .catch((error) => console.log(error));

}
