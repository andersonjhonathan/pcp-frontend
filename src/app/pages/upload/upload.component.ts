import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-upload',
  imports: [],
  templateUrl: './upload.html',
  styleUrl: './upload.css',
})
export class UploadComponent {

  fileName: string = '';
  fileData: any[] = [];

  baixarModelo() {
    const modelo = [
      {
        Codigo: '',
        Descricao: '',
        Disciplina: '',
        DataInicio: '',
        DataFim: '',
        Responsavel: '',
        Status: ''
      }
    ];

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(modelo);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Modelo');

    XLSX.writeFile(wb, 'modelo_nexus_plan.xlsx');
  }

  onFileChange(event: any) {
    const target: DataTransfer = <DataTransfer>(event.target);

    if (target.files.length !== 1) return;

    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      this.fileData = XLSX.utils.sheet_to_json(ws);
      this.fileName = target.files[0].name;

      console.log(this.fileData);
    };

    reader.readAsBinaryString(target.files[0]);
  }

  importarArquivo() {
    alert(`Arquivo importado com ${this.fileData.length} registros.`);
    
    // Aqui futuramente enviaremos para o backend
    console.log('Dados para enviar ao backend:', this.fileData);
  }

}