import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-matriz',
  templateUrl: './matriz.component.html',
  styleUrls: ['./matriz.component.css']
})
export class MatrizComponent implements OnInit {
  employee = [
    {
      name: 'tuna',
      email: 'vscode@gmail.com',
      mobNumber: 12346,
      dob: new Date()
    },
    {
      name: 'node',
      email: 'nodejs@gmail.com',
      mobNumber: 1234,
      dob: new Date()
    },
    {
      name: 'google',
      email: 'google@gmail.com',
      mobNumber: 123461,
      dob: new Date()
    }
  ];

  matrizCongruenciaoRIG =
  {
    facultad: 'HUMANIDADES Y CENCIAS SOCIALES',
    programa: 'LENGUAS MODERNAS- presencial',
    filaPrincipal:  [
      {
        tituloPerfilGraduado : 'PERFIL DEL GRADUADO',
        DescripcionPerfilGraduado : 'El graduado de Lenguas Modernas de la Universidad Ean es un gestor multilingue de los procesos organizacionales a partir de su competencia intercultural que contribuye a la solución de las necesidades del entorno.',
        filaCompetenciasGraduado: [
        {
          columnaTitulo: 'GENERAL',
          gruposColumna:
           [
            {
              titulo: 'COMPETENCIAS DEL GRADUADO',
              texto: '',
              textoChequeo: 'Se comunica de manera efectiva en español y de acuerdo con el nivel alcanzado en inglés y otras lenguas extranjeras (alemán, francés, italiano, portugués)  en diversos contextos culturales  y organizacionales .'
            },
            {
              titulo: 'RESULTADO DE APRENDIZAJE',
              texto: '',
              textoChequeo: 'Se comunica de manera efectiva en español y de acuerdo con el nivel alcanzado en inglés y otras lenguas extranjeras (alemán, francés, italiano, portugués)  en diversos contextos culturales  y organizacionales.'
            }
           ]
         },
         {
          columnaTitulo: 'INTRODUCCIÓN',
          gruposColumna:
           [
            {
              titulo: 'PERFIL DEL GRADUADOUNIDAD DE ESTUDIO 1- Basic Business English I- 5 crds',
              texto: 'Demuestra dominio de manera proficiente del idioma inglés bajo los estandáres del MCER con un alcance de A1 en las habilidades de comprensión auditiva, producción oral, comprensión lectora y producción escrita en contextos socioculturales, organizacionales y tecnológicos de carácter formal e informal dentro de un marco ético-humanístico e investigativo  y sostenible.',
              textoChequeo:'true'
            },
            {
              titulo: 'UNIDAD DE ESTUDIO 2- Fundamentos de Lingüística Organizacional- 3 crds',
              texto: 'Aplica el conocimiento de la lingüística y sus niveles de estudio para el análisis de los procesos comunicativos en las organizaciones.',
              textoChequeo:'false'
            },
            {
              titulo: 'UNIDAD DE ESTUDIO 3- Basic Business English II-5 crds',
              texto: 'Demuestra dominio de manera proficiente del idioma inglés bajo los estandáres del MCER con un alcance de A2 en las habilidades de comprensión auditiva, producción oral, comprensión lectora y producción escrita en contextos socioculturales, organizacionales y tecnológicos de carácter formal e informal dentro de un marco ético-humanístico e investigativo  y sostenible.',
              textoChequeo:'false'
            },
            {
              titulo: 'PERFIL DEL GRADUADOUNIDAD DE ESTUDIO 1- Basic Business English I- 5 crds',
              texto: 'Demuestra dominio de manera proficiente del idioma inglés bajo los estandáres del MCER con un alcance de A1 en las habilidades de comprensión auditiva, producción oral, comprensión lectora y producción escrita en contextos socioculturales, organizacionales y tecnológicos de carácter formal e informal dentro de un marco ético-humanístico e investigativo  y sostenible.',
              textoChequeo:'true'
            },
            {
              titulo: 'UNIDAD DE ESTUDIO 2- Fundamentos de Lingüística Organizacional- 3 crds',
              texto: 'Aplica el conocimiento de la lingüística y sus niveles de estudio para el análisis de los procesos comunicativos en las organizaciones.',
              textoChequeo:'false'
            },
            {
              titulo: 'UNIDAD DE ESTUDIO 3- Basic Business English II-5 crds',
              texto: 'Demuestra dominio de manera proficiente del idioma inglés bajo los estandáres del MCER con un alcance de A2 en las habilidades de comprensión auditiva, producción oral, comprensión lectora y producción escrita en contextos socioculturales, organizacionales y tecnológicos de carácter formal e informal dentro de un marco ético-humanístico e investigativo  y sostenible.',
              textoChequeo:'false'
            },
            {
              titulo: 'PERFIL DEL GRADUADOUNIDAD DE ESTUDIO 1- Basic Business English I- 5 crds',
              texto: 'Demuestra dominio de manera proficiente del idioma inglés bajo los estandáres del MCER con un alcance de A1 en las habilidades de comprensión auditiva, producción oral, comprensión lectora y producción escrita en contextos socioculturales, organizacionales y tecnológicos de carácter formal e informal dentro de un marco ético-humanístico e investigativo  y sostenible.',
              textoChequeo:'true'
            },
            {
              titulo: 'UNIDAD DE ESTUDIO 2- Fundamentos de Lingüística Organizacional- 3 crds',
              texto: 'Aplica el conocimiento de la lingüística y sus niveles de estudio para el análisis de los procesos comunicativos en las organizaciones.',
              textoChequeo:'false'
            },
            {
              titulo: 'UNIDAD DE ESTUDIO 3- Basic Business English II-5 crds',
              texto: 'Demuestra dominio de manera proficiente del idioma inglés bajo los estandáres del MCER con un alcance de A2 en las habilidades de comprensión auditiva, producción oral, comprensión lectora y producción escrita en contextos socioculturales, organizacionales y tecnológicos de carácter formal e informal dentro de un marco ético-humanístico e investigativo  y sostenible.',
              textoChequeo:'false'
            },
           ]
         },
         {
          columnaTitulo: 'CONSTRUCCIÓN',
          gruposColumna:
           [
            {
              titulo: 'PERFIL DEL GRADUADOUNIDAD DE ESTUDIO 1- Basic Business English I- 5 crds',
              texto: 'Demuestra dominio de manera proficiente del idioma inglés bajo los estandáres del MCER con un alcance de A1 en las habilidades de comprensión auditiva, producción oral, comprensión lectora y producción escrita en contextos socioculturales, organizacionales y tecnológicos de carácter formal e informal dentro de un marco ético-humanístico e investigativo  y sostenible.',
              textoChequeo:'true'
            },
            {
              titulo: 'UNIDAD DE ESTUDIO 2- Fundamentos de Lingüística Organizacional- 3 crds',
              texto: 'Aplica el conocimiento de la lingüística y sus niveles de estudio para el análisis de los procesos comunicativos en las organizaciones.',
              textoChequeo:'false'
            },
            {
              titulo: 'UNIDAD DE ESTUDIO 3- Basic Business English II-5 crds',
              texto: 'Demuestra dominio de manera proficiente del idioma inglés bajo los estandáres del MCER con un alcance de A2 en las habilidades de comprensión auditiva, producción oral, comprensión lectora y producción escrita en contextos socioculturales, organizacionales y tecnológicos de carácter formal e informal dentro de un marco ético-humanístico e investigativo  y sostenible.',
              textoChequeo:'false'
            },
            {
              titulo: 'PERFIL DEL GRADUADOUNIDAD DE ESTUDIO 1- Basic Business English I- 5 crds',
              texto: 'Demuestra dominio de manera proficiente del idioma inglés bajo los estandáres del MCER con un alcance de A1 en las habilidades de comprensión auditiva, producción oral, comprensión lectora y producción escrita en contextos socioculturales, organizacionales y tecnológicos de carácter formal e informal dentro de un marco ético-humanístico e investigativo  y sostenible.',
              textoChequeo:'true'
            },
            {
              titulo: 'UNIDAD DE ESTUDIO 2- Fundamentos de Lingüística Organizacional- 3 crds',
              texto: 'Aplica el conocimiento de la lingüística y sus niveles de estudio para el análisis de los procesos comunicativos en las organizaciones.',
              textoChequeo:'false'
            },
            {
              titulo: 'UNIDAD DE ESTUDIO 3- Basic Business English II-5 crds',
              texto: 'Demuestra dominio de manera proficiente del idioma inglés bajo los estandáres del MCER con un alcance de A2 en las habilidades de comprensión auditiva, producción oral, comprensión lectora y producción escrita en contextos socioculturales, organizacionales y tecnológicos de carácter formal e informal dentro de un marco ético-humanístico e investigativo  y sostenible.',
              textoChequeo:'false'
            },
            {
              titulo: 'PERFIL DEL GRADUADOUNIDAD DE ESTUDIO 1- Basic Business English I- 5 crds',
              texto: 'Demuestra dominio de manera proficiente del idioma inglés bajo los estandáres del MCER con un alcance de A1 en las habilidades de comprensión auditiva, producción oral, comprensión lectora y producción escrita en contextos socioculturales, organizacionales y tecnológicos de carácter formal e informal dentro de un marco ético-humanístico e investigativo  y sostenible.',
              textoChequeo:'true'
            },
            {
              titulo: 'UNIDAD DE ESTUDIO 2- Fundamentos de Lingüística Organizacional- 3 crds',
              texto: 'Aplica el conocimiento de la lingüística y sus niveles de estudio para el análisis de los procesos comunicativos en las organizaciones.',
              textoChequeo:'false'
            },
            {
              titulo: 'UNIDAD DE ESTUDIO 3- Basic Business English II-5 crds',
              texto: 'Demuestra dominio de manera proficiente del idioma inglés bajo los estandáres del MCER con un alcance de A2 en las habilidades de comprensión auditiva, producción oral, comprensión lectora y producción escrita en contextos socioculturales, organizacionales y tecnológicos de carácter formal e informal dentro de un marco ético-humanístico e investigativo  y sostenible.',
              textoChequeo:'false'
            },
           ]
         },
         {
          columnaTitulo: 'APROBACIÓN',
          gruposColumna:
           [
            {
              titulo: 'PERFIL DEL GRADUADOUNIDAD DE ESTUDIO 1- Basic Business English I- 5 crds',
              texto: 'Demuestra dominio de manera proficiente del idioma inglés bajo los estandáres del MCER con un alcance de A1 en las habilidades de comprensión auditiva, producción oral, comprensión lectora y producción escrita en contextos socioculturales, organizacionales y tecnológicos de carácter formal e informal dentro de un marco ético-humanístico e investigativo  y sostenible.',
              textoChequeo:'true'
            },
            {
              titulo: 'UNIDAD DE ESTUDIO 2- Fundamentos de Lingüística Organizacional- 3 crds',
              texto: 'Aplica el conocimiento de la lingüística y sus niveles de estudio para el análisis de los procesos comunicativos en las organizaciones.',
              textoChequeo:'false'
            },
            {
              titulo: 'UNIDAD DE ESTUDIO 3- Basic Business English II-5 crds',
              texto: 'Demuestra dominio de manera proficiente del idioma inglés bajo los estandáres del MCER con un alcance de A2 en las habilidades de comprensión auditiva, producción oral, comprensión lectora y producción escrita en contextos socioculturales, organizacionales y tecnológicos de carácter formal e informal dentro de un marco ético-humanístico e investigativo  y sostenible.',
              textoChequeo:'false'
            },
            {
              titulo: 'PERFIL DEL GRADUADOUNIDAD DE ESTUDIO 1- Basic Business English I- 5 crds',
              texto: 'Demuestra dominio de manera proficiente del idioma inglés bajo los estandáres del MCER con un alcance de A1 en las habilidades de comprensión auditiva, producción oral, comprensión lectora y producción escrita en contextos socioculturales, organizacionales y tecnológicos de carácter formal e informal dentro de un marco ético-humanístico e investigativo  y sostenible.',
              textoChequeo:'true'
            },
            {
              titulo: 'UNIDAD DE ESTUDIO 2- Fundamentos de Lingüística Organizacional- 3 crds',
              texto: 'Aplica el conocimiento de la lingüística y sus niveles de estudio para el análisis de los procesos comunicativos en las organizaciones.',
              textoChequeo:'false'
            },
            {
              titulo: 'UNIDAD DE ESTUDIO 3- Basic Business English II-5 crds',
              texto: 'Demuestra dominio de manera proficiente del idioma inglés bajo los estandáres del MCER con un alcance de A2 en las habilidades de comprensión auditiva, producción oral, comprensión lectora y producción escrita en contextos socioculturales, organizacionales y tecnológicos de carácter formal e informal dentro de un marco ético-humanístico e investigativo  y sostenible.',
              textoChequeo:'false'
            },
            {
              titulo: 'PERFIL DEL GRADUADOUNIDAD DE ESTUDIO 1- Basic Business English I- 5 crds',
              texto: 'Demuestra dominio de manera proficiente del idioma inglés bajo los estandáres del MCER con un alcance de A1 en las habilidades de comprensión auditiva, producción oral, comprensión lectora y producción escrita en contextos socioculturales, organizacionales y tecnológicos de carácter formal e informal dentro de un marco ético-humanístico e investigativo  y sostenible.',
              textoChequeo:'true'
            },
            {
              titulo: 'UNIDAD DE ESTUDIO 2- Fundamentos de Lingüística Organizacional- 3 crds',
              texto: 'Aplica el conocimiento de la lingüística y sus niveles de estudio para el análisis de los procesos comunicativos en las organizaciones.',
              textoChequeo:'false'
            },
            {
              titulo: 'UNIDAD DE ESTUDIO 3- Basic Business English II-5 crds',
              texto: 'Demuestra dominio de manera proficiente del idioma inglés bajo los estandáres del MCER con un alcance de A2 en las habilidades de comprensión auditiva, producción oral, comprensión lectora y producción escrita en contextos socioculturales, organizacionales y tecnológicos de carácter formal e informal dentro de un marco ético-humanístico e investigativo  y sostenible.',
              textoChequeo:'false'
            },
           ]
         }
      ]
    },

    ]
  };

