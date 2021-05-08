const { Client } = require("cassandra-driver");
async function run() {
    const client = new Client({
      cloud: {
        secureConnectBundle: "\secure-connect-front-leads-app.zip",
      },
      credentials: {
        username: "ZSxyOEpTMnoIBHBEIInZBSfU",
        password: "I-yH3TeLB+cRLYZE,WjCT7u5-TS5bydArD+KNKwFh7kN-5K+2tjPsM3_rAf-Qn+yjy.1bSc7R1natkKk,vCtr3cfGN9.26YSFZhaQnpMK8XZlYd58K-jG2ESDLrmg7Ey",
      },
    });
  
    await client.connect();
  
    // Execute a query
    const rs = await client.execute("SELECT * FROM system.local");
    console.log(`Your cluster returned ${rs.rowLength} row(s)`);
  
    await client.shutdown();
  }
  
  // Run the async function
  run();