#!/bin/bash

kubectl apply -f mealie-namespace.yaml \
              -f config.yaml \
              -f storage.yaml \
              -f deploy.yaml \
              -f service.yaml \
              -f ingress.yaml