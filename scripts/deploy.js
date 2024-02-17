import hre from 'hardhat';

const myToken = await ethers.deployContract('MyToken', ['TOKEN', 'TOK']);

await myToken.waitForDeployment();

console.log(`deployed to ${myToken.target}`);
