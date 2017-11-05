"use strict";

const http = require("http");
const plugin = {};

plugin.register = function(server, options, next) {
  
   server.route({
    method: "GET",
    path: "/transactions",
    handler: (request, reply) => {
      const requestOptions = {
        host: "localhost",
        path: "/transactions",
        port: "8000"
      };

      const req = http.get(requestOptions, res => {
        const bodyChunks = [];
        res
          .on("data", chunk => {
            bodyChunks.push(chunk);
          })
          .on("end", () => {
            const body = Buffer.concat(bodyChunks);
            const results = JSON.parse(body);
            return reply(results);
          });
      });

      req.on("error", e => {
        console.log(`ERROR: ${e.message}`);
        return reply(`ERROR: ${e.message}`);
      });
    }
  });

  server.route({
    method: "GET",
    path: "/get-negotiations",
    handler: (request, reply) => {
      const requestOptions = {
        host: "localhost",
        path: "/get-negotiations",
        port: "8000"
      };

      const req = http.get(requestOptions, res => {
        const bodyChunks = [];
        res
          .on("data", chunk => {
            bodyChunks.push(chunk);
          })
          .on("end", () => {
            const body = Buffer.concat(bodyChunks);
            const results = JSON.parse(body);
            return reply(results);
          });
      });

      req.on("error", e => {
        console.log(`ERROR: ${e.message}`);
        return reply(`ERROR: ${e.message}`);
      });
    }
  });
 
  server.route({
    method: "POST",
    path: "/create-transaction",
    handler: (request, reply) => {
      const requestOptions = {
        host: "localhost",
        path: "/create-transaction",
        port: "8000"
      };
  	},
  	config: {
  		 payload:{
         
         }
  	}
  });


   server.route({
    method: "POST",
    path: "/update-transaction",
    handler: (request, reply) => {
      const requestOptions = {
        host: "localhost",
        path: "/update-transaction",
        port: "8000"
      };
    },
    config: {
  		 payload:{
         
         }
  	}
  });

  next();
};