const base = {
    get() {
        return {
            url : "http://localhost:8080/xianhuashangcheng/",
            name: "xianhuashangcheng",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xianhuashangcheng/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "在线网上花店"
        } 
    }
}
export default base
