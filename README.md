# Keycloak/Wildfly/Angular Example
When complete, I hope to show:
* working keycloak server
 * public web app realm
 * bearer token service realm
 * LDAP user federation
 * themed login/account pages
 * user attribute mapping
* sample angular application
 * keycloak login
 * call to sample services
* keycloak protected JEE application
 * secure url - web.xml
 * secure ejb layer
 * access to keycloak access token and resources

### Setup
* build war files `gradle clean build`
 * creates `howarts/build/libs/hogwarts.war`
 * creates `spellbook/build/libs/spellbook.war`
* startup vagrant vm
 * follow vm-keycloak README.md to setup vm
 * start vm
* copy war files to vm for deployment
 * `cp hogwarts/build/libs/hogwarts.war vm-keycloak/shared`
 * `cp spellbook/build/libs/spellbook.war vm-keycloak/shared`
 * `cd vm-keycloak; vagrant ssh`
 * `sudo -u wildfly cp /shared/*.war /opt/jboss/wildfly/standalone/deployments`
 * `sudo service keycloak start`
 * `sudo service wildfly start`

### Running
* login to [keycloak] with default admin/admin credentials
 * NOTE: you will need to set another admin password
* login to sample [hogwarts] webapp

---
[keycloak]:http://172.16.0.100:8080/auth
[hogwarts]:http://172.16.0.100:9080/hogwarts/app
