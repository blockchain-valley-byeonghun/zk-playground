import { Identity } from "@semaphore-protocol/identity";
import { formatBytes32String } from "ethers/lib/utils"
import { FEEDBACK_CONTRACT , WALLET } from '../../config'

/*


nickname42 Identity {
  _trapdoor: 12398170255838296019132224726477188642431288077403993227873093618454012844312n,
  _nullifier: 7685370566654992334542385291511856526346241729642990286958049171839379313259n,
  _commitment: 12602676236063395197684633647224633091258655687400678500896648969407678844085n
}

 */

async function joinAgenda() {
    try{
        const user1 = new Identity('nickname42')
        console.log('user1',user1)
        const transaction = await FEEDBACK_CONTRACT.connect(WALLET).joinAgenda(20, user1.commitment, formatBytes32String("nickname42"));
        const receipt = await transaction.wait();
        console.log('receipt',receipt)
    } catch (e) {
        console.error('error', e)
    }
}

joinAgenda()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
