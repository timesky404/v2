import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { stakingABI } from "./stakingABI";

const nftContractAddress = "0xAf1DcBdB6c8F484C2B4c53b1EbA423b38BF17F8D";
const rewardTokenContractAddress = "0x39073444AB20c5AF8941a972d97166BB1Dc7c1db";
const stakingContractAddress = "0x2E801cdc8DaD167AA6d67A7814318B711e77aE89";

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