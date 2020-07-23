/**
 * What is docker:
 * It is a plateform for developer and system admin to build, run and share application
 * with containers.
 * the use of containers deploy applications is called containerization.
 * Docker is a platform or ecosystem around creating and running containers.
 *
 * Docker has two types of containers:
 * 1. Linux containers
 * 2. Windows containers
 *
 * Default is linux containers, when i say containers i mean linux
 *
 * Docker Server: Tool that is responsible for creating images, running containers, etc.
 * Docker Client : Tools that we are going to issue commands to
 *
 * Containers:
 * It is runtime instance of an image, runs a program.
 *
 * docker run hello-world
 *
 * run = docker create hello-world + docker start hello-world
 *
 */

/**
 * 1. Docker info: this command give you lot of information
 * 2. docker ps: show specifically runing image (container).
 * 3.
 */


/**
 * Docker system options:
 * cmd: docker system --help
 * df      :   Show docker disk usage
 * events  :   Get real time events from the server
 * info    :   Display system-wide information
 * prune   :   Remove unused data
 */

/**
 * Docker volume optons:
 * cmd: docker volume --help
 * create  :   Create a volume
 * inspect :   Display detailed information on one or more volumes
 * ls      :   List volumes
 * prune   :   Remove all unused local volumes
 * rm      :   Remove one or more volumes
 */

/**
 * Docker builder options:
 * cmd: docker config --help
 * create      Create a config from a file or STDIN
 * inspect :  Display detailed information on one or more configs
 * ls      :  List configs
 * rm      :  Remove one or more configs
 */

/**
 * Docker context options:
 * cmd: docker context --help
 * create  :   Create a context
 * export  :   Export a context to a tar or kubeconfig file
 * import  :   Import a context from a tar or zip file
 * inspect :   Display detailed information on one or more contexts
 * ls      :   List contexts
 * rm      :   Remove one or more contexts
 * update  :   Update a context
 * use     :   Set the current docker context
 */

/**
 * Docker image commands:
 * cmd: docker image --help
 * build   :   Build an image from a Dockerfile
 * history :   Show the history of an image
 * import  :   Import the contents from a tarball to create a filesystem image
 * inspect :   Display detailed information on one or more images
 * load    :   Load an image from a tar archive or STDIN
 * ls      :   List images
 * prune   :   Remove unused images
 * pull    :   Pull an image or a repository from a registry
 * push    :   Push an image or a repository to a registry
 * rm      :   Remove one or more images
 * save    :   Save one or more images to a tar archive (streamed to STDOUT by default)
 * tag     :   Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE
 */

/**
 * Docker network commands:
 * cmd: docker network --help
 * connect     :    Connect a container to a network
 * create      :    Create a network
 * disconnect  :    Disconnect a container from a network
 * inspect     :    Display detailed information on one or more networks
 * ls          :    List networks
 * prune       :    Remove all unused networks
 * rm          :    Remove one or more networks
 *
 * docker
 */

/**
 * Management commands:
 * builder     Manage builds
 * config      Manage Docker configs
 * container   Manage containers
 * context     Manage contexts
 * image       Manage images
 * network     Manage networks
 * node        Manage Swarm nodes
 * plugin      Manage plugins
 * secret      Manage Docker secrets
 * service     Manage services
 * stack       Manage Docker stacks
 * swarm       Manage Swarm
 * system      Manage Docker
 * trust       Manage trust on Docker images
 * volume      Manage volumes
 */

/**
 * Docker container command:
 * attach      Attach local standard input, output, and error streams to a running container
 * build       Build an image from a Dockerfile
 * commit      Create a new image from a container's changes
 * cp          Copy files/folders between a container and the local filesystem
 * create      Create a new container
 * diff        Inspect changes to files or directories on a container's filesystem
 * events      Get real time events from the server
 * exec        Run a command in a running container
 * export      Export a container's filesystem as a tar archive
 * history     Show the history of an image
 * images      List images
 * import      Import the contents from a tarball to create a filesystem image
 * info        Display system-wide information
 * inspect     Return low-level information on Docker objects
 * kill        Kill one or more running containers
 * load        Load an image from a tar archive or STDIN
 * login       Log in to a Docker registry
 * logout      Log out from a Docker registry
 * logs        Fetch the logs of a container
 * pause       Pause all processes within one or more containers
 * port        List port mappings or a specific mapping for the container
 * ps          List containers
 * pull        Pull an image or a repository from a registry
 * push        Push an image or a repository to a registry
 * rename      Rename a container
 * restart     Restart one or more containers
 * rm          Remove one or more containers
 * rmi         Remove one or more images
 * run         Run a command in a new container
 * save        Save one or more images to a tar archive (streamed to STDOUT by default)
 * search      Search the Docker Hub for images
 * start       Start one or more stopped containers
 * stats       Display a live stream of container(s) resource usage statistics
 * stop        Stop one or more running containers
 * tag         Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE
 * top         Display the running processes of a container
 * unpause     Unpause all processes within one or more containers
 * update      Update configuration of one or more containers
 * version     Show the Docker version information
 * wait        Block until one or more containers stop, then print their exit codes
 */


/**
 * Docker compose commands:
 * Commands:
 * build    :     Build or rebuild services
 * config   :     Validate and view the Compose file
 * create   :     Create services
 * down     :     Stop and remove containers, networks, images, and volumes
 * events   :     Receive real time events from containers
 * exec     :     Execute a command in a running container
 * help     :     Get help on a command
 * kill     :     Kill containers
 * logs     :     View output from containers
 * port     :     Print the public port for a port binding
 * ps       :     List containers
 * pull     :     Pull service images
 * push     :     Push service images
 * restart  :     Restart services
 * rm       :     Remove stopped containers
 * run      :     Run a one-off command
 * scale    :     Set number of containers for a service
 * start    :     Start services
 * stop     :     Stop services
 * top      :     Display the running processes
 * unpause  :     Unpause services
 * up       :     Create and start containers
 * version  :     Show the Docker-Compose version information
 */