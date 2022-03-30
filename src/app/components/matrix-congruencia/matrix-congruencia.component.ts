import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];


@Component({
  selector: 'app-matrix-congruencia',
  templateUrl: './matrix-congruencia.component.html',
  styleUrls: ['./matrix-congruencia.component.css']
})
export class MatrixCongruenciaComponent implements OnInit {
  check=false;
  countries = COUNTRIES;
  disableInput=true;
  disableInputResultado=true;
  disableInputTxtUnidad = true;
  matriz = {
    filas : [
      {
        competencia:"",
        resultado:"",
        unidades:[
          {
            valor:"INTRODUCCIÓN",
            valorCheck:false,
          },
          {
            valor:"INTRODUCCIÓN",
            valorCheck:false,
          },
          {
            valor:"INTRODUCCIÓN",
            valorCheck:false,
          },
          {
            valor:"CONSTRUCCIÓN",
            valorCheck:false,
          },
          {
            valor:"CONSTRUCCIÓN",
            valorCheck:false,
          },
          {
            valor:"CONSTRUCCIÓN",
            valorCheck:false,
          },
          {
            valor:"APROBACIÓN",
            valorCheck:false,
          },
          {
            valor:"APROBACIÓN",
            valorCheck:false,
          },
          {
            valor:"APROBACIÓN",
            valorCheck:false,
          }
        ]
      },
      {
        competencia:"COMPETENCIAS DEL GRADUADO",
        resultado:"RESULTADO DE APRENDIZAJE",
        unidades:[
          {
            valor:"UNIDAD DE ESTUDIO 1- Basic Business English I- 5 crds",
            valorCheck:false,
          },
          {
            valor:"UNIDAD DE ESTUDIO 2- Basic Business English I- 5 crds",
              valorCheck:false,
          },
          {
            valor:"UNIDAD DE ESTUDIO 3- Basic Business English I- 5 crds",
            valorCheck:false,
          },
          {
            valor:"UNIDAD DE ESTUDIO 1- Basic Business English I- 5 crds",
            valorCheck:false,
          },
          {
            valor:"UNIDAD DE ESTUDIO 2- Basic Business English I- 5 crds",
            valorCheck:false,
          },
          {
            valor:"UNIDAD DE ESTUDIO 3- Basic Business English I- 5 crds",
            valorCheck:false,
          },
          {
            valor:"UNIDAD DE ESTUDIO 3- Basic Business English I- 5 crds",
            valorCheck:false,
          },
          {
            valor:"UNIDAD DE ESTUDIO 2- Basic Business English I- 5 crds",
            valorCheck:false,
          },
          {
            valor:"UNIDAD DE ESTUDIO 1- Basic Business English I- 5 crds",
            valorCheck:false,
          }
        ]
      },
      {
        competencia:"",
        resultado:"",
        unidades:[
          {
            valor:"Demuestra de manera proficiente del idioma inglés bajo 1",
              valorCheck:false,
          },
          {
            valor:"Demuestra de manera proficiente del idioma inglés bajo 2",
              valorCheck:false,
          },
          {
            valor:"Demuestra de manera proficiente del idioma inglés bajo 3",
              valorCheck:false,
          },
          {
            valor:"CONSTRUCCIÓN",
            valorCheck:false,
          },
          {
            valor:"CONSTRUCCIÓN",
            valorCheck:false,
          },
          {
            valor:"CONSTRUCCIÓN",
            valorCheck:false,
          },
          {
            valor:"APROBACIÓN",
            valorCheck:false,
          },
          {
            valor:"APROBACIÓN",
            valorCheck:false,
          },
          {
            valor:"APROBACIÓN",
            valorCheck:false,
          }
        ]
      },
      {
        competencia:"Se comunica de manera efectiva en español y de acuerdo con el nivel alcanzado en inglés y otras lenguas extranjeras (alemán, francés, italiano, portugués)  en diversos contextos culturales  y organizacionales . ",
        resultado:"Demuestra dominio proficiente de las lenguas extranjeras impartidas en el programa,  bajo los estandáres del MCER con el alcance pleno establecido para cada nivel de inglés (B2)  y otras lenguas extranjeras (B1 en alemán, francés, italiano, portugués)  en las habilidades de comprensión auditiva, producción oral, comprensión lectora y producción escrita, en diversos contextos culturales y de la vida cotidiana, así como en  ámbitos profesionales.",
        unidades:[
          {
            valor:"",
            valorCheck:false,
          },
          {
            valor:"",
            valorCheck:false,
          },
          {
            valor:"",
            valorCheck:true,
          },
          {
            valor:"CONSTRUCCIÓN",
            valorCheck:false,
          },
          {
            valor:"CONSTRUCCIÓN",
            valorCheck:false,
          },
          {
            valor:"CONSTRUCCIÓN",
            valorCheck:false,
          },
          {
            valor:"APROBACIÓN",
            valorCheck:true,
          },
          {
            valor:"APROBACIÓN",
            valorCheck:false,
          },
          {
            valor:"APROBACIÓN",
            valorCheck:false,
          }
        ]
      }
    ]
  };

