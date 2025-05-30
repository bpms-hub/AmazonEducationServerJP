import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import Text from './Text';

class FormLabel  extends React.Component {
    constructor(props) {
        super(props);
    }
		
	render() {
	    let staticClasses = ['bc-label'];

		return(
			<label>
				<Text textBold={true} textColor="base">{this.props.children}</Text>
			</label>
		);
	}
}

FormLabel.PropTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  iconType: PropTypes.string.isRequired,
  verticalAlign: PropTypes.string,
  textColor: PropTypes.string,
  iconSize: PropTypes.string
}

export default FormLabel;
