# A Simple Chat Room App
<img src="assets/demo.gif" alt="demo"/>

## Description:
- A simple chat app built using **React**, **Redux**, **Redux-Saga**, and **Web Sockets**. 
- Every user that connects to the server is registered upon connection, gets a username, and then can write messages that are broadcast to every connected client. 
- The application is a distributed application built using a **Node.js** server, and a browser client built in **React**, managing data using **Redux** and side effects with **Redux-Saga**.
- Client-server communication is handled through **WebSockets**.

## To run:
- Start the node.js server by running `node src/sockets/app.js`
- Start the browser client by running `npm start`