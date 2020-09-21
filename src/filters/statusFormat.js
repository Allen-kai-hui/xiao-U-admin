import Vue from 'vue'
Vue.filter("statusFormat", (status) => {
    switch(status) {
        case 1:
            return "启用";
            break;
        case 2:
            return "禁用";
            break;
    }
})