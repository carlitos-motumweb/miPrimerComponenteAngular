import {Injectable} from '@angular/core';
import {TICKETS} from './mocks/ticketsmock';

@Injectable()
export class TicketService{
    miVariableTicketGlobal = "esta es una variable global";

    getTickets(){
        return TICKETS;
    }

    getVariableGlobal():string{
        return this.miVariableTicketGlobal;
    }
}
