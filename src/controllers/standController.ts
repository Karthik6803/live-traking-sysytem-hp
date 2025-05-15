export class StandController {
    private stands: Array<{ standId: number; standName: string; location: string }> = [];

    constructor() {
        // Sample data for bus stands
        this.stands = [
            { standId: 1, standName: "Shimla Bus Stand", location: "Shimla" },
            { standId: 2, standName: "Manali Bus Stand", location: "Manali" },
            { standId: 3, standName: "Dharamshala Bus Stand", location: "Dharamshala" },
        ];
    }

    public getStandDetails(standId: number) {
        const stand = this.stands.find(s => s.standId === standId);
        if (stand) {
            return stand;
        }
        throw new Error("Stand not found");
    }

    public getAllStands() {
        return this.stands;
    }
}