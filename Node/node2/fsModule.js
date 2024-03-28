import fs from "fs"
// console.log(fs);

fs.writeFile("1.txt","My name is Omkar",()=>{
    console.log("Done")
})

fs.readFile("1.txt",(err,data)=>{
    console.log(err,"\n",data.toString());
})

fs.appendFile("2.txt"," Deshmukh",(e,d)=>{
    console.log(e,"\n",d);
})