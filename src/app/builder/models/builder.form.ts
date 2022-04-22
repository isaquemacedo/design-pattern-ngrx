import { FormControl, FormGroup } from "@angular/forms";
import { Client } from "../interfaces/client";

export class BuilderForm {
  form: FormGroup = new FormGroup({});

  createForm(client: Client) {
    return this.form = new FormGroup({
      name: new FormControl(client.name),
      cpf: new FormControl(client.cpf),
      email: new FormControl(client.email)
    })
  }

  get client() {
    return {
      name: this.form.get('name')?.value,
      cpf: this.form.get('cpf')?.value,
      email: this.form.get('email')?.value
    } as Client;
  }
}
