// use my_test
// 
// db.depts.insert(
//     [
//         {
//           "_id" : ObjectId("5941f2bac1bc86928f4de49b"),
//           "deptno" : 20.0,
//           "dname" : "�칫��",
//           "loc" : "�Ϻ�"
//         },
//         {
//           "_id" : ObjectId("5941f2bac1bc86928f4de49c"),
//           "deptno" : 30.0,
//           "dname" : "���۲�",
//           "loc" : "����"
//         },
//         {
//           "_id" : ObjectId("5941f2bac1bc86928f4de49d"),
//           "deptno" : 40.0,
//           "dname" : "��Ӫ��",
//           "loc" : "����"
//         }
//     ]
// )
// db.emps.insert(
//     [
//         {
//           "_id" : ObjectId("5941f5bfc1bc86928f4de4ac"),
//           "empno" : 7369.0,
//           "ename" : "�ֳ�",
//           "job" : "ְԱ",
//           "mgr" : 7902.0,
//           "hiredate" : ISODate("1980-12-16T16:00:00Z"),
//           "sal" : 800.0,
//           "depno" : 20.0
//         },
//         {
//           "_id" : ObjectId("5941f5bfc1bc86928f4de4ad"),
//           "empno" : 7499.0,
//           "ename" : "�����",
//           "job" : "����",
//           "mgr" : 7698.0,
//           "hiredate" : ISODate("1981-02-19T16:00:00Z"),
//           "sal" : 1600.0,
//           "comm" : 300.0,
//           "depno" : 30.0
//         },
//         {
//           "_id" : ObjectId("5941f5bfc1bc86928f4de4ae"),
//           "empno" : 7521.0,
//           "ename" : "������",
//           "job" : "����",
//           "mgr" : 7698.0,
//           "hiredate" : ISODate("1981-02-21T16:00:00Z"),
//           "sal" : 1250.0,
//           "comm" : 500.0,
//           "depno" : 30.0
//         },
//         {
//           "_id" : ObjectId("5941f5bfc1bc86928f4de4af"),
//           "empno" : 7566.0,
//           "ename" : "¬����",
//           "job" : "����",
//           "mgr" : 7839.0,
//           "hiredate" : ISODate("1981-04-01T16:00:00Z"),
//           "sal" : 2975.0,
//           "depno" : 20.0
//         },
//         {
//           "_id" : ObjectId("5941f5bfc1bc86928f4de4b0"),
//           "empno" : 7654.0,
//           "ename" : "�˽���",
//           "job" : "����",
//           "mgr" : 7698.0,
//           "hiredate" : ISODate("1981-09-27T16:00:00Z"),
//           "sal" : 1250.0,
//           "comm" : 1400.0,
//           "depno" : 30.0
//         },
//         {
//           "_id" : ObjectId("5941f5bfc1bc86928f4de4b1"),
//           "empno" : 7698.0,
//           "ename" : "������",
//           "job" : "����",
//           "mgr" : 7839.0,
//           "hiredate" : ISODate("1981-04-30T16:00:00Z"),
//           "sal" : 2850.0,
//           "depno" : 30.0
//         },
//         {
//           "_id" : ObjectId("5941f5bfc1bc86928f4de4b2"),
//           "empno" : 7782.0,
//           "ename" : "���",
//           "job" : "����",
//           "mgr" : 7839.0,
//           "hiredate" : ISODate("1981-06-08T16:00:00Z"),
//           "sal" : 2450.0,
//           "depno" : 10.0
//         },
//         {
//           "_id" : ObjectId("5941f5bfc1bc86928f4de4b3"),
//           "empno" : 7788.0,
//           "ename" : "����ʤ",
//           "job" : "����ʦ",
//           "mgr" : 7566.0,
//           "hiredate" : ISODate("1987-07-12T16:00:00Z"),
//           "sal" : 3000.0,
//           "depno" : 20.0
//         },
//         {
//           "_id" : ObjectId("5941f5bfc1bc86928f4de4b4"),
//           "empno" : 7839.0,
//           "ename" : "�ν�",
//           "job" : "���³�",
//           "hiredate" : ISODate("1981-11-16T16:00:00Z"),
//           "sal" : 5000.0,
//           "depno" : 10.0
//         },
//         {
//           "_id" : ObjectId("5941f5bfc1bc86928f4de4b5"),
//           "empno" : 7844.0,
//           "ename" : "����ϧ",
//           "job" : "����",
//           "mgr" : 7698.0,
//           "hiredate" : ISODate("1981-09-07T16:00:00Z"),
//           "sal" : 1500.0,
//           "comm" : 0.0,
//           "depno" : 30.0
//         },
//         {
//           "_id" : ObjectId("5941f5bfc1bc86928f4de4b6"),
//           "empno" : 7876.0,
//           "ename" : "����",
//           "job" : "ְԱ",
//           "mgr" : 7902.0,
//           "hiredate" : ISODate("1987-07-12T16:00:00Z"),
//           "sal" : 1100.0,
//           "depno" : 20.0
//         },
//         {
//           "_id" : ObjectId("5941f5bfc1bc86928f4de4b7"),
//           "empno" : 7900.0,
//           "ename" : "����",
//           "job" : "ְԱ",
//           "mgr" : 7782.0,
//           "hiredate" : ISODate("1981-12-02T16:00:00Z"),
//           "sal" : 950.0,
//           "depno" : 10.0
//         },
//         {
//           "_id" : ObjectId("5941f5bfc1bc86928f4de4b8"),
//           "empno" : 7902.0,
//           "ename" : "����",
//           "job" : "����ʦ",
//           "mgr" : 7566.0,
//           "hiredate" : ISODate("1981-12-02T16:00:00Z"),
//           "sal" : 3000.0,
//           "depno" : 20.0
//         },
//         {
//           "_id" : ObjectId("5941f5bfc1bc86928f4de4b9"),
//           "empno" : 7934.0,
//           "ename" : "³����",
//           "job" : "ְԱ",
//           "mgr" : 7782.0,
//           "hiredate" : ISODate("1982-01-22T16:00:00Z"),
//           "sal" : 1300.0,
//           "depno" : 10.0
//         }
//     ]
// )
// 
// db.depts.find({})
// db.emps.find({})
//1.����my_test���ݿ�
use my_test

