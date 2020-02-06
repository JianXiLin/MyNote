use demo01

// db.students.insert({name:"Ming",sex:"ÄĞ",className:"Ê®"})
// db.students.update({_id:ObjectId("5e3bc1b4499005b09324b591")},{name:"Ning",sex:"ÄĞ"})
// db.students.update(
//     {name:"Xing"},
//     {$set:
//         {
//           person:{age:10}
//         }
//     }
// )
// inc
// db.students.update(
//     {name:"Xing"},
//     {$inc:
//         {
//           "person.age":-1
//         }
//     }
// )

// $addToSet
// db.students.update(
//     {name:"Xing"},
//     {$addToSet:
//         {
//           tag:["tag02",2.3]
//         }
//     }
// )
// db.students.update(
//     {name:"Xing"},
//     {$addToSet:
//         {
//           tag:{$each:["tag03","tag04"]}
//         }
//     }
// )
//$push
// db.students.update(
//     {name:"Xing"},
//     {
//         $push:{
//           tag:{
//               $each:["tag05","tag06"],
//               $sort:1,
//               $slice:3
//           }
//         }
//     }
// )
//$lt
// db.students.find(
//     {age:{$lt:18}}
// )
// //$lte
// db.students.find(
//     {age:{$lte:18}}
// )
// //$gt
// db.students.find(
//     {age:{$gt:11}}
// )
// //$gte
// db.students.find(
//     {age:{$gte:11}}
// )    
//$ne
// db.students.find(
//     {age:{$ne:10}}
// )    
//$in
// db.students.find(
//     {
//       age:{
//         $in:[10,11,12,16]
//       }
//     }
// )
// //$nin
// db.students.find(
//     {
//       age:{
//         $nin:[10,11,12,16]
//       }
//     }
// )
//$or
// db.students.find(
//     {
//       $or:[
//         {age:
//             {$in:[10,11,12,16]}
//         },
//         {sex:
//             {$ne:"Å®"}
//         }
//       ]
//     }
// )
//$nor
// db.students.find(
//     {
//       $nor:[
//         {age:
//             {$in:[10,11,12,16]}
//         },
//         {sex:
//             {$ne:"Å®"}
//         }
//       ]
//     }
// )
//$and
// db.students.find(
//     {
//       $and:[
//         {age:
//             {$in:[10,11,12,16]}
//         },
//         {sex:
//             {$ne:"ÄĞ"}
//         }
//       ]
//     }
// )
//$not
// db.students.find(  
//     {
//         age:{$not:{$ne:18}}
//      }
// )
// db.students.find(  
//     {
//         name:{$not:/^M.*/}
//      }
// )
//$exists
// db.students.find(
//     {
//         className:{$exists:false}
//     }
// )
    
db.students.find({})
