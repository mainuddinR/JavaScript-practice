var student={id:1304,phone:1788420607, name:'Mainuddin'};
var student2={id:1472, phone: 2932, name:'Atikul'};
 
console.log(student);
console.log(student2);

//3 upay object acces paoa jay
var phone=student.phone;
console.log(phone);

//or
var name=student['name'];//student["name"]
console.log(name);
//or
idNo="id";
var id=student[idNo];
console.log(id);

student.phone=1788;
console.log(student);
student['phone']=9993;
console.log(student);
//new property create 
student.Address='Patuakhali';
console.log(student);



