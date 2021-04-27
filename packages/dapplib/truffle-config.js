require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'grid nation flock system egg develop remain hour grace inflict surround two'; 
let testAccounts = [
"0xe4a8a4c8e0634f790ec20114cc15635194e6f431e0f0f004003b2e360b37b741",
"0x0d80d318a31f651c54744f2b8250c6521836139f87220b8337d958dd0b0e5ce8",
"0xbb93a98f359d4400193b1dfee36122a6743f2301e5cbc1f98650f5c7172a4eaa",
"0x65cfff9a3ddf949df35554508103419de9895ce643e192342b64b4550a604e4b",
"0xb36b874a51d8e4a8976b6098d1c1782687d6e1cbf2e9f82b5d25f5bb1d7c6f30",
"0x45d7462f67b643254f0a2017ff523696df67d39a60be9c686ccb29d7ca17bc22",
"0x060fe096dbf7093851e8e47898b86d19785204eff1e771ca9e00b1c3e9ae6a52",
"0x01d8ac58dcebef8a8def688a6311070752581cabb460d1e74a141113f2dfb5e9",
"0x1a3330d17e263745616ecc17bef76fdee1610d6327872c2f92b1b99d030881ed",
"0x5bf78f39111363c50b3a0b3dcbc34c11190286c36d9eafcc507a75e2ae74b6a2"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

