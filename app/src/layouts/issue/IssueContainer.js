import Issue from './Issue'
import { drizzleConnect } from '@drizzle/react-plugin'
import {emojiChangeAction, emojiCreateAction} from '../../actions/customAction'

const mapStateToProps = state => {
    return {
        emoji: state.customReducer.emoji,
        DeedToken: state.contracts.DeedToken,
        accounts: state.accounts,
        drizzleStatus: state.drizzleStatus
    }
}


const mapDispatchToProps = (dispatch) => (
    {
        onEmojiChange: (params) => {dispatch(emojiChangeAction(params))},
        onEmojiCreate: (params) => {dispatch(emojiCreateAction(params))},
    }
);

const IssueContainer = drizzleConnect(Issue, mapStateToProps, mapDispatchToProps);

export default IssueContainer
