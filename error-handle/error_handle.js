//throw new Error('something went wrong')

//定位报错的代码行
/*
const obj = {
  message: 'something went wrong'
}

Error.captureStackTrace(obj)

throw obj
*/


//try...catch
// try{
//   throw new Error('wrong')
// }catch(e){
//   console.log(e)
// }


//promise调用catch方法报错
// async function foo() {
//   throw new Error('async function went wrong')
// }

// foo()
//   .catch(e => {
//     console.log(e)
//   })


async function foo() {
  try{
    await bar()
  }catch(e) {
    console.log(e)
  }
}

async function bar() {
  throw new Error('async function went wrong')
}

foo()























