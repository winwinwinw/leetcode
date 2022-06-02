
 // 使a===a+1通过断言,两种方法
 // 1.
 //      let a = Number.MAX_VALUE
 // 2.
         let val = 0.12
        Object.defineProperty(globalThis,'a',{
            get(){
                return val--
            }
        })
        console.assert(a===a+1)
