require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half climb force trip maple note place assume hockey clinic metal gather'; 
let testAccounts = [
"0xec0f8c973c624ad53001fdb7b7eaadff38c6a912f42f9078ab5a7c64de9f6426",
"0x887ecf8b03cd7903f9d0861c3e443a93e9797e04847c0473b4bc463747f1e04d",
"0x307207467ad13907cc7670bfb536cd24e96eaee49d7464430359bea09b0667e2",
"0xb362fabce3a8cf7530ac1233b7c25dd6ea54c6476d65293cea482b27ed39f5c1",
"0x31f63249ea83aaf5c98b15867995ddc3a77b8a039af60cc230a96518b1125505",
"0xfa5af6b9e53da00fcd149fcb67b5b3bd13ba895e42fb02b11d3fbc5028d8eb06",
"0x9f45f0b0468502d11419abb3fe159f8faaf31f6e80ed92bd36e0799784a51782",
"0x186672c75d21d9fcfe7a69b3e7c9f0df79487d0e85d42b87362b1f72176b621d",
"0x0f9451921c0ecd633fdee078fc76e18f4c1371b1794a36794d280e1594e06097",
"0xb7e1bd84cae931e845ae9553fda04b78794adb9f758a3df9a155a132095ceb12"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

