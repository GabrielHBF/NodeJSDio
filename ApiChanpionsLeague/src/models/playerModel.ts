
export interface playerModel{
    id: number;
    name: string;
    club: string;
    nationality: string;
    position: string;
    statistics: {
        overall: number;
        Pace: number;
        shooting:number;
        Passing: number;
        Dribling: number;
        Defending: number;
        Physical: number;
    }
}

 