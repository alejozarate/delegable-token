import { ethers } from "hardhat";
import { deployNFTContract } from "./utils";

async function main() {
  const [owner] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", owner.address);

  console.log("Account balance:", (await owner.getBalance()).toString());

  await deployNFTContract(owner, true);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
