import { HttpStatus, Logger } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Request } from 'express';
// import { OperationalException } from 'src/common/exception-filters/OperationalException';
import { Server, WebSocket } from 'ws';

export enum WsTopics {
  CHAT = 'chat-message',
}

interface AliveWebSocket extends WebSocket {
  isAlive: boolean;
}

@WebSocketGateway({ path: 'chat' })
export class TourGateWay implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  private logger = new Logger(this.constructor.name);
  @WebSocketServer()
  server: Server;

  private listenForHearBeat(server: Server, intervalMs = 3000) {
    server.on('connection', (ws: AliveWebSocket) => {
      ws.isAlive = true;
      ws.on('error', this.logger.error);
      ws.on('pong', function heartbeat() {
        (this as AliveWebSocket).isAlive = true;
      });
    });
    const interval = setInterval(() => {
      server.clients.forEach(function each(client) {
        const aliveClient = client as AliveWebSocket;
        if (aliveClient.isAlive === false) {
          return aliveClient.terminate();
        }
        aliveClient.isAlive = false;
        aliveClient.ping();
      });
    }, intervalMs);
    server.on('close', () => {
      clearInterval(interval);
    });
  }

  private createMessage(topic: string, message: Record<string, unknown> | string | number, parsed = false) {
    const payload = { event: topic, data: message };
    return parsed ? payload : JSON.stringify(payload);
  }

  private broadcastMessage(
    topic: string,
    message: Record<string, unknown> | string | number,
    self: WebSocket | null = null,
  ) {
    const payload = this.createMessage(topic, message);
    this.server.clients.forEach((client) => {
      if (client !== self && client.readyState === WebSocket.OPEN) {
        client.send(payload as string);
      }
    });
  }

  afterInit(server: Server) {
    this.logger.verbose('Websocket initialized ✅');
    this.listenForHearBeat(server);
  }

  handleConnection(client: WebSocket, req: Request) {
    // this.logger.log(req.socket.remoteAddress);
    //
  }

  handleDisconnect(@ConnectedSocket() connectedClient: WebSocket) {
    this.logger.log('A client disconnected');
  }

  @SubscribeMessage(WsTopics.CHAT)
  onEvent(@MessageBody() data: string, @ConnectedSocket() connectedClient: WebSocket) {
    this.broadcastMessage(WsTopics.CHAT, data);

    this.server.clients.forEach((client) => {
      if (client !== connectedClient && client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({ event: WsTopics.CHAT, data }));
      }
    });
    // throw new OperationalException('something fishy happened', HttpStatus.INTERNAL_SERVER_ERROR);
    return this.createMessage(WsTopics.CHAT, 'Message sent', true);
  }
}
