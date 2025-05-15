export class BusController {
    private trackingService: TrackingService;

    constructor(trackingService: TrackingService) {
        this.trackingService = trackingService;
    }

    public async getBusDetails(req: Request, res: Response): Promise<void> {
        const busId = req.params.busId;
        try {
            const busDetails = await this.trackingService.getBusDetails(busId);
            res.status(200).json(busDetails);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching bus details', error });
        }
    }

    public async getBusArrivalTime(req: Request, res: Response): Promise<void> {
        const busId = req.params.busId;
        try {
            const arrivalTime = await this.trackingService.getBusArrivalTime(busId);
            res.status(200).json(arrivalTime);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching bus arrival time', error });
        }
    }
}