export class DestinoViaje {
    private bandera: Boolean;
    servicios:String[];
    constructor(public nombre: String, public imageurl: String) {
        this.servicios=['Gym','Desayuno'];
    }
    GetState(){
        return this.bandera;
    }
    SetState(state:Boolean){
        this.bandera=state;
    }
}