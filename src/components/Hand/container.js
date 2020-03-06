import { connect } from 'react-redux';
import { getHand } from '../../selectors/deck';
import Hand from './Hand';

const mapStateToProps = state => ({
  cards: getHand(state)
});

export default connect(mapStateToProps)(Hand);
