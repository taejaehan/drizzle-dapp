import DeedToken from "./contracts/DeedToken.json";
import DeedIPFSToken from "./contracts/DeedIPFSToken.json";


const options = {
    web3: { //크롬의 플러그인 메타마스크를 통해 연결된다
        block: false,
        fallback: { //메타마스크가 없을때 정의되는건데, 어차피 메타마스크가 없으면 안되기떄문에 그냥 이렇게 냅둬도 된다
            type: "ws",
            url: "ws://127.0.0.1:9545",
        },
    },
    contracts: [DeedToken, DeedIPFSToken], //컴파일 결과
    events: { // contract안에 정의할 이벤트 이름을 정의한다
        DeedToken: ["Transfer", "Approval", "ApprovalForAll"],
        DeedIPFSToken: ["Transfer", "Approval", "ApprovalForAll"]
    },
    polls: {    //contracts상태를 이더리움과 연결되면서 계속 polling한다. 밀리세컨드 단위로 되는데 1.5초 단위로 계속 polling
        accounts: 1500,
    },
};

export default options;
