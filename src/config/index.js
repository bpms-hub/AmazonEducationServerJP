'use strict';

try{
	var AppConfig = require('app-config');
	var ApolloEnvInfo = require('apollo-env-info');

	// To point to gamma: new AppConfig({ name: 'AudibleHIG', domain: 'gamma'});
	var CONFIG = new AppConfig({ name: 'AudibleHIG' });
	var apolloEnvInfo = new ApolloEnvInfo();

	// HttpServer KeySet has to be added in the Operational Configuration for the Apollo Environment
	var httpServerOpConfig = apolloEnvInfo.getOperationalConfig('HttpServer') || {};
	CONFIG.port = process.env.NODE_PORT || httpServerOpConfig.httpRegularPort || 6330;
	}catch(x){

	var CONFIG = {};
	CONFIG.port = 9090;
}


module.exports = CONFIG;
