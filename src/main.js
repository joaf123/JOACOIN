const {BlockChain, Transaction} = require('./blockchain')
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('f3db751dbc48302569f402ace02ec5ae5669e89eeb210a57ece84cc5cb4f88a9');
const myWalletAddress = myKey.getPublic('hex');

let joaCoin = new BlockChain();

const tx1 = new Transaction(myWalletAddress, 'Public key goes here', 10);
tx1.signTransaction(myKey);
joaCoin.addTransaction(tx1);

console.log('\n Starting the miner...');
joaCoin.minePendingTransactions(myWalletAddress);

// Mine pending again to get the mining reward
joaCoin.minePendingTransactions(myWalletAddress);

console.log('\n Balance of Joachim is: ', joaCoin.getBalanceOfAddress(myWalletAddress));
console.log('Is Chain Valid?: ', joaCoin.isChainValid());