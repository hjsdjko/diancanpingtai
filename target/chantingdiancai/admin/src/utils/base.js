const base = {
    get() {
                return {
            url : "http://localhost:8080/chantingdiancai/",
            name: "chantingdiancai",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/chantingdiancai/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "餐厅点菜管理系统"
        } 
    }
}
export default base
