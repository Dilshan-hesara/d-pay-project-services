module.exports = {
  apps : [
      {
      name: "cloud-sql-auth-proxy",
      script: "./cloud-sql-proxy auton-dh:asia-southeast1:mysql-vm auton-dh:asia-southeast1:postgres-vm --private-ip",
      log_file: "./logs/cloud-sql-auth-proxy.log"
      },

      {
    name   : "service-inventory",
    script : "java -jar ./D-pay-Inventory-Service/target/Inventory-Service-1.0.0.jar",
    log_file:"./logs/service-inventory.log",
    instances: 2
  },
    {
      name   : "service-orders",
      script : "java -jar ./D-Pay-Order-Service/target/Order-Service-1.0.0.jar",
      log_file:"./logs/service-orders.log",
      instances: 2

    }
,{
      name   : "service-user",
      script : "java -jar ./D-Pay-User-Service/target/User-Service-1.0.0.jar",
      log_file:"./logs/service-user.log",
      instances: 2

    }



  ]
}
