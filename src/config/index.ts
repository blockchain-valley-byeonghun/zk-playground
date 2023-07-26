import { ethers } from 'ethers';
import { abi } from './abi'
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' })
export const FEEDBACK_CA = loadEnvOrDie('FEEDBACK_CONTRACT_ADDRESS');
export const INFURA_API_KEY = loadEnvOrDie('INFURA_API_KEY');

export const SEMAPHORE_CONTRACT_ADDRESS = loadEnvOrDie('SEMAPHORE_CONTRACT_ADDRESS')

export const MUMBAI_JSON_RPC_URL = "https://rpc-mumbai.maticvigil.com/";

export const JSON_RPC_PROVIDER = new ethers.providers.JsonRpcProvider(MUMBAI_JSON_RPC_URL);

// @ts-ignore
export const FEEDBACK_CONTRACT = new ethers.Contract(FEEDBACK_CA, abi, JSON_RPC_PROVIDER);

export const SIGN_KEY = process.env.POLYGON_PRIVATE_KEY

// @ts-ignore
export const WALLET = new ethers.Wallet(SIGN_KEY, JSON_RPC_PROVIDER)


function loadEnvOrDie(envKey: string) {
    const envVal = process.env[envKey]
    if (!envVal) {
        console.error(`Environment is missing '${envKey}' variable!`)
        process.exit(1)
    }
    return envVal
}