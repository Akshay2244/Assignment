export class Employees
{
    id:any;
    name:any;
    phone:any;
    address_line1:any;
    address_line2:any;
    postal_code:any;

    constructor(id,name, phone,address_line1,address_line2,postal_code){
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.address_line1 = address_line1;
        this.address_line2 = address_line2;
        this.postal_code = postal_code;
    }
}