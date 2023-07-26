import { Group } from "@semaphore-protocol/group";
import { Identity } from "@semaphore-protocol/identity";
import { generateProof } from "@semaphore-protocol/proof";
import { formatBytes32String } from "ethers/lib/utils"
import { BigNumber } from "ethers"
import { FEEDBACK_CONTRACT , WALLET } from '../../config'

const wasmFilePath = './build/snark-artifacts/semaphore.wasm'
const zkeyFilePath = './build/snark-artifacts/semaphore.zkey'
async function sendFeedback() {
    const groupId = "20"
    const group = new Group(groupId)
    const user1 = new Identity('nickname42')
    console.log('user1',user1, user1.commitment)
    const feedback = BigNumber.from(formatBytes32String('nickname42')).toString()
    group.addMember(user1.commitment)

    const { proof, merkleTreeRoot, nullifierHash } = await generateProof(
        user1,
        group,
        groupId,
        feedback,
        {
            wasmFilePath,
            zkeyFilePath
        }
    );

    console.log(proof)
    console.log(merkleTreeRoot)
    console.log(nullifierHash)

    try{
        const sendFeedbackTx = await FEEDBACK_CONTRACT.connect(WALLET).sendFeedback(20, feedback, merkleTreeRoot, nullifierHash, proof);
        const txReceipt = await sendFeedbackTx.wait();
        console.log('receipt',txReceipt)
    }catch (e){
        console.error('e >>>>', e)
    }
}

sendFeedback()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
