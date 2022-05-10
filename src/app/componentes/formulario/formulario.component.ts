import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  myform:FormGroup  
  
  respuesta:number=0;

  constructor(private _builder:FormBuilder) { 
    this.myform=this._builder.group({
      numero1: ['', [Validators.required]]  ,
      numero2: ['', [Validators.required]]
    })
  }









    n1:any;
    n2:any;
 
  ngOnInit() {
  }

  sum(value:any){
    this.n1 = value.numero1;
    this.n2 = value.numero2;

    this.respuesta = parseInt(this.n1) + parseInt(this.n2)

  }
  res(value:any){
    this.n1 = value.numero1;
    this.n2 = value.numero2;

    this.respuesta = parseInt(this.n1) - parseInt(this.n2)

  }
  mul(value:any){
    this.n1 = value.numero1;
    this.n2 = value.numero2;

    this.respuesta = parseInt(this.n1) * parseInt(this.n2)

  }
  div(value:any){
    this.n1 = value.numero1;
    this.n2 = value.numero2;

    if(this.n2 == 0){
      alert('No puedes dividir entre 0')
    }else{
    this.respuesta = parseInt(this.n1) / parseInt(this.n2)
    }
  }



}