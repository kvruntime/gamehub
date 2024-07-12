FROM node:22-alpine as dev
WORKDIR /app
COPY package.json .
# USER node
RUN npm install
EXPOSE 8080
COPY ..  .
ENV VITE_RAWG_KEY=98987HJHJH87878KJ
CMD [ "npm run dev" ]