export default class coolText{
 index:number = 0;
 chars:number = 0;
 container:String = '.text .content';

 constructor(private text:String ,
              private speed:number){}

 init(el){
     this.chars = this.text.length;
     this.write(el);
 }

 write(el){
            while (el.nativeElement.firstChild) {
                    el.nativeElement.firstChild.remove();
                }
         let loop = () => {  
		    el.nativeElement.append(this.text[this.index]);
            this.index++;
			if(this.index<this.chars){
				 window.setTimeout(() => {
					loop();
				}, this.speed);
			}
         }       

        loop();   
		}


}