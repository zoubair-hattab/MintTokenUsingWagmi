require('@nomicfoundation/hardhat-toolbox');
require('@nomicfoundation/hardhat-verify');

/** @type import('hardhat/config').HardhatUserConfig */

const POLYGON_MUMBAI_RPC = 'https://rpc.ankr.com/polygon_mumbai';

ETHERSCAN_API_KEY = 'from any rpc';
module.exports = {
  solidity: '0.8.10',
  networks: {
    hardhat: {
      chainId: 31337,
    },

    mumbai: {
      url: 'https://rpc.holesky.ethpandaops.io',
      accounts: [`private keu`],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  sourcify: {
    enabled: true,
  },
};
