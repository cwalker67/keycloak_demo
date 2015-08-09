# Vagrant Setup

### Setup
* Install [vagrant]
 * Install [vagrant-vbguest] plugin
* Install [VirtualBox]
* Install Ansible: http://docs.ansible.com/intro_installation.html
* install ansible-galaxy roles
 * bennojoy.openldap_server - `ansible=galaxy install bennojoy.openldap_server`
 * geerlingguy.mysql - `ansible-galaxy install geerlingguy.mysql`
 * smola.java - `ansible-galaxy install smola.java`
 * geerlingguy.repo-epel- `ansible-galaxy install geerlingguy.repo-epel`

### Running
* `vagrant up`

---
[vagrant]:https://www.vagrantup.com
[vagrant-vbguest]:https://github.com/dotless-de/vagrant-vbguest
[VirtualBox]:https://www.virtualbox.org
