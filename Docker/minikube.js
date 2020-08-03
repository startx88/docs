/**
 * Minikube:
 *
 * These instructions are for setting up and installing Minikube and its dependencies for use on Windows Pro with Docker Desktop and HyperV

Install Kubectl
1. Create a new directory that you will move your kubectl binaries into. A good place would be C:\bin

2. Download the latest kubectl executable from the link on the Kubernetes doc page:

https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl-on-windows

3. Move this downloaded .exe file into the bin directory you created.

4. Use Windows search to type “env” then select “Edit the system environment variables”

5. In the System Properties dialog box, click “Environment Variables”.

6. In System Variables click on the “Path” Variable and then click “Edit”

7. Click “New” and then type C:\bin

8. Drag the newly created path so that it is higher in order than Docker's binaries. This is very important and will ensure that you will not have an out of date kubectl client.

9. Click "OK"

10. Restart your terminal and test by typing kubectl into it. You should get the basic commands and help menu printed back to your screen. If this doesn't work try restarting your machine.

11. Run kubectl version --client to verify that you are using the newest version and not the out of date v1.10 version

Install Minikube
1. Download the Windows installer here:

https://storage.googleapis.com/minikube/releases/latest/minikube-installer.exe

2. Double click the .exe file that was downloaded and run the installer. All default selections are appropriate.

3. Open up your terminal and test the installation by typing minikube. You should get the basic commands and help menu printed back to your screen. If this doesn't work try restarting your machine.

Starting Up Minikube
Since by default Minikube expects VirtualBox to be used, we need to tell it to use the hyperv driver instead, as well as the Virtual Switch we created earlier.

Start up a terminal as an Administrator. Then, in your terminal run:

minikube start --vm-driver hyperv

Important note, all minikube commands must be run in the context of an elevated Administrator.
 */