//2.�����ݿ��user�����в���һ���ĵ�
// db.users.insert(
//     [
//         {username:"xing"},
//         {username:"sunwukong"}
//     ]
// )

//3.��ѯuser�����е��ĵ�
// db.users.find({})

//4.�����ݿ��user�����в���һ���ĵ�		
// db.users.insert(
//     {
//         username:"ming"
//     }
// )

//5.��ѯ���ݿ�user�����е��ĵ�
// db.runCommand(
//     {
//         "find":"users"
//     }
// )

//6.ͳ�����ݿ�user�����е��ĵ�����
// db.runCommand(
//     {
//         "count":"users"
//     }
// )

//7.��ѯ���ݿ�user������usernameΪsunwukong���ĵ�
// db.users.find(
//     {
//         username:"sunwukong"
//     }
// )

//8.�����ݿ�user�����е�usernameΪsunwukong���ĵ������һ��address���ԣ�����ֵΪhuaguoshan
// db.users.update(
//     {username:"sunwukong"},
//     {$set:{address:"huaguoshan"}}
// )

//9.ʹ��{username:"tangseng"} �滻 username Ϊ zhubajie���ĵ�
// db.users.update(
//     {username:"tangseng"},
//     {$set:{username:"zhubajie"}},
//     true
// )

//10.ɾ��usernameΪsunwukong���ĵ���address����
// db.users.update(
//     {username:"sunwukong"},
//     {$unset:{address:""}}
// )

