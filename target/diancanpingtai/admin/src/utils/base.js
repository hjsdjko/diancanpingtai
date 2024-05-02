const base = {
    get() {
                return {
            url : "http://localhost:8080/diancanpingtai/",
            name: "diancanpingtai",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/diancanpingtai/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "点餐平台系统"
        } 
    }
}
export default base
