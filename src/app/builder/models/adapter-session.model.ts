import { Simulation } from "../interfaces/simulation";

export class AdapterSession {
  constructor() {}

  adapt(obj: Simulation) {
    return {
      installmentSelected: obj.installmentsOptions.filter(v => v === obj.installmentSelected)[0]
    }
  }
}