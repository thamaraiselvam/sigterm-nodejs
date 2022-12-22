# sigterm-nodejs
Node.js project demonstrate the sigterm 

## Docker build

```docker build -t sigterm-demo:v1 .```

## Deploy on Kubernetes

```kubectl create deployment sigterm-demo --image=<IMAGE_AVAILABLE_ON_DOCKERHUB> --replicas=2```

## Create Horizontal Pod Autoscaling (HPA)

```kubectl autoscale deployment sigterm-demo --cpu-percent=50 --min=1 --max=3```
