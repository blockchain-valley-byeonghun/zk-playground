// @ts-ignore
import { SemaphoreEthers } from "@semaphore-protocol/data"
import { BigNumber, utils } from "ethers"
import { INFURA_API_KEY, SEMAPHORE_CONTRACT_ADDRESS } from "../../config";

/*

groupId가 각 agenda의 아이디를 의미한다.
페이지에서 각 agenda를 클릭 시, 전달받은 값을 렌더링 시키면 될 것 같다.
다만, 어떻게 그 처리를 할 지가 문제이다

 */

async function getFeedbacks() {
    const polygonNetwork = `https://polygon-mumbai.infura.io/v3/${INFURA_API_KEY}`;
    const semaphore = new SemaphoreEthers(polygonNetwork, {
        address: SEMAPHORE_CONTRACT_ADDRESS
    })

    const proofs = await semaphore.getGroupVerifiedProofs("19")
    console.log('proofs>>>>',proofs)
    console.log('proofToHexString>>',proofs.map(({ signal }: any) => utils.parseBytes32String(BigNumber.from(signal).toHexString())))
}
getFeedbacks()



