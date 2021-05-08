const cassandra = require('cassandra-driver');
const TimeUuid = require('cassandra-driver').types.TimeUuid;

function init_connection(){
    var connection = {}
    connection.client = new cassandra.Client({ 
        cloud: { secureConnectBundle: "\secure-connect-front-leads-app.zip"},
        keyspace: "leads" ,
        credentials: {   username: "ZSxyOEpTMnoIBHBEIInZBSfU",
        password: "I-yH3TeLB+cRLYZE,WjCT7u5-TS5bydArD+KNKwFh7kN-5K+2tjPsM3_rAf-Qn+yjy.1bSc7R1natkKk,vCtr3cfGN9.26YSFZhaQnpMK8XZlYd58K-jG2ESDLrmg7Ey"} 
    });
    return connection
}

connection = init_connection()


module.exports = connection;