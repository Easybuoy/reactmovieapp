const React =  require('react');
// import ReactDOM from 'react-dom';
// import App from './App';
import { shallow } from 'enzyme';
import Footer from '../../components/footer/Footer';
// const Footer = require('./components/footer/Footer');

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

describe('<Footer />', () => {
  // it('renders the footer component correctly', () => {
  //     // const tree = renderer.create(<Footer />).toJSON();
  //     const tree = shallow(<Footer />)
  //     expect(tree).toMatchSnapshot();
  // });

  it('renders the Dashboard component correctly', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
});
})

