const amqp = require('amqplib');
const rabbitMQUrl = 'amqp://localhost';

// Function to send messages
async function sendMessage(queueName, message) {
    try {
        // Establish a connection to RabbitMQ server
        const connection = await amqp.connect(rabbitMQUrl);
        
        // Create a channel for communication
        const channel = await connection.createChannel();
        
        // Ensure the specified queue exists
        await channel.assertQueue(queueName);
        
        // Send the message to the queue
        channel.sendToQueue(queueName, Buffer.from(message));
        
        // Close the channel and connection
        await channel.close();
        await connection.close();
    } catch (error) {
        console.error('Error:', error);
    }
}

// Function to receive messages
async function receiveMessage(queueName) {
    try {
        // Establish a connection to RabbitMQ server
        const connection = await amqp.connect(rabbitMQUrl);
        
        // Create a channel for communication
        const channel = await connection.createChannel();
        
        // Ensure the specified queue exists
        await channel.assertQueue(queueName);
        
        console.log('Waiting for new messages....');
        
        // Start consuming messages from the queue
        channel.consume(queueName, (message) => {
            if (message !== null) {
                console.log('Received:', message.content.toString());
                
                // Acknowledge the receipt of the message
                channel.ack(message);
            }
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

// Immediately invoke an anonymous async function
(async () => {
    // Send an initial message
    sendMessage('CodingWithAdo', 'Hello world');
    
    // Receive messages from the queue 'CodingWithAdo'
    receiveMessage('CodingWithAdo');
    
    // Send another message after a 5-second delay
    setTimeout(() => {
        sendMessage('CodingWithAdo', 'Hello world after 5 seconds');
    }, 5000);
})();
