import { FEEDBACK_CONTRACT , WALLET } from '../../config'

/*

function createAgenda(address _owner, string memory _title, string memory _description, uint256 _deadline, uint _agendaId) external onlyAdmin

 https://mumbai.polygonscan.com/tx/0xe2ed20ccb69eb70186f36276ea0a1efa5fdaa85e8d3959fb767b85eac1a4c3c0

 */

async function createAgenda() {
    const transaction = await FEEDBACK_CONTRACT.connect(WALLET).createAgenda('0xC1F72d2436f6f23384c2d035e509f795450C2434', 'title', 'description', 1690355629, 20);
    const receipt = await transaction.wait();
    console.log('receipt',receipt)
}

createAgenda()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
