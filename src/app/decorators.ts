export function trace(enable:boolean, prefix:string = '') {

  return function(target:any, propertyKey: string, descriptor: PropertyDescriptor) {

    const originalMethod = descriptor.value;
    
    descriptor.value = function() {
      if(enable) {
        console.log(prefix + ">>> ENTER ParentClass::" + propertyKey);
        originalMethod.call(this, arguments[0]);
        console.log(prefix + "<<< EXIT ParentClass::" + propertyKey);
        return arguments[0];
      }
    };
    return descriptor;  
  }
    
}
