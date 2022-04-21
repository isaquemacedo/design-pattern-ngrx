import { Vehicle } from "../interfaces/vehicle";
import { VehicleAdapt } from "../interfaces/vehicle-adapt";

export class VehiclesAdapter {
  constructor() {}

  adapt(data: Array<Vehicle>) {
    let array: Array<VehicleAdapt> = []
    data.map(v => {
      array.push({
        manufacturer: v.manufacturer,
        model: v.model,
        year: v.year,
        value: v.value
      })
    })
    return array
  }
}
