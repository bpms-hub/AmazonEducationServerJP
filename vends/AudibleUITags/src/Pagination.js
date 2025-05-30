import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import Divider from './Divider';
import GridRow from './GridRow';
import GridColumn from './GridColumn';
import Pipe from './Pipe';
import Text from './Text';
import Link from './Link';
import LetterSpace from './LetterSpace';

class Pagination extends React.Component {
    constructor(props) {
        super(props);
    }

  render() {
    let staticClasses = ['bc-pagination'];

    return (
      <div className={classNames(staticClasses)}>
        <Divider spacing="micro" />

        <GridRow>
        	<GridColumn gridUnits={6}>
		        1-10 of 10 results
        	</GridColumn>

        	<GridColumn gridUnits={6} textAlign="right" last={true}>
        		<Text textColor="inactive">Previous</Text>
		        <Pipe />
		        <Text>1</Text><LetterSpace size="mini" />
		        <Link>2</Link><LetterSpace size="mini" />
		        <Link>3</Link><LetterSpace size="mini" />
		        <Text>...</Text><LetterSpace size="mini" />
		        <Link>10</Link>
		        <Pipe />
		        <Link linkType="nav">Next</Link>
        	</GridColumn>
        </GridRow>
      </div>
    );
  }

}

Pagination.propTypes = {

}

Pagination.defaultProps = {

}

export default Pagination;
