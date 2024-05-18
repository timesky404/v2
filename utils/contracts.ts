import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { stakingABI } from "./stakingABI";

const nftContractAddress = "0xAf1DcBdB6c8F484C2B4c53b1EbA423b38BF17F8D";
const rewardTokenContractAddress = "0xd3dA4756E2633773eb049E641E3CCb355707F672";
const stakingContractAddress = "0x973542C5Ab871B967D4419378c5165e9C3b56195";

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