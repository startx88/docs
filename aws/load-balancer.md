# Elastic Load Balancing & Auto

## Why use an elastic load balancer?

- An ELB (Elastic Load Balancer) is managed load balancer.

  - AWS Gurantees that it will be working.
  - AWS takes care of upgrades, maintenance, high availability.
  - AWS provides only a few configuration knobs.

- It costs less to setup your own load balancer but it will be a lot more effort on your end (maintenance, integrations)
- 4 kinds of load balancers offered by AWS.

  - Application Load Balancer (HTTP/HTTPS only) - Layer 7
  - Network Load Balancer (ultra-high performance, allows for TCP) - Layer 4
  - Gateway Load Balancer - Layer 3
  - Classic Load Balancer (retired in 2023) - Layer 4 & 7

<br />

- Applcation Load Balancer:
  - Http / Https / eRPC protocols (Layer 7)
  - HTTP Routing features.
  - Static DNS (URL)

<br />

- Network Load Balancer:
  - TCP / UDP protocols (Layer 4).
  - High Performance: million of request per seconds.
  - Static IP through Elastic IP