  public matrizCongruencia =
  {
    facultad: 'HUMANIDADES Y CENCIAS SOCIALES',
    programa: 'LENGUAS MODERNAS- presencial',
    filaPrincipal:  [
      {
        columnaTitulo: 'PERFIL',
        gruposColumna:
         [
          {
            titulo: 'PERFIL DEL GRADUADO',
            texto: '',
            textoChequeo: 'El graduado de Lenguas Modernas de la Universidad Ean es un gestor multilingue de los procesos organizacionales a partir de su competencia intercultural que contribuye a la solución de las necesidades del entorno.'
          },
         ]
       },
       {
        columnaTitulo: 'GENERAL',
        gruposColumna:
         [
          {
            titulo: 'COMPETENCIAS DEL GRADUADO',
            texto: '',
            textoChequeo: 'COMPETENCIAS DEL GRADUADO Se comunica de manera efectiva en español y de acuerdo con el nivel alcanzado en inglés y otras lenguas extranjeras (alemán, francés, italiano, portugués)  en diversos contextos culturales  y organizacionales .'
          },
          {
            titulo: 'RESULTADO DE APRENDIZAJE',
            texto: '',
            textoChequeo: 'RESULTADO DE APRENDIZAJE Se comunica de manera efectiva en español y de acuerdo con el nivel alcanzado en inglés y otras lenguas extranjeras (alemán, francés, italiano, portugués)  en diversos contextos culturales  y organizacionales.'
          }
         ]
       },
       {
        columnaTitulo: 'INTRODUCCIÓN',
        gruposColumna:
         [
          {
            titulo: 'UNIDAD DE ESTUDIO 1- Basic Business English I- 5 crds',
            texto: 'INTRODUCCIÓN Demuestra dominio de manera proficiente del idioma inglés bajo los estandáres del MCER con un alcance de A1 en las habilidades de comprensión auditiva, producción oral, comprensión lectora y producción escrita en contextos socioculturales, organizacionales y tecnológicos de carácter formal e informal dentro de un marco ético-humanístico e investigativo  y sostenible.',
            textoChequeo:'true'
          },
          {
            titulo: 'UNIDAD DE ESTUDIO 2- Fundamentos de Lingüística Organizacional- 3 crds',
            texto: ' INTRODUCCIÓNAplica el conocimiento de la lingüística y sus niveles de estudio para el análisis de los procesos comunicativos en las organizaciones.',
            textoChequeo:'false'
          },
          {
            titulo: 'UNIDAD DE ESTUDIO 3- Basic Business English II-5 crds',
            texto: 'INTRODUCCIÓN Demuestra dominio de manera proficiente del idioma inglés bajo los estandáres del MCER con un alcance de A2 en las habilidades de comprensión auditiva, producción oral, comprensión lectora y producción escrita en contextos socioculturales, organizacionales y tecnológicos de carácter formal e informal dentro de un marco ético-humanístico e investigativo  y sostenible.',
            textoChequeo:'false'
          },
          {
            titulo: 'UNIDAD DE ESTUDIO 4- Basic Business English I- 5 crds',
            texto: 'INTRODUCCIÓN Demuestra dominio de manera proficiente del idioma inglés bajo los estandáres del MCER con un alcance de A1 en las habilidades de comprensión auditiva, producción oral, comprensión lectora y producción escrita en contextos socioculturales, organizacionales y tecnológicos de carácter formal e informal dentro de un marco ético-humanístico e investigativo  y sostenible.',
            textoChequeo:'true'
          },
          {
            titulo: 'UNIDAD DE ESTUDIO 5- Fundamentos de Lingüística Organizacional- 3 crds',
            texto: 'INTRODUCCIÓN Aplica el conocimiento de la lingüística y sus niveles de estudio para el análisis de los procesos comunicativos en las organizaciones.',
            textoChequeo:'false'
          },
         ]
       },
       {
        columnaTitulo: 'CONSTRUCCIÓN',
        gruposColumna:
         [
          {
            titulo: 'UNIDAD DE ESTUDIO 6- Basic Business English I- 5 crds',
            texto: 'CONSTRUCCIÓN Demuestra dominio de manera proficiente del idioma inglés bajo los estandáres del MCER con un alcance de A1 en las habilidades de comprensión auditiva, producción oral, comprensión lectora y producción escrita en contextos socioculturales, organizacionales y tecnológicos de carácter formal e informal dentro de un marco ético-humanístico e investigativo  y sostenible.',
            textoChequeo:'true'
          },
          {
            titulo: 'UNIDAD DE ESTUDIO 7- Fundamentos de Lingüística Organizacional- 3 crds',
            texto: 'CONSTRUCCIÓN Aplica el conocimiento de la lingüística y sus niveles de estudio para el análisis de los procesos comunicativos en las organizaciones.',
            textoChequeo:'false'
          },
          {
            titulo: 'UNIDAD DE ESTUDIO 8- Basic Business English II-5 crds',
            texto: 'CONSTRUCCIÓN Demuestra dominio de manera proficiente del idioma inglés bajo los estandáres del MCER con un alcance de A2 en las habilidades de comprensión auditiva, producción oral, comprensión lectora y producción escrita en contextos socioculturales, organizacionales y tecnológicos de carácter formal e informal dentro de un marco ético-humanístico e investigativo  y sostenible.',
            textoChequeo:'false'
          },
          {
            titulo: 'UNIDAD DE ESTUDIO 9- Basic Business English I- 5 crds',
            texto: 'CONSTRUCCIÓN Demuestra dominio de manera proficiente del idioma inglés bajo los estandáres del MCER con un alcance de A1 en las habilidades de comprensión auditiva, producción oral, comprensión lectora y producción escrita en contextos socioculturales, organizacionales y tecnológicos de carácter formal e informal dentro de un marco ético-humanístico e investigativo  y sostenible.',
            textoChequeo:'true'
          },
         ]
       },
       {
        columnaTitulo: 'APROBACIÓN',
        gruposColumna:
         [
          {
            titulo: 'UNIDAD DE ESTUDIO 10- Basic Business English I- 5 crds',
            texto: 'APROBACIÓN Demuestra dominio de manera proficiente del idioma inglés bajo los estandáres del MCER con un alcance de A1 en las habilidades de comprensión auditiva, producción oral, comprensión lectora y producción escrita en contextos socioculturales, organizacionales y tecnológicos de carácter formal e informal dentro de un marco ético-humanístico e investigativo  y sostenible.',
            textoChequeo:'true'
          },
          {
            titulo: 'UNIDAD DE ESTUDIO 11- Fundamentos de Lingüística Organizacional- 3 crds',
            texto: 'APROBACIÓN Aplica el conocimiento de la lingüística y sus niveles de estudio para el análisis de los procesos comunicativos en las organizaciones.',
            textoChequeo:'false'
          },
          {
            titulo: 'UNIDAD DE ESTUDIO 12- Basic Business English II-5 crds',
            texto: 'APROBACIÓN Demuestra dominio de manera proficiente del idioma inglés bajo los estandáres del MCER con un alcance de A2 en las habilidades de comprensión auditiva, producción oral, comprensión lectora y producción escrita en contextos socioculturales, organizacionales y tecnológicos de carácter formal e informal dentro de un marco ético-humanístico e investigativo  y sostenible.',
            textoChequeo:'false'
          },
          {
            titulo: 'UNIDAD DE ESTUDIO 13- Basic Business English I- 5 crds',
            texto: 'APROBACIÓN Demuestra dominio de manera proficiente del idioma inglés bajo los estandáres del MCER con un alcance de A1 en las habilidades de comprensión auditiva, producción oral, comprensión lectora y producción escrita en contextos socioculturales, organizacionales y tecnológicos de carácter formal e informal dentro de un marco ético-humanístico e investigativo  y sostenible.',
            textoChequeo:'true'
          },
          {
            titulo: 'UNIDAD DE ESTUDIO 14- Fundamentos de Lingüística Organizacional- 3 crds',
            texto: 'APROBACIÓN Aplica el conocimiento de la lingüística y sus niveles de estudio para el análisis de los procesos comunicativos en las organizaciones.',
            textoChequeo:'false'
          },
         ]
       }
    ]
  };

