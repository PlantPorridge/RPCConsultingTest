import { ExecutionType } from "../enums/execution-type.enum";

export class Acturial {

    constructor(
        public mainLimit: number,
        public mainRetention: number,
        public executionType: ExecutionType
    ) { }
}