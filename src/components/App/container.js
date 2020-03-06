import { connect } from 'react-redux';
import { deal } from '../../actions/deck';
import App from './App';

const mapDispatchToProps = dispatch => ({
  deal: () => dispatch(deal)
});

export default connect(null, mapDispatchToProps)(App);
