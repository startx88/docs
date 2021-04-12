/**
 * Docker network:
 *
 * Commands:
 *  connect     :  Connect a container to a network
 *  create      :  Create a network
 *  disconnect  :  Disconnect a container from a network
 *  inspect     :  Display detailed information on one or more networks
 *  ls          :  List networks
 *  prune       :  Remove all unused networks
 *  rm          :  Remove one or more networks
 */

/**
 * Docker drivers:
 *
 * There are 3 types of network available in docker
 * 1. Bridge
 *    default is bridge
 * 2. Host
 *    ex: docker run ubuntu --netowrk=host
 * 3. None
 *    ex: docker run ubuntu --netowrk=none
 */