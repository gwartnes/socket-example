import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { DocumentService } from 'src/app/services/document.service';
import { Subscription, fromEvent, merge } from 'rxjs';
import { Document } from 'src/app/models/document';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit, OnDestroy {
  @ViewChild('doc') docText: ElementRef<HTMLTextAreaElement>;
  document: Document;
  private _docSub: Subscription;
  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    this._docSub = this.documentService.currentDocument.pipe(
      startWith({ id: '', doc: 'Select an existing document or create a new one to get started'})
    ).subscribe(document => this.document = document);
  }

  ngOnDestroy() {
    this._docSub.unsubscribe();
  }

  editDoc() {
    this.documentService.editDocument(this.document);
  }
}
