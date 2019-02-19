import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser'
import * as jsPDF from 'jspdf'

@IonicPage()
@Component({
  selector: 'page-download',
  templateUrl: 'download.html',
  providers: [
    FileTransfer, File, FileTransferObject, DocumentViewer, InAppBrowser
  ]
})
export class DownloadPage {

  sucesso:string = 'baixou.....';
  falha:string = 'falhou....';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private transfer: FileTransfer,
    private file: File,
    private document: DocumentViewer,
    private platform: Platform,
    private inappbrowser: InAppBrowser
  ) {
    //construtor
  }

  ionViewDidLoad() {
    console.log('abriu download')
  }

  teste(){
    let link = 'https://api.fontedavida.org/uploads/4//Resource/Retorno-a-Santidade.pdf'
    const doc = new jsPDF()
    doc.text(link, 10,10)
    doc.save('jspdf-teste.pdf')
  }
  testeComAppBrowser(){
    let url = 'https://api.fontedavida.org/uploads/4//Resource/Retorno-a-Santidade.pdf'
    const options: InAppBrowserOptions = {
      zoom: 'no',
      hardwareback: 'no'
    }
    const browser = this.inappbrowser.create(url, '_blank', options)
    browser.show()
  }

  abrirPDF(){
    console.log('funcao de ler')
    const options: DocumentViewerOptions = {
      title: 'my pdf'
    };
    this.document.canViewDocument ? console.log('can view') : console.log('can\'t view')
    
    this.document.viewDocument('https://api.fontedavida.org/uploads/4//Resource/Retorno-a-Santidade.pdf','application/pdf', options)
  }
  
  baixarFoto(){
    let path = null

    if( this.platform.is('ios') ){
      path = this.file.documentsDirectory
    }
    else{
      path = this.file.dataDirectory
    }

    const transfer = this.transfer.create()
    transfer.download('https://api.fontedavida.org/uploads/4//Resource/Retorno-a-Santidade.pdf', path+'teste.pdf').then(entry=>{
      let url  = entry.toURL()
      console.log('baixar chamado...')
      this.document.viewDocument(url, 'application/pdf', {})
    })

    /* const fileTransfer: FileTransferObject = this.transfer.create();
    const url = "./assets/imgs/logo.png";
    console.log('local', this.file.dataDirectory)
    console.log('url', url)
    fileTransfer.download(url, this.file.externalRootDirectory+'/lessons.png')
    .then( 
      (entry) => {
        console.log('download complete', entry.toURL())
        console.log('y', entry.toURL() )
      }
    )
    .catch(
      reason => { console.log('bug bcause of', reason) }
      
    ) */
  }

}
