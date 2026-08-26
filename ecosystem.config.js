module.exports = {
  apps : [{
    name   : "service-inventory",
    script : "java -jar ./Service-Inventory/target/Service-Inventory-1.0.0.jar",
    log_file:"./logs/service-inventory.log",
    instances: 2
  },
    {
      name   : "service-orders",
      script : "java -jar ./Service-Orders/target/Service-Orders-1.0.0.jar",
      log_file:"./logs/service-orders.log",
      instances: 2

    }
,{
      name   : "service-user",
      script : "java -jar ./Service-User/target/Service-User-1.0.0.jar",
      log_file:"./logs/service-user.log",
      instances: 2

    }



  ]
}