//11.��usernameΪsunwukong���ĵ��У����һ��hobby:{cities:["beijing","shanghai","shenzhen"] , movies:["sanguo","hero"]}
// db.users.update(
//     {username:"sunwukong"},
//     {
//             $set:{
//                 hobby:{
//                     cities:["beijing","shanghai","shenzhen"],
//                     movies:["sanguo","hero"]
//                 }
//             }
//     }
// )
// 
//12.��usernameΪtangseng���ĵ��У����һ��hobby:{movies:["A Chinese Odyssey","King of comedy"]}
// db.users.update(
//     {username:"tangseng"},
//     {
//         $set:{
//             hobby:{
//                 movies:["A Chinese Odyssey","King of comedy"]
//             }
//         }
//     },
//     true
// )

//13.��ѯϲ����Ӱhero���ĵ�
// db.users.find(
//     {
//         "hobby.movies":{$in:["hero"]}
//     }
// )

//14.��tangseng�����һ���µĵ�ӰInterstellar
// db.users.update(
//     {username:"tangseng"},
//     {
//         $addToSet:{
//             "hobby.movies":"Interstellar"      
//         }
//     }
// )

//15.ɾ��ϲ��beijing���û�
// db.users.deleteMany(
//     {"hobby.cities":{$in:["beijing"]}}
// )

//16.ɾ��user����
// db.users.drop()

//17.��numbers�в���20000������
// ����һ
// for(var i=1;i<=20000;i++){    
//     db.numbers.insert(
//         {num:i}
//     )
// }
// ������
// var nums = [];
// for(var i=1;i<=20000;i++){    
//     nums.push({num:i})
// }
// db.numbers.insert(nums)

//18.��ѯnumbers��numΪ500���ĵ�
// db.numbers.find(
//     {num:500}
// )

//19.��ѯnumbers��num����5000���ĵ�
// db.numbers.find(
//     {num:{$gt:5000}}
// )

//20.��ѯnumbers��numС��30���ĵ�
// db.numbers.find(
//     {num:{$lt:30}}
// )

//21.��ѯnumbers��num����40С��50���ĵ�
//����һ
// db.numbers.find(
//     {
//         $and:[
//             {num:{$gt:40}},
//             {num:{$lt:50}}
//         ]
//     }
// )
// ������
// db.numbers.find(
//     {
//        num:{$gt:40,$lt:50}
//     }
// )

//22.��ѯnumbers��num����19996���ĵ�
// db.numbers.find(
//     {
//         num:{$gt:19996}
//     }
// )
 
//23.�鿴numbers�����е�ǰ10������
// db.numbers.find().limit(10)

//24.�鿴numbers�����еĵ�11����20������
// db.numbers.find().skip(10).limit(10)

//25.�鿴numbers�����еĵ�21����30������
// db.numbers.find().skip(20).limit(10)


//26.��dept��emp���ϵ��뵽���ݿ���


//27.��ѯ����С��2000��Ա��
// db.emps.find(
//     {
//         sal:{$lt:2000}
//     }
// )

//28.��ѯ������1000-2000֮���Ա��
// db.emps.find(
//     {
//         sal:{$lte:2000,$gte:1000}
//     }
// )

//29.��ѯ����С��1000�����2500��Ա��
// db.emps.find(
//     {
//         $or:[
//             {sal:{$lte:1000}},
//             {sal:{$gte:2500}}
//         ]
//         
//      }
// )

//30.��ѯ�칫�ҵ�����Ա��
// var depno = db.depts.findOne({dname:"�칫��"}).deptno
// db.emps.find({depno:depno})

//31.��ѯ���۲�������Ա��
// var depno = db.depts.findOne({dname:"���۲�"}).deptno
// db.emps.find({depno:depno})

//32.��ѯ����mgrΪ7698������Ա��
// db.emps.find(
//     {
//         mgr:7698
//     }
// )


//33.Ϊ����н�ʵ���1000��Ա�����ӹ���400Ԫ
// db.emps.update(
//     {sal:{$lt:1000}},
//     {
//         $inc:{sal:400}
//     }
// )


db.depts.find({})
db.emps.find({})