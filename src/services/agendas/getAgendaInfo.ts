import { FEEDBACK_CONTRACT, WALLET } from "../../config";

/*

[
  '0xC1F72d2436f6f23384c2d035e509f795450C2434',
  'title',
  'description',
  BigNumber { _hex: '0x64c0c7ad', _isBigNumber: true },
  BigNumber { _hex: '0x00', _isBigNumber: true },
  owner: '0xC1F72d2436f6f23384c2d035e509f795450C2434',
  title: 'title',
  description: 'description',
  deadline: BigNumber { _hex: '0x64c0c7ad', _isBigNumber: true },
  agreeCollected: BigNumber { _hex: '0x00', _isBigNumber: true }
]

 */


async function getAgendaInfo() {
    const contract = await FEEDBACK_CONTRACT.connect(WALLET);
    console.log(await contract.agendas(0))
}
getAgendaInfo()