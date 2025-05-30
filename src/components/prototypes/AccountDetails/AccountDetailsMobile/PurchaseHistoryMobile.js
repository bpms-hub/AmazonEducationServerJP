import React from 'react';
import BC from 'AudibleUITags';
import CC from '../../ubiquity/cc';
import orders from '../../../../data/prototypes/orders.json';

class PurchaseHistoryMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	showFilters: false,
    	currentFilter: 'orders',
    	currentSort: null
    }
  }

  componentWillMount() {
    if (!this.props.location.query.orderType) {
      this.props.history.push({
        pathname: '/prototypes/brickcity-mobile/account-details/purchase-history',
        search: '?orderType=orders'
      });
    }
  }

  filterOrderType(event) {
    this.props.history.push({
      pathname: '/prototypes/brickcity-mobile/account-details/purchase-history',
      search: '?orderType=' + event.target.value
    });
  	this.setState({
  		currentFilter: event.target.value
  	});
  }

  setSort(event) {
  	this.setState({
  		currentSort: event.target.value
  	});
  }

  showFilters() {
	this.setState({
		showFilters: true
	});
  }

  hideFilters() {
	this.setState({
		showFilters: false
	});
  }

  render() {
    return (
      <div>
        <BC.GridRow spacing="base">
          	<BC.GridColumn gridUnits={4}>        
          		<BC.Heading headingLevel={2} spacing="micro">Orders</BC.Heading>
          	</BC.GridColumn>

          	<BC.GridColumn textAlign="right" gridUnits={8} position="last">        
          		<BC.Link textColor="primary" onClick={this.showFilters.bind(this)}>Refine</BC.Link>
          	</BC.GridColumn>
        </BC.GridRow>

            {orders[this.props.location.query.orderType ? this.props.location.query.orderType : 'orders'].map((order, index)=>{
                return (
                	<div>
	                	<BC.GridRow spacing="micro">
	          				<BC.GridColumn gridUnits={3}>        
	                			<BC.Image source={order.product_image} />
	          				</BC.GridColumn>

	          				<BC.GridColumn gridUnits={9} position="last">
	          					<BC.List listType="nostyle">       
		                			<BC.ListItem spacing="micro">
		                				Order #: <BC.Link app={true} url={"/prototypes/brickcity-mobile/account-details/purchase-history/" + order.order_number}>{order.order_number}</BC.Link>
		                			</BC.ListItem>
		                			<BC.ListItem spacing="micro">
		                				Order Date: {order.order_date}
		                			</BC.ListItem>
		                			<BC.ListItem>
		                				Total: {order.credits ? order.credits + " Credits" : "$" + (order.price + (order.price * 0.07)).toFixed(2) }
		                			</BC.ListItem>
		                		</BC.List>
	          				</BC.GridColumn>
	                	</BC.GridRow>

	                	<BC.GridRow spacing="small">
	          				<BC.GridColumn gridUnits={3}>        

	          				</BC.GridColumn>

	          				<BC.GridColumn textAlign="right" gridUnits={9} position="last">
		                		<BC.Link>Return</BC.Link>
	          				</BC.GridColumn>
	                	</BC.GridRow>

	                	<BC.Divider spacing="base" />
                	</div>
                )              
              })
            }

        { this.state.showFilters &&
	        <div style={{
	        	backgroundColor: 'rgba(0,0,0,0.8)',
	          	bottom: 0,
	          	left: 0,
	          	right: 0,
	          	top: 0,
	          	position: 'fixed',
	          	zIndex: 9999
	        }}>
	        	<div style={{
	        		bottom: 0,
	        		height: '426px',
	        		left: 0,
	        		right: 0,
	        		position: 'absolute'
	        	}}>
		        	<BC.Box backgroundColor="base" paddingSize="small">
		        		<BC.GridRow>
		        			<BC.GridColumn gridUnits={4}>
		        				<BC.Link textColor="primary">Clear</BC.Link>
		        			</BC.GridColumn>
		        			<BC.GridColumn gridUnits={4} textAlign="center">
		        				<BC.Text>Refine</BC.Text>
		        			</BC.GridColumn>
		        			<BC.GridColumn gridUnits={4} position="last" textAlign="right">
		        				<BC.Link onClick={this.hideFilters.bind(this)} textColor="primary">Done</BC.Link>
		        			</BC.GridColumn>
		        		</BC.GridRow>
		        	</BC.Box>

		        	<BC.Box backgroundColor="base" paddingSize="small">
		        		<BC.Heading headingLevel={3}>Order Types</BC.Heading>
		        	</BC.Box>

		        	<BC.Box backgroundColor="secondary" paddingSize="small">
		        		<BC.List listType="nostyle">
		        			<BC.ListItem spacing="mini">
				        		<BC.RadioButton onChange={this.filterOrderType.bind(this)} checked={this.state.currentFilter === 'orders'} value="orders" label="Orders" />
		        			</BC.ListItem>
		        			<BC.ListItem spacing="mini">
		        				<BC.RadioButton onChange={this.filterOrderType.bind(this)} checked={this.state.currentFilter === 'memberships'} value="memberships" label="Memberships" />
		        			</BC.ListItem>
		        			<BC.ListItem>
		        				<BC.RadioButton onChange={this.filterOrderType.bind(this)} checked={this.state.currentFilter === 'gifts'} value="gifts" label="Gifts" />
		        			</BC.ListItem>
		        		</BC.List>
		        	</BC.Box>

		        	<BC.Box backgroundColor="base" paddingSize="small">
		        		<BC.Heading headingLevel={3}>Order Types</BC.Heading>
		        	</BC.Box>

		        	<BC.Box backgroundColor="secondary" paddingSize="small">
		        		<BC.List listType="nostyle">
		        			<BC.ListItem spacing="mini">
				        		<BC.RadioButton onChange={this.setSort.bind(this)} checked={this.state.currentSort === '1'} value="1" label="Last 90 Days" />
		        			</BC.ListItem>
		        			<BC.ListItem spacing="mini">
		        				<BC.RadioButton onChange={this.setSort.bind(this)} checked={this.state.currentSort === '2'} value="2" label="Last 180 Days" />
		        			</BC.ListItem>
		        			<BC.ListItem spacing="mini">
		        				<BC.RadioButton onChange={this.setSort.bind(this)} checked={this.state.currentSort === '3'} value="3" label="2015" />
		        			</BC.ListItem>
		        			<BC.ListItem>
		        				<BC.RadioButton onChange={this.setSort.bind(this)} checked={this.state.currentSort === '4'} value="4" label="2014" />
		        			</BC.ListItem>
		        		</BC.List>
		        	</BC.Box>
	        	</div>
        	</div>
        }
      </div>
    )
  }
}
export default PurchaseHistoryMobile;