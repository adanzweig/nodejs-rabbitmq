
# RabbitMQ Node.js Messaging App

This is a simple Node.js application that demonstrates how to send and receive messages using RabbitMQ.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- RabbitMQ Server: [Download and Install RabbitMQ](https://www.rabbitmq.com/download.html)

## Installation

1. Clone the repository or download the code.

```bash
git clone https://github.com/adanzweig/nodejs-rabbitmq.git
```

2. Install the required dependencies using npm:

```bash
cd nodejs-rabbitmq
npm install
```

## Usage

1. Ensure that RabbitMQ server is running on your local machine or update the `rabbitMQUrl` variable in `index.js` with the appropriate RabbitMQ server URL.

2. Open the `index.js` file and modify the queue names and messages as needed in the following section:

```javascript
// Example usage:
sendMessage('CodingWithAdo', 'Hello, RabbitMQ!');
receiveMessage('CodingWithAdo');
setTimeout(() => {
    sendMessage('CodingWithAdo', 'Hello, RabbitMQ after 5 seconds');
}, 5000);
```

3. Run the application using Node.js:

```bash
node index.js
```

The application will send and receive messages to/from the specified RabbitMQ queues.


## Acknowledgments

- This code is a basic example of RabbitMQ messaging with Node.js.
- RabbitMQ Official Website: [https://www.rabbitmq.com/](https://www.rabbitmq.com/)
- amqplib Library: [https://www.npmjs.com/package/amqplib](https://www.npmjs.com/package/amqplib)