import { drizzleConnect } from "@drizzle/react-plugin";
import MainComponent from "./MainComponent";
import {sayHelloAction} from "./actions/customAction";

//drizzle앱에서 기본적으로 제공하는 상태들 
//https://github.com/trufflesuite/drizzle/blob/develop/packages/store/README.md#drizzle-state
//MainContainer에 중요역할은 MainComponent에 drizzleConnect를 통해서 store의 mapStateToProps를 전달해주는 역할이다

const mapStateToProps = (state) => {
    return {
        hello: state.customReducer.sayHello,
        accounts: state.accounts,  // MainContainer에 {this.props.accounts[0]}
        accountBalances: state.accountBalances, // {this.props.accountBalances[this.props.accounts[0]]}
        DeedToken: state.contracts.DeedToken,
        drizzleStatus: state.drizzleStatus
    };
};


const mapDispatchToProps = (dispatch) => (
    {
        onClickSayHello: (params) => {dispatch(sayHelloAction(params))}
    }
);
//리액트 리덕스를 사용하는 것에서는 container componet를 wrapper처럼 사용 component 사용
//drizzle사용하면 기본적으로 생기는 MyComponent, MyContainer가 한쌍으로 구현되어있음

const MainContainer = drizzleConnect(MainComponent, mapStateToProps, mapDispatchToProps);

export default MainContainer;
