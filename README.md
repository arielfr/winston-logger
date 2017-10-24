# winston-this

This is a simple winstone logger module to add on your NodeJS project

## Install

```bash
npm install winston-this
```

## Usage

> Create a log instance

```javascript
const logger = require('winston-this')();
```

```javascript
logger.info('Hello');

// 2017-10-24T12:00:00.000Z - info: Hello - [level:INFO]
```

> Create a log instance with a custom tag to identify it

```javascript
const logger = require('winston-this')('api');
```

```javascript
logger.info('Hello');

// 2017-10-24T12:00:00.000Z - info: Hello - [name:api] [level:INFO]
```

### Tag Usage

You can pass tags to pass more information

```javascript
logger.info('Hello', { user: 'arielfr' });

// 2017-10-24T12:00:00.000Z - debug: Hello - [name:api] [user:arielfr] [level:DEBUG]
```

## Log Levels

To specify a log level you can use the environmental variable `LOG_LEVEL`.

````javascript
PROCESS.env.LOG_LEVEL = 'DEBUG';
````

> The default log level is **INFO**

## License

Copyright 2017