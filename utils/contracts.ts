import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { stakingABI } from "./stakingABI";

const nftContractAddress = "0xD2FD7d3b363c14eb1b2C1695a2fF9b591B5D422f";
const rewardTokenContractAddress = "0x67a5a201da526f1ff4bee4eed5dc83b775899195";
const stakingContractAddress = "0x670A6fdB17A433928200DBDa028d72977935d443";

export const NFT_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: nftContractAddress
});

export const REWARD_TOKEN_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: rewardTokenContractAddress
});

export const STAKING_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: stakingContractAddress,
    abi: stakingABI
});