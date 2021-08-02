## How to run api on localhostt

Clone the repo:
```sh
git clone https://github.com/hongtran/books-catalog-ui.git
cd books-catalog-api
```

Install yarn:
```js
npm install -g yarn
```

Install dependencies:
```sh
yarn
```

Set environment (vars):
```sh
cp .env.example .env
```

Start server:
```sh
# Start server
yarn start
```


Inserts Data:
```sh
curl --header "Content-Type: application/json" --request POST --data '{"title": "book 1", "description": "desc book 1", "year": 2020}' localhost:4040/api/books
curl --header "Content-Type: application/json" --request POST --data '{"title": "book 2", "description": "desc book 2", "year": 2021}' localhost:4040/api/books
curl --header "Content-Type: application/json" --request POST --data '{"title": "book 3", "description": "desc book 3", "year": 2020}' localhost:4040/api/books
curl --header "Content-Type: application/json" --request POST --data '{"title": "book 4", "description": "desc book 4", "year": 2021}' localhost:4040/api/books
```


Tests:
```sh
# Run tests written in ES6 
yarn test

# Run test along with code coverage
yarn test:coverage

# Run tests on file change
yarn test:watch

# Run tests enforcing code coverage (configured via .istanbul.yml)
yarn test:check-coverage
```
