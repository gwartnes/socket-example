import { Component, OnInit } from '@angular/core';
import { DocumentService } from './services/document.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DocumentService]
})
export class AppComponent implements OnInit {
  selectedDocument: Document;
  docIds: Observable<string[]>;

  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    this.docIds = this.documentService.getDocuments();
  }
}
