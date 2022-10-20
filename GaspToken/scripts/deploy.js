async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying Contractor: %s", deployer.address);
  console.log("Account Balance: %s", (await deployer.getBalance()).toString());
  const Token = await (await ethers.getContractFactory("GasparyanToken")).deploy();
  console.log("Token Address: %s", Token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });