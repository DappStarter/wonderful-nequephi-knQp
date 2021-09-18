require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz kiwi october slab chapter deny radar punch grace merry flock thumb'; 
let testAccounts = [
"0xef8e65c094aa0435c4d91124fbbce0106ec1eab5fd37951aaa9ace554bc48ce0",
"0xc2795e2b9c2e222af644373601b09757b41a7f325a8be07edb11ce7a48230924",
"0x6291d86baca99625f5c02aff72c03bfc680584f8c4ae81d5dd3d3d13ef7a1491",
"0x7dfa2629acd394dccd5543af3a421f5ce41f3dca3a58d5618a0fbd882fb299cc",
"0x4e0545b34b56132f58f6a2bd1a3ff01dff3b157561d07da4ddddbd0e1b09ef66",
"0xa1733fde694fcb4c0967a0727de472c516bca9bda5bd2d20cb096291a4232809",
"0x233e2f89039880a42f059f13105220a6ca37553380b5e86c5785f63e59921f92",
"0x52e2b16508c742a29bdda394029195ddd6082cdd72745fe4d5a279194d655e81",
"0x8e598eac6abfd8ff1a4183f3ad61079b941e23258462c413e2dd20d38f437046",
"0x6406648d363a5e9988442ed44d70af4a1cda7cb3a20577db38c2e6f56bb0f83f"
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

