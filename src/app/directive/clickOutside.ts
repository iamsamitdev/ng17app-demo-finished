// โค้ด ClickOutsideDirective นี้เป็น Directive ใน Angular ที่ใช้ตรวจสอบว่าผู้ใช้คลิก นอก element ที่กำหนดหรือไม่
import { DOCUMENT } from "@angular/common"
import { Directive, ElementRef, EventEmitter, Inject, Output } from "@angular/core"

// selector: Directive นี้ใช้ selector [clickOutside] หมายความว่าสามารถใช้ Directive นี้กับ element ใด ๆ ใน template HTML ที่มี attribute clickOutside
@Directive({
    selector: '[clickOutside]',
    standalone: true
})

export class ClickOutsideDirective {

    // Output: Directive นี้มี Output event ชื่อ clickOutside  event นี้จะถูก emit เมื่อผู้ใช้คลิก นอก element ที่กำหนด
    // EventEmitter<void>() 
    @Output() clickOutside = new EventEmitter<void>()

    // constructor: Constructor ของ Directive นี้รับ parameter 2 ตัว
    // - element: ElementRef ของ element ที่กำหนด
    // - document: Document object ของ Angular
    constructor(
        private element: ElementRef,
        @Inject(DOCUMENT) private document: Document
    ) {}

    // การทำงาน: Directive นี้ทำงานโดยติดตั้ง event listener click กับ document เมื่อผู้ใช้คลิกที่ใด ๆ บนหน้าจอ
    // event listener จะตรวจสอบว่าผู้ใช้คลิก ภายใน element ที่กำหนดหรือไม่
    // ถ้าผู้ใช้คลิก นอก element event clickOutside จะถูก emit
}