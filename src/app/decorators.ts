export function trace(enable:boolean, prefix:string = '') {
    
    return function (target:any, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log("g(): called");
        console.log("target : "+ target);
        console.log("propertyKey : " + propertyKey);
        console.log("descriptor " + JSON.stringify(descriptor)); 
        descriptor.configurable = enable;
    }
}
