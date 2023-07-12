import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  switchValue: boolean = false;

  modelos = [
    {
      nombre: 'Workflow',
      precio_mensual: '19',
      precio_anual: '285',
      tipo_moneda: '$',
      condiciones: [
        'Unlimited Clients & Projects',
        'Proposals',
        'Contracts',
        'Invoicing & Payments',
        'Client CRM',
        'Project Management',
        'Task & Time Tracking',
        'iOS, Android, Chrome, & Mac Apps'
      ],
      tipo_empiece: 'start free',
      popular: false
    },
    {
      nombre: 'Workflow Plus',
      precio_mensual: '29',
      precio_anual: '455',
      tipo_moneda: '$',
      condiciones: [
        'Everything in Workflow, plus...',
        'White-labelled Client experienced',
        'Client forms and questionnaires',
        'Workflow automations',
        'Subcontracting (client-mode)',
        'Calendly integration',
        'Client portal',
        'Priority support'
      ],
      tipo_empiece: 'start free',
      popular: true
    }
  ]

  addOns = [
    {
      nombre: 'Collaborators',
      precio: 'FREE',
      moneda: '$',
      tipo_pago: 'MONTH',
      texto: 'Invite other users to specific projects for limited access and functionality',
      url: ''
    },
    {
      nombre: 'Partnets',
      precio: '9',
      moneda: '$',
      tipo_pago: 'MONTH',
      texto: 'Invite other users for full account acces and company management',
      url: ''
    },
    {
      nombre: 'Bonsai Tax',
      precio: '10',
      moneda: '$',
      tipo_pago: 'MONTH',
      texto: 'Track expenses, indentify write-offs, and estimate quarterly taxes easily',
      url: 'LEARN MORE'
    }
  ]


  public onSwitchChange(): void {
    console.log('Valor del switch:', this.switchValue);
    // Realiza cualquier otra lógica necesaria con el valor del switch
  }
}
