run: 
	docker compose up
stop:
	docker compose down
build:
	docker compose build
push: build
	docker compose push
frontend_deployment:
	kubectl apply -f daystar-frontend-deployment.yml
frontend_service:
	kubectl apply -f daystar-frontend-service.yml
frontend_portfwd:
	kubectl port-forward svc/frontend :3000
frontend_deployment_delete:
	kubectl delete deployment frontend
frontend_service_delete:
	kubectl delete service frontend
frontend: frontend_deployment frontend_service
frontend_delete: frontend_deployment_delete frontend_service_delete
backend_deployment:
	kubectl apply -f daystar-backend-deployment.yml
backend_service:
	kubectl apply -f daystar-backend-service.yml
backend_portfwd:
	kubectl port-forward svc/backend :3002
backend_deployment_delete:
	kubectl delete deployment backend
backend_service_delete:
	kubectl delete service backend
backend: backend_deployment backend_service
backend_delete: backend_deployment_delete backend_service_delete