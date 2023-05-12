### See result

https://avaxgods.zampaglione-enzo.fr

# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```

list of command for initialize the project 

```shell
npx hardhat -> y → typescript → enter → enter
npm install @openzeppelin/contracts dotenv @nomiclabs/hardhat-ethers + Hardhat packages npm install --save-dev "hardhat@^2.12.0" "@nomicfoundation/hardhat-toolbox@^2.0.0"
Install Core, a Metamask smart wallet alternative built for Avalanche dApps
Turn on the testnet mode by: opening up the Core extension -> click the hamburger menu on the top left -> go to advanced -> turn on the testnet mode
Fund your wallet from the Avax Faucet
Create a .env file and specify a PRIVATE_KEY variable.
To get to the private key, do the following steps:
Open up the Core extension -> click the hamburger menu on the top left -> go to security and privacy -> click show recovery phase -> enter your password -> copy the phrase -> go to wallet.avax.network -> click access wallet -> choose mnemonic key phrase -> paste what the words we’ve copied from Core -> on the sidebar click manage keys -> view c-chain private key -> copy -> paste it in the .env file
Copy the hardhat.config.ts file from the GitHub gist down in the description
Copy the deploy.ts script from the GitHub gist down in the description
Copy the AvaxGods.sol smart contract code from the GitHub gist down in the description
Compile the contract by running the npx hardhat compile command
Deploy the smart contract on the Fuji test network by running the npx hardhat run scripts/deploy.ts --network fuji command Move the /artifacts/contracts/AVAXGods.json file to the /contract folder on the frontend Copy the address of the deployed contract from the terminal and paste it into the /contract/index.js file of the frontend application
```
