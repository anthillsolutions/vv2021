import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as marked from 'marked';

@Pipe({
  name: 'markdown'
})
export class MarkdownPipe implements PipeTransform {

  constructor(
    private readonly sanitizer: DomSanitizer
  ) { }

  transform(content: string): SafeHtml {
    const contentMd = marked(content);
    const contentAdded = contentMd.replace(/<a/gi, '<a style="font-weight: bold; font-size: 5.3rem; line-height: 5.3rem;');
    return this.sanitizer.bypassSecurityTrustHtml(marked(contentAdded));
  }

}
