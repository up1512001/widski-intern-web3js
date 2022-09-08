let Web3 = require('web3');

// console.log(Web3);

let web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'));

console.log(web3);

(web3.eth.getBalance('0x88E35D9EFeDaC3a75CF984d309Ae6eA1bA47b815')).then(console.log);


(web3.eth.getBalance('0x88E35D9EFeDaC3a75CF984d309Ae6eA1bA47b815')).then((result)=>{
    console.log(web3.utils.fromWei(result,"ether"));
});