  matrizCongruenciaBasica = {
    fila : [
      {
        competencia:"GENERAL",
        resultado:"GENERAL",
        undades:[
          {
            valor:"INTRODUCCIÓN"
          },
          {
            valor:"INTRODUCCIÓN"
          },
          {
            valor:"INTRODUCCIÓN"
          }
        ]
      },
      {
        competencia:"COMPETENCIAS DEL GRADUADO",
        resultado:"RESULTADO DE APRENDIZAJE",
        undades:[
          {
            valor:"UNIDAD DE ESTUDIO 1- Basic Business English I- 5 crds"
          },
          {
            valor:"UNIDAD DE ESTUDIO 2- Basic Business English I- 5 crds"
          },
          {
            valor:"UNIDAD DE ESTUDIO 3- Basic Business English I- 5 crds"
          }
        ]
      },
      {
        competencia:"Se comunica de manera efectiva en español y de acuerdo con el nivel alcanzado en inglés y otras lenguas extranjeras (alemán, francés, italiano, portugués)  en diversos contextos culturales  y organizacionales . ",
        resultado:"Demuestra dominio proficiente de las lenguas extranjeras impartidas en el programa,  bajo los estandáres del MCER con el alcance pleno establecido para cada nivel de inglés (B2)  y otras lenguas extranjeras (B1 en alemán, francés, italiano, portugués)  en las habilidades de comprensión auditiva, producción oral, comprensión lectora y producción escrita, en diversos contextos culturales y de la vida cotidiana, así como en  ámbitos profesionales.",
        undades:[
          {
            valor:"true"
          },
          {
            valor:"false"
          },
          {
            valor:"false"
          }
        ]
      }
    ]
  };

