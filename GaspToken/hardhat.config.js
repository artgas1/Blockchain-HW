/** @type import('hardhat/config').HardhatUserConfig */

require('@nomiclabs/hardhat-ethers')
require('@nomicfoundation/hardhat-chai-matchers')
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.17",
};

const ALCHEMY_API_KEY = "ZI0qWBRhNsmPy8I0Tw7EZKiTTCtGr1kD";
const GOERLI_PRIVATE_KEY = "5c2b24381ad9e186258a5a5aa17eb29345a292b55ea9c9f11599814e1fb2b8e9";
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};
