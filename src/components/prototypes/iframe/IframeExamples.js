import React from 'react';
import BC from 'AudibleUITags';
import Iframe from './Iframe';

class IframeExamples extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		return (
			<BC.GridRow>
				<BC.GridColumn gridUnits={4}>
					<Iframe hasAsin={true} />
				</BC.GridColumn>

				<BC.GridColumn gridUnits={4}>
					<Iframe hasUpsell={true} />
				</BC.GridColumn>

				<BC.GridColumn gridUnits={4} position="last">
					<Iframe />
				</BC.GridColumn>
			</BC.GridRow>
		)
	}
}

export default IframeExamples;