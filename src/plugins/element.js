import Vue from 'vue'

import {Button,
    Tooltip,
    Table,
    TableColumn,
    Loading,
    DatePicker,
    Select,
    Option,
    MessageBox,
    Slider,
    Dialog,
    Scrollbar
} from "element-ui";

Vue.use(Button)
Vue.use(Tooltip)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Loading)
Vue.use(DatePicker)
Vue.use(Select)
Vue.use(Option)
Vue.use(Slider)
Vue.use(Dialog)
Vue.use(Scrollbar)


Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt


