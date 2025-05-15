export interface Bus {
    busId: string;
    busName: string;
    currentLocation: string;
    estimatedArrivalTime: string;
}

export interface Stand {
    standId: string;
    standName: string;
    location: string;
}