  matrizForm: FormGroup;
  myForm: FormGroup;
  isSave: boolean;
  marcado: boolean;
  columnasIntroduccion: number;
  columnasConstruccion: number;
  columnasAprobacion: number;
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      companies: this.fb.array([])
    });

    this.matrizForm = this.fb.group({
      filas: this.fb.array([])
    });

    this.setCompanies();
    this.setMatrizForm();
    this.setearAnchoColumnas();
  }


  ngOnInit(): void {
  }

  setearAnchoColumnas(){
    this.matriz.filas.forEach(x=>{
      let ci =1;
      let cc =1;
      let ca =1;
      x.unidades.forEach(y=>{
        if(y.valor =='INTRODUCCIÓN'){
          this.columnasIntroduccion = ci;
          ci++;
        }else if(y.valor =='CONSTRUCCIÓN'){
          this.columnasConstruccion = cc;
          cc++;
      }else if(y.valor =='APROBACIÓN'){
        this.columnasAprobacion = ca;
        ca++;
      }
      });
    });

    console.log(this.columnasIntroduccion);
    console.log(this.columnasConstruccion);
    console.log(this.columnasAprobacion);

  }

  data = {
    companies: [
      {
        company: 'example comany',
        projects: [
          {
            projectName: 'example project'
          }
        ]
      }
    ]
  };


  get matrizFormArr(): FormArray {
    return this.matrizForm.get('filas') as FormArray;
  }

  get companiesFormArr(): FormArray {
    return this.myForm.get('companies') as FormArray;
  }

  addNewCompany() {
    this.companiesFormArr.push(
      this.fb.group({
        company: [''],
        projects: this.fb.array([])
      })
    );
  }

  deleteCompany(index) {
    this.companiesFormArr.removeAt(index);
  }

  addNewProject(control) {
    control.push(
      this.fb.group({
        projectName: ['']
      })
    );
  }

  deleteProject(control, index) {
    control.removeAt(index);
  }


  setCompanies() {
    this.data.companies.forEach(x => {
      this.companiesFormArr.push(
        this.fb.group({
          company: x.company,
          projects: this.setProjects(x)
        })
      );
    });
  }

  setProjects(x) {
    let arr = new FormArray([]);
    x.projects.forEach(y => {
      arr.push(
        this.fb.group({
          projectName: y.projectName
        })
      );
    });
    return arr;
  }

  // Declaraciones de la Matrix


  setMatrizForm() {
    this.matriz.filas.forEach(x => {
      this.matrizFormArr.push(
        this.fb.group({
          competencia: x.competencia,
          resultado: x.resultado,
          unidades: this.setUnidades(x)
        })
      );
    });
  }

  // agregarFila() {
  //   this.matrizFormArr.push(
  //     this.fb.group({
  //         competencia: [''],
  //         resultado: [''],
  //         unidades: this.fb.array([])
  //     })
  //   );
  // }

  agregarFila() {
    this.matrizFormArr.push(
      this.fb.group({
          competencia: [''],
          resultado: [''],
          unidades: this.setArrayUnidades()
      })
    );
  }

  setArrayUnidades() {
    let arr = new FormArray([]);
    this.matriz.filas[0].unidades.forEach(y => {
      arr.push(
        this.fb.group({
          valor: ['false'],
          valorCheck:false,
        })
      );
    });
    return arr;
  }

  agregarUnidad(control) {
    control.push(
      this.fb.group({
        valor: [''],
        valorCheck:false,
      })
    );
  }

  setUnidades(x) {
    let arr = new FormArray([]);
    x.unidades.forEach(y => {
      arr.push(
        this.fb.group({
          valor: y.valor,
          valorCheck:y.valorCheck,
        })
      );
    });
    return arr;
  }

  borrarCompetencia(index) {
    this.matrizFormArr.removeAt(index);
  }

  borrarUnidad(control, index) {
    control.removeAt(index);
  }

  guardarMatriz(){
    this.isSave=false;
    console.log('Formulario',this.matrizForm.value);
    this.isSave=true;
  }

  test(data){
  console.log('data ',data);
  this.marcado = data;
  }

  checkBox(check){
    this.marcado = check;
  }

  habilitarInput(nombreControl,indiceCompetencia,indiceUnidades,habilitar){
    //this.matrizForm.controls['email_personal'].disable();
    // let objeto = Object.values(this.matrizForm.controls).forEach(control => {
    //   if (control instanceof FormGroup) {
    //     Object.values(control.controls).forEach(c => c.markAsTouched());
    //   }
    //   else {
    //     control.markAsTouched();
    //   }
    // });

  //   if(nombreControl=='unidades'){
  //     let unidadesCtrl = this.matrizFormArr.controls[indiceCompetencia].get(nombreControl)['controls'][indiceUnidades];
  //     console.log('unidadesCtrl',unidadesCtrl);
  //     unidadesCtrl.setValue({valor:'MOD',valorCheck:false});
  //     unidadesCtrl.enable();
  //     console.log('unidadesCtrlssss',unidadesCtrl);
  //     console.log('indicecompet/indiceUnidades',indiceCompetencia,indiceUnidades);
  //   }else{

  //   console.log('control',nombreControl);
  //   // console.log('indiceCont',indiceCompetencia);
  //   // console.log('matrixForm',this.matrizForm);
  //   console.log('this.matrizFormArr.controls+idex',this.matrizFormArr.controls[indiceCompetencia]);
  //   const ctrl = this.matrizFormArr.controls[indiceCompetencia].get(nombreControl);
  //   console.log('ctrl',ctrl);
  //   console.log('ctrl',ctrl);

  //   console.log('this.matrizForm.controls',this.matrizForm.controls);
  //   console.log('this.matrizForm.controls',this.matrizForm.controls);

  //   this.matrizFormArr.controls.forEach((fila,indice) => {
  //     console.log('fila-indice',fila,indice);
  //   });
  //   console.log(habilitar,this.disableInput);
  // }

  if(nombreControl=='unidades'){
    this.disableInputTxtUnidad=false;
    this.disableInput = true;
    this.disableInputResultado=true;
  }
  else if(nombreControl=='competencia'){
    this.disableInputTxtUnidad=true;
    this.disableInput = false;
    this.disableInputResultado=true;
  }
  else if(nombreControl=='resultado'){
    this.disableInputTxtUnidad=true;
    this.disableInput = true;
    this.disableInputResultado=false;
  }

  }

  //

}
