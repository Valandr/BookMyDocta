FROM node:20-alpine AS base
WORKDIR /app
COPY package.json package-lock.json* ./
COPY backend/package.json backend/package.json
RUN npm install

FROM base AS backend-dev
WORKDIR /app/backend
COPY backend ./
COPY tsconfig.base.json ../tsconfig.base.json
EXPOSE 3000
CMD ["npm", "run", "dev"]

FROM base AS backend-build
WORKDIR /app
COPY backend ./backend
COPY tsconfig.base.json ./
RUN npm run build -w backend

FROM node:20-alpine AS backend-prod
WORKDIR /app
COPY --from=base /app/node_modules ./node_modules
COPY --from=backend-build /app/backend/dist ./backend/dist
COPY backend/package.json ./backend/package.json
COPY tsconfig.base.json ./tsconfig.base.json
WORKDIR /app/backend
EXPOSE 3000
CMD ["npm", "run", "start"]

