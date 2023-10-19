const hre = require("hardhat");

async function main() {
  const GhanaAsaaseFactory = await hre.ethers.getContractFactory("GhanaAsaase");

  const [owner] = await hre.ethers.getSigners(); // Use await here to get the owner's signer

  // Deploy the contract
  const Asasse = await GhanaAsaaseFactory.deploy(owner.address);
  await Asasse.deployed();

  console.log(`Smart contract deployed at address: ${Asasse.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
