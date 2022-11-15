alias dev="minikube start --driver=podman --container-runtime=cri-o"

#   if you get RSRC_INSUFFICIENT_CORES error,
#   podman machine is not properly configured.
#   → https://stackoverflow.com/a/71579753
#   
#   first, stop and remove the current machine:
#       podman machine stop
#       podman machine rm
#   
#   then create a new machine:
#       podman machine init --cpus [minimum of 2] --memory 12288 --disk-size 50
#       podman machine start
#       podman system connection default podman-machine-default-root
#   
#   finally, try again