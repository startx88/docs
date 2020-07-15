/**
 * What is kubernetes:
 * 1. K8s cluster services
 * 2. it is a tool for running a bunch of different containers.
 * 3. Desired State Management
 *
 *
 *
 *
 *
 *
 * 1. check kubernetes
 *    cmd: kubectl version
 *
 *
 * Docker:
 *
 * Docker file  |
 *              | => Docker => image for posts
 * Posts files  |
 *
 *
 * Kubernetes:
 *
 * Cluster
 * 1. Node      2. Node     3. Node   // node is a vertual machine
 *    POD          POD         POD
 * ============= Service =============
 * ==== Master ==== + ==== Deployment ===
 * ========= Config File ==========
 *
 *
 * Config File:
 * 1. Please run 2 copies of Posts
 * 2. Please allow copies of Posts to be accessible from network
 *
 * Deplopment:
 * if any pod get crash then it will re-create the pod
 *
 * Diagram:
 *
 * Node (POD)
 *
 * Node (POD) => Services ======> Master <====== Config file
 *
 * Node (POD)
 *
 * Node:
 * 1 Pods (container running posts image)
 * 2 Service
 *
 *
 *
 * Kubernetes Cluster: a collection of nodes + a master to manage them
 * Node: A vertual machine that will run our containers
 * Pod: More or less a running container. Technically a pod can run multiple containers
 * Deployment: Monitors a set of pods, make sure they are running and restarts them if they crash
 * Service: Provide an easy-to-remember URL to access a running container
 *
 *
 * Notes on config files:
 * 1. Tells kubernetes about the different deployments, pods and services
 *    (referred to as Object) that we want to create.
 * 2. Written in YAML syntax
 * 3. Always store these file with our project source code - they are documentations!
 * 4. We can create Objects without config files - do not do this. Config files
 *    provide a precise definition of what your cluster is running.
 *
 *
 * Creating Pod:
 * 1. create docker image ( docker build -t startx88/posts:0.0.1 .)
 * 2. create infra folder parrallel posts folder
 * 3. create k8s inside infra
 * 4. create posts.yaml inside k8s
 * 5. inside posts.yaml
 *      apiVersion: v1
 *      kind: Pod
 *      metadata:
 *        name: posts
 *      spec:
 *        containers:
 *          - name: posts
 *            image: startx88/posts:0.0.1
 *
 * 6. cmd k8s folder
 * 7. run by kubectl apply -f posts.yaml ( create an object )
 * 8. kubectl get pods ( check all pods )
 *
 *
 * apiVersion: v1 => k8s is extensible - we can add in our own custom objects.
 * kind: Pod => Type of object we want to create
 * metadata:   => config options for the object we are about to create
 *   name: posts => when the pod is created, give it a name of 'posts' or anything
 * spec: => The exact attributes we want to apply to the object we are about to create
 *   containers: => we can create many container in a single pod ( it is an array )
 *     - name: posts => make a container with a name of 'posts'
 *       image: startx88/posts:0.0.1 => the exact image that we want to use
 *
 *
 * Kubernets commands:
 * 1. kubectl apply -f (.yaml file) => (proccess the config file,  create an object )
 * 2. kubectl get pods => get all pods
 * 3. kubectl delete pod [podname] => delete pod
 * 4. kubectl describe pod [podname] => pod description
 * 5. kubectl exec -it [podname] [cmd]
 * 6. kubectl logs [podname]
 *
 *
 * Deployment introduction:
 * Monitors a set of pods, make sure they are running and restarts them if they crash
 *
 * Image
 * ------------- Deployment -----------------
 *  Pod              Pod                Pod
 *  Container        Container          Container
 *
 * Create Deployment pod:
 * 1. create posts-depl.yaml inside k8s folder
 *      apiVersion: apps/v1
 *      kind: Deployment
 *      metadata:
 *        name: post-depl
 *      spec:
 *        replicas: 1
 *        selector:
 *          matchLabels:
 *            app: posts // pod name
 *        template:
 *          metadata:
 *            labels:
 *              app: posts // pod name
 *          spec:
 *            containers:
 *              - name: posts
 *                image: startx88/posts:0.0.1 // docker exact image
 *
 *
 *
 * 2. run this by kubectl apply -f posts-depl.yaml
 *
 *
 * Deployment Command :
 * 1. kubectl delete deployment posts-depl => delete deployment pod
 * 2. kubectl get deployments => get all deployment pods
 * 3. kubectl describe deployment [depl_name]
 * 4. kubectl apply -f [config_file name]
 *
 *
 * Updating Deployment:
 * we have 3 different ways to apply deployment updates
 * Way 1:
 * 1. Make a change to your project code.
 * 2. Rebuild the image, specifying a new image version.
 * 3. In the deployment config file, update the version of the image
 * 4. Run the kubectl apply -f depl_file_name
 *
 * Way 2:
 * 1. The deployment must be using the 'latest' tag in the pod spec sectino.
 * 2. Make an update to your code.
 * 3. Build the image.
 * 4. Push the image to docker hub. (docker push startx88/posts)
 * 5. run kubectl rollout restart deployment [depl_name]
 *
 *
 *
 * Network with services:
 * 1. Services provide the networking between pods and outside world to the pods
 *
 * Types of Services:
 * 1. Cluster IP: Sets up an easy-to-remember URL to access a pod. Only exposes pods in the cluster.
 * 2. Node Port: Makes a pod accessible from outside the cluster, Usually only used for dev purposes.
 * 3. Load Balancer: Makes a pod accessible from outside the clustor, This is the right way to expose a pod to the outside world.
 * 4. External Name: Redirects an in-cluster request to a CNAME url... don't worry about this one.
 *
 *
 * Create NodePort Service:
 * Step:
 * 1. create post-srv.yaml file inside k8s folder
 *      apiVersion: v1
 *      kind: Service
 *      metadata:
 *        name: post-srv
 *      spec:
 *        type: NodePort
 *        selector:
 *          app: posts
 *        ports:
 *          - name: posts
 *            protocol: TCP
 *            port: 4000
 *            targetPort: 4000
 *
 *
 * Accessing NodePort:
 * 1. kubectl apply -f posts-srv.yaml
 * 2. kubectl get services
 *
 *
 *
 * Cluster IP service:
 *
 *
 *
 * Load Balancer service:
 * Tells Kubernetes to reach out to its provider and provision
 * a load balancer. Gets traffic in to a single pod
 *
 * Ingress or Ingress Controller
 * A pod with a set of routing rules to distribute traffice to other service
 *
 */

