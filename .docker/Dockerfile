FROM node:20-bullseye as dev
WORKDIR /app
COPY package*.json .
RUN npm install
EXPOSE 80
COPY ..  .
ENV VITE_RAWG_KEY=98987HJHJH87878KJ
CMD [ "npm", "run", "dev" ]