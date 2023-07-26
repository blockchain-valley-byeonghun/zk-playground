import { FEEDBACK_CONTRACT, WALLET } from "../../config";

async function getContract() {
    console.log('getContract : contract ', FEEDBACK_CONTRACT)
    console.log('getContract : wallet ', WALLET)
    const contract = await FEEDBACK_CONTRACT.connect(WALLET);
    console.log(await contract.nftAddress())
}
getContract()