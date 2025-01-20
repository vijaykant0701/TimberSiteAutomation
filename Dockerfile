# Get the latest version of Playwright
FROM mcr.microsoft.com/playwright:v1.49.1-noble

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install && \
    npx @playwright/test install

RUN mkdir /tests
COPY . /tests
WORKDIR /tests

CMD ["npm", "test"]