  userForm: any;
  matrizForm:any;
  matrixForm: any;
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.matrizForm = this.fb.group({
      // facultad:[''],
      // programa:[''],
      filaPrincipal: this.fb.array([])
    });
    this.userForm = this.fb.group({
      users: this.fb.array([])
    });

    this.matrixForm = this.fb.group({
      // facultad:[''],
      // programa:[''],
      filaPrincipal: this.fb.array([])
    });
    this.getEmployee();
    this.initFilaPrincipal()
  }

  initFilaPrincipal() {
    const control = <FormArray>this.matrizForm.get('filaPrincipal');
    console.log('filaPrincipal',control);
    for (const comp of this.matrizCongruencia.filaPrincipal) {
      const grp = this.fb.group({
        columnaTitulo: [comp.columnaTitulo,],
        gruposColumna: this.fb.array([])
      });
      this.initFilaCompetencias();
      control.push(grp);
    }
  }



  initFilaCompetencias() {
    //console.log('compo',compo);
    const formfilaPrincipal = <FormArray>this.matrizForm.get('filaPrincipal');
    console.log('formfilaPrincipal',formfilaPrincipal);
    const controlc = <FormArray>formfilaPrincipal;
    console.log('competencias',controlc);
    console.log('this.matrizForm',this.matrizForm);
    console.log('this.matrizCongruencia',this.matrizCongruencia);
    console.log('this.matrizCongruencia.filaPrincipal',this.matrizCongruencia.filaPrincipal);
    console.log('matrizCongruencia.filaPrincipal[0].gruposColumna',this.matrizCongruencia.filaPrincipal[0].gruposColumna);

    for (const element of this.matrizCongruencia.filaPrincipal) {
      element.gruposColumna.forEach(element => {
        const grp = this.fb.group({
          titulo: [element.titulo,],
          texto: [element.texto,],
          textoChequeo: [element.textoChequeo,]
        });
        controlc.push(grp)
      });
;
    }
      console.log('competencias',controlc);
  }

  initGruposColumna() {
    const control = <FormArray>this.matrizForm.controls['filaPrincipal'];
    for (const comp of this.matrizCongruencia.filaPrincipal[0].gruposColumna) {
      const grp = this.fb.group({
        gruposColumna: this.fb.array([

        ])
      });
      this.initGruposColumna()
      control.push(grp);
    }
  }

  getEmployee() {
    const control = <FormArray>this.userForm.get('users');
    for (const emp of this.employee) {
      const grp = this.fb.group({
        name: [emp.name, Validators.required],
        email: [emp.email, [Validators.required]],
        mobNumber: [emp.mobNumber, [Validators.min(10)]],
        dob: [emp.dob, Validators.required]
      });
      control.push(grp);
    }
  }


  initiatForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobNumber: ['', [Validators.min(10)]],
      dob: ['']
    });
  }

  get getFormData(): FormArray {
    return <FormArray>this.userForm.get('users');
  }

  addUser() {
    const control = <FormArray>this.userForm.get('users');
    control.push(this.initiatForm());
  }

  remove(index: number) {
    const control = <FormArray>this.userForm.get('users');
    control.removeAt(index);
  }

  save() {
    console.log('isValid', this.userForm.valid);
    console.log('value', this.userForm.value);
  }

}
