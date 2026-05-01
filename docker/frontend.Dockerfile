FROM node:20-alpine AS base
WORKDIR /app
COPY package.json package-lock.json* ./
COPY frontend/package.json frontend/package.json
RUN npm install

FROM base AS frontend-dev
WORKDIR /app/frontend
COPY frontend ./
COPY tsconfig.base.json ../tsconfig.base.json
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

FROM base AS frontend-build
WORKDIR /app
COPY frontend ./frontend
COPY tsconfig.base.json ./
RUN npm run build -w frontend

FROM node:20-alpine AS frontend-prod
WORKDIR /app
COPY --from=base /app/node_modules ./node_modules
COPY --from=frontend-build /app/frontend/dist ./frontend/dist
COPY frontend/package.json ./frontend/package.json
WORKDIR /app/frontend
EXPOSE 4173
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "4173"]

