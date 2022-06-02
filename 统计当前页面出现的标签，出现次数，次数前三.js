// 在浏览器环境运行----------------------
    let doms = document.querySelectorAll('*')
    let memo = {}
    for(let i = 0;i<doms.length;i++){
        let node = doms[i].nodeName
        if(memo[node]){
            memo[node] +=1
        }else {
            memo[node] = 1
        }
    }
    let ret = Object.entries(memo).sort((a,b)=>{return b[1]-a[1]}).slice(0,3)
    console.table(ret)
