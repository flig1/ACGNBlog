---
title: Vue2+Vue3学习笔记
published: 2026-01-26
description: 'Vue2+Vue3学习总结'
image: ''
tags: ['vue2','vue3']
category: '前端'
draft: false 
lang: ''
---

# Vue2+Vue3学习笔记

## 1. 基础篇

### 1.1 Vue简介与核心概念

#### 1.1.1 Vue是什么

Vue是一套用于构建用户界面的渐进式JavaScript框架。与其它大型框架不同的是，Vue被设计为可以自底向上逐层应用。Vue的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。

#### 1.1.2 核心概念

- **响应式数据绑定**：自动追踪数据变化并更新DOM
- **组件化开发**：将UI拆分为可复用的组件
- **虚拟DOM**：提高渲染性能
- **指令系统**：简化DOM操作
- **生命周期钩子**：控制组件生命周期
- **状态管理**：集中管理应用状态

### 1.2 Vue2与Vue3的对比概述

| 特性       | Vue2                  | Vue3                               |
| ---------- | --------------------- | ---------------------------------- |
| 发布时间   | 2016年                | 2020年                             |
| 核心架构   | Options API           | Composition API + Options API      |
| 响应式系统 | Object.defineProperty | Proxy                              |
| 构建工具   | Vue CLI               | Vite                               |
| 状态管理   | Vuex                  | Pinia (推荐) / Vuex 4              |
| 类型支持   | 部分支持              | 完全支持TypeScript                 |
| 性能       | 优秀                  | 更优（打包体积更小，运行速度更快） |
| 树摇优化   | 有限                  | 更好的Tree Shaking支持             |
| 事件API    | $on, $off, $once      | 移除，推荐使用第三方库             |
| 过滤器     | 支持                  | 移除，推荐使用计算属性             |

### 1.3 环境搭建与项目创建

#### 1.3.1 安装Node.js

Vue项目依赖Node.js环境，建议安装LTS版本。

#### 1.3.2 Vue2项目创建

```bash
# 安装Vue CLI
npm install -g @vue/cli

# 创建Vue2项目
vue create vue2-project
# 选择Manually select features，然后选择Vue 2
```

#### 1.3.3 Vue3项目创建

```bash
# 方式1：使用Vite（推荐）
npm create vite@latest vue3-project -- --template vue

# 方式2：使用Vue CLI
vue create vue3-project
# 选择Manually select features，然后选择Vue 3
```

#### 1.3.4 项目结构对比

**Vue2典型结构：**

```
vue2-project/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   ├── router/
│   ├── store/
│   ├── views/
│   ├── App.vue
│   └── main.js
└── package.json
```

**Vue3典型结构：**

```
vue3-project/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   ├── router/
│   ├── stores/  # 注意：使用Pinia时目录名为stores
│   ├── views/
│   ├── App.vue
│   └── main.js
└── package.json
```

## 2. 核心语法

### 2.1 模板语法

Vue使用基于HTML的模板语法，允许开发者声明式地将DOM绑定到底层Vue实例的数据。

#### 2.1.1 插值

```html
<!-- 文本插值 -->
<p>{{ message }}</p>

<!-- 原始HTML -->
<p v-html="rawHtml"></p>

<!-- 属性绑定 -->
<div v-bind:id="dynamicId"></div>
<div :id="dynamicId"></div> <!-- 简写 -->

<!-- 表达式 -->
<p>{{ number + 1 }}</p>
<p>{{ ok ? 'YES' : 'NO' }}</p>
<p>{{ message.split('').reverse().join('') }}</p>
```

#### 2.1.2 指令

指令是带有`v-`前缀的特殊属性，用于在表达式的值改变时，将某些行为应用到DOM上。

```html
<!-- v-if条件渲染 -->
<p v-if="seen">现在你看到我了</p>

<!-- v-for列表渲染 -->
<li v-for="item in items" :key="item.id">
  {{ item.text }}
</li>

<!-- v-on事件监听 -->
<button v-on:click="doSomething">点击我</button>
<button @click="doSomething">点击我</button> <!-- 简写 -->
```

### 2.2 数据绑定

#### 2.2.1 单向绑定

- **插值绑定**：`{{ data }}`
- **属性绑定**：`v-bind:attr="data"` 或 `:attr="data"`
- **类绑定**：`v-bind:class="{ active: isActive }"`
- **样式绑定**：`v-bind:style="{ color: activeColor }"`

#### 2.2.2 双向绑定

Vue2和Vue3都支持`v-model`进行双向数据绑定，但实现细节有所不同。

**Vue2中的v-model：**

```html
<input v-model="message">
<!-- 等价于 -->
<input v-bind:value="message" v-on:input="message = $event.target.value">
```

**Vue3中的v-model：**

```html
<input v-model="message">
<!-- 等价于 -->
<input v-bind:modelValue="message" v-on:update:modelValue="message = $event">
```

Vue3允许自定义v-model的属性名和事件名：

```html
<MyComponent v-model:title="bookTitle" />
```

### 2.3 计算属性与监听器

#### 2.3.1 计算属性

计算属性是基于它们的依赖进行缓存的，只有在相关依赖发生改变时才会重新求值。

**Vue2（Options API）：**

```javascript
export default {
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe'
    }
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName
    }
  }
}
```

**Vue3（Composition API）：**

```javascript
import { ref, computed } from 'vue'

export default {
  setup() {
    const firstName = ref('John')
    const lastName = ref('Doe')
    
    const fullName = computed(() => {
      return firstName.value + ' ' + lastName.value
    })
    
    return {
      firstName,
      lastName,
      fullName
    }
  }
}
```

#### 2.3.2 监听器

监听器用于观察和响应数据变化。

**Vue2（Options API）：**

```javascript
export default {
  data() {
    return {
      question: '',
      answer: 'I cannot give you an answer until you ask a question!'
    }
  },
  watch: {
    question(newQuestion, oldQuestion) {
      if (newQuestion.includes('?')) {
        this.getAnswer()
      }
    }
  },
  methods: {
    getAnswer() {
      this.answer = 'Thinking...'
      // 模拟异步请求
      setTimeout(() => {
        this.answer = 'Here is the answer'
      }, 1000)
    }
  }
}
```

**Vue3（Composition API）：**

```javascript
import { ref, watch } from 'vue'

export default {
  setup() {
    const question = ref('')
    const answer = ref('I cannot give you an answer until you ask a question!')
    
    watch(question, (newQuestion, oldQuestion) => {
      if (newQuestion.includes('?')) {
        getAnswer()
      }
    })
    
    const getAnswer = () => {
      answer.value = 'Thinking...'
      setTimeout(() => {
        answer.value = 'Here is the answer'
      }, 1000)
    }
    
    return {
      question,
      answer
    }
  }
}
```

### 2.4 条件渲染

#### 2.4.1 v-if / v-else-if / v-else

```html
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```

#### 2.4.2 v-show

```html
<h1 v-show="ok">Hello!</h1>
```

**v-if vs v-show：**

- `v-if` 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
- `v-if` 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
- `v-show` 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
- 一般来说，`v-if` 有更高的切换开销，而 `v-show` 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 `v-show` 较好；如果在运行时条件很少改变，则使用 `v-if` 较好。

### 2.5 列表渲染

#### 2.5.1 v-for基础

```html
<!-- 遍历数组 -->
<ul>
  <li v-for="(item, index) in items" :key="item.id">
    {{ index }} - {{ item.message }}
  </li>
</ul>

<!-- 遍历对象 -->
<div v-for="(value, name, index) in object" :key="name">
  {{ index }}. {{ name }}: {{ value }}
</div>

<!-- 遍历整数 -->
<div v-for="n in 10" :key="n">
  {{ n }}
</div>
```

#### 2.5.2 key的重要性

`key`属性用于帮助Vue识别哪些元素被修改、添加或删除，从而高效地更新DOM。

**推荐做法：**

- 使用唯一的、稳定的ID作为key
- 避免使用索引作为key（尤其是在列表可能被重新排序时）

### 2.6 事件处理

#### 2.6.1 基本用法

```html
<!-- 内联事件处理器 -->
<button v-on:click="counter += 1">Add 1</button>
<button @click="counter += 1">Add 1</button> <!-- 简写 -->

<!-- 方法事件处理器 -->
<button v-on:click="greet">Greet</button>

<!-- 事件修饰符 -->
<button @click.stop="doThis">阻止冒泡</button>
<button @click.prevent="doThat">阻止默认行为</button>
<button @click.stop.prevent="doBoth">阻止冒泡和默认行为</button>
<button @click.capture="doThis">添加事件监听器时使用事件捕获模式</button>
<button @click.self="doThat">只当事件是从事件绑定的元素本身触发时才触发回调</button>
<button @click.once="doThis">只触发一次</button>
<button @click.passive="onScroll">滚动事件的默认行为 (即滚动行为) 将会立即触发</button>

<!-- 按键修饰符 -->
<input @keyup.enter="submit">
<input @keyup.tab="next">
<input @keyup.delete="clear">
<input @keyup.esc="cancel">
<input @keyup.space="toggle">

<!-- 鼠标修饰符 -->
<button @click.left="doLeftClick">左键点击</button>
<button @click.right="doRightClick">右键点击</button>
<button @click.middle="doMiddleClick">中键点击</button>
```

#### 2.6.2 事件处理方法

**Vue2（Options API）：**

```javascript
export default {
  data() {
    return {
      name: 'Vue.js'
    }
  },
  methods: {
    greet(event) {
      alert('Hello ' + this.name + '!')
      // event 是原生 DOM 事件
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
}
```

**Vue3（Composition API）：**

```javascript
export default {
  setup() {
    const name = ref('Vue.js')
    
    const greet = (event) => {
      alert('Hello ' + name.value + '!')
      if (event) {
        alert(event.target.tagName)
      }
    }
    
    return {
      name,
      greet
    }
  }
}
```

### 2.7 表单处理

#### 2.7.1 文本输入

```html
<input v-model="message" placeholder="edit me">
<p>Message is: {{ message }}</p>
```

#### 2.7.2 多行文本

```html
<textarea v-model="message" placeholder="add multiple lines"></textarea>
<p style="white-space: pre-line;">{{ message }}</p>
```

#### 2.7.3 复选框

```html
<!-- 单个复选框，绑定到布尔值 -->
<input type="checkbox" id="checkbox" v-model="checked">
<label for="checkbox">{{ checked }}</label>

<!-- 多个复选框，绑定到同一个数组 -->
<div id='example-3'>
  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
  <label for="jack">Jack</label>
  <input type="checkbox" id="john" value="John" v-model="checkedNames">
  <label for="john">John</label>
  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
  <label for="mike">Mike</label>
  <br>
  <span>Checked names: {{ checkedNames }}</span>
</div>
```

#### 2.7.4 单选按钮

```html
<div id="example-4">
  <input type="radio" id="one" value="One" v-model="picked">
  <label for="one">One</label>
  <br>
  <input type="radio" id="two" value="Two" v-model="picked">
  <label for="two">Two</label>
  <br>
  <span>Picked: {{ picked }}</span>
</div>
```

#### 2.7.5 选择框

```html
<!-- 单选选择框 -->
<div id="example-5">
  <select v-model="selected">
    <option disabled value="">请选择</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <span>Selected: {{ selected }}</span>
</div>

<!-- 多选选择框 -->
<div id="example-6">
  <select v-model="selected" multiple style="width: 50px;">
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <br>
  <span>Selected: {{ selected }}</span>
</div>

<!-- 动态选项 -->
<select v-model="selected">
  <option v-for="option in options" :key="option.value" :value="option.value">
    {{ option.text }}
  </option>
</select>
```

#### 2.7.6 表单修饰符

```html
<!-- .lazy - 取代 input 监听 change 事件 -->
<input v-model.lazy="msg">

<!-- .number - 自动将用户的输入值转为数值类型 -->
<input v-model.number="age" type="number">

<!-- .trim - 自动过滤用户输入的首尾空白字符 -->
<input v-model.trim="msg">
```

## 3. 组件化开发

### 3.1 组件基础

#### 3.1.1 组件定义与注册

**Vue2（Options API）：**

```javascript
// 定义组件
const MyComponent = {
  template: '<div>A custom component!</div>',
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}

// 全局注册
Vue.component('my-component', MyComponent)

// 局部注册
export default {
  components: {
    'my-component': MyComponent
  }
}
```

**Vue3（Composition API）：**

```javascript
// MyComponent.vue
<template>
  <div>A custom component!</div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)

const increment = () => {
  count.value++
}
</script>

// 全局注册（在main.js中）
import { createApp } from 'vue'
import MyComponent from './components/MyComponent.vue'

const app = createApp(App)
app.component('my-component', MyComponent)
app.mount('#app')

// 局部注册（不需要显式注册，直接在模板中使用）
```

#### 3.1.2 组件模板

组件模板可以使用以下三种方式：

1. 字符串模板
2. 单文件组件（.vue文件，推荐）
3. render函数

### 3.2 组件通信

#### 3.2.1 父组件向子组件传递数据（Props）

**Vue2：**

```javascript
// 父组件
<template>
  <child-component :message="parentMessage"></child-component>
</template>

<script>
export default {
  data() {
    return {
      parentMessage: 'Hello from parent'
    }
  }
}
</script>

// 子组件
<template>
  <div>{{ message }}</div>
</template>

<script>
export default {
  props: ['message'], // 或 props: { message: String }
  mounted() {
    console.log(this.message) // Hello from parent
  }
}
</script>
```

**Vue3：**

```javascript
// 父组件
<template>
  <ChildComponent :message="parentMessage" />
</template>

<script setup>
import { ref } from 'vue'
import ChildComponent from './ChildComponent.vue'

const parentMessage = ref('Hello from parent')
</script>

// 子组件
<template>
  <div>{{ message }}</div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps(['message']) // 或 defineProps({ message: String })
console.log(props.message) // Hello from parent
</script>
```

#### 3.2.2 子组件向父组件传递数据（事件）

**Vue2：**

```javascript
// 子组件
<template>
  <button @click="sendMessage">Send Message</button>
</template>

<script>
export default {
  methods: {
    sendMessage() {
      this.$emit('child-event', 'Hello from child')
    }
  }
}
</script>

// 父组件
<template>
  <child-component @child-event="handleChildEvent"></child-component>
</template>

<script>
export default {
  methods: {
    handleChildEvent(message) {
      console.log(message) // Hello from child
    }
  }
}
</script>
```

**Vue3：**

```javascript
// 子组件
<template>
  <button @click="sendMessage">Send Message</button>
</template>

<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['child-event'])

const sendMessage = () => {
  emit('child-event', 'Hello from child')
}
</script>

// 父组件
<template>
  <ChildComponent @child-event="handleChildEvent" />
</template>

<script setup>
import { ref } from 'vue'
import ChildComponent from './ChildComponent.vue'

const handleChildEvent = (message) => {
  console.log(message) // Hello from child
}
</script>
```

#### 3.2.3 兄弟组件通信

**方法1：通过父组件中转**

```
Component A → 父组件 → Component B
```

**方法2：使用事件总线（Vue2）**

```javascript
// main.js
Vue.prototype.$bus = new Vue()

// 发送事件
this.$bus.$emit('event-name', data)

// 接收事件
this.$bus.$on('event-name', (data) => {
  // 处理数据
})
```

**方法3：使用Vuex/Pinia（推荐）**

#### 3.2.4 跨层级组件通信

**Vue2：Provide/Inject（2.2.0+）**

```javascript
// 祖先组件
export default {
  provide() {
    return {
      foo: 'bar'
    }
  }
}

// 后代组件
export default {
  inject: ['foo'],
  mounted() {
    console.log(this.foo) // bar
  }
}
```

**Vue3：Provide/Inject**

```javascript
// 祖先组件
<script setup>
import { provide } from 'vue'

provide('foo', 'bar')
</script>

// 后代组件
<script setup>
import { inject } from 'vue'

const foo = inject('foo')
console.log(foo) // bar
</script>
```

### 3.3 插槽

#### 3.3.1 基本插槽

**Vue2：**

```html
<!-- 子组件 -->
<template>
  <div>
    <h2>我是子组件的标题</h2>
    <slot></slot> <!-- 插槽出口 -->
  </div>
</template>

<!-- 父组件 -->
<template>
  <child-component>
    <p>这是插槽内容</p> <!-- 插槽内容 -->
  </child-component>
</template>
```

**Vue3：**

```html
<!-- 子组件 -->
<template>
  <div>
    <h2>我是子组件的标题</h2>
    <slot></slot> <!-- 插槽出口 -->
  </div>
</template>

<!-- 父组件 -->
<template>
  <ChildComponent>
    <p>这是插槽内容</p> <!-- 插槽内容 -->
  </ChildComponent>
</template>
```

#### 3.3.2 具名插槽

**Vue2：**

```html
<!-- 子组件 -->
<template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot> <!-- 默认插槽 -->
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<!-- 父组件 -->
<template>
  <child-component>
    <template slot="header">
      <h1>Here might be a page title</h1>
    </template>
    
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
    
    <template slot="footer">
      <p>Here's some contact info</p>
    </template>
  </child-component>
</template>
```

**Vue3：**

```html
<!-- 子组件 -->
<template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot> <!-- 默认插槽 -->
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<!-- 父组件 -->
<template>
  <ChildComponent>
    <template #header> <!-- 简写形式，等价于 v-slot:header -->
      <h1>Here might be a page title</h1>
    </template>
    
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
    
    <template #footer>
      <p>Here's some contact info</p>
    </template>
  </ChildComponent>
</template>
```

#### 3.3.3 作用域插槽

**Vue2：**

```html
<!-- 子组件 -->
<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      <slot :item="item">{{ item.name }}</slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: 'Item 1', value: 'Value 1' },
        { id: 2, name: 'Item 2', value: 'Value 2' }
      ]
    }
  }
}
</script>

<!-- 父组件 -->
<template>
  <child-component>
    <template slot-scope="slotProps"> <!-- 或 scope="slotProps" -->
      {{ slotProps.item.value }}
    </template>
  </child-component>
</template>
```

**Vue3：**

```html
<!-- 子组件 -->
<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      <slot :item="item">{{ item.name }}</slot>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
  { id: 1, name: 'Item 1', value: 'Value 1' },
  { id: 2, name: 'Item 2', value: 'Value 2' }
])
</script>

<!-- 父组件 -->
<template>
  <ChildComponent>
    <template #default="{ item }"> <!-- 或 #default="slotProps" -->
      {{ item.value }}
    </template>
  </ChildComponent>
</template>
```

### 3.4 动态组件

#### 3.4.1 基本用法

**Vue2：**

```html
<template>
  <component :is="currentComponent"></component>
</template>

<script>
export default {
  data() {
    return {
      currentComponent: 'component-a'
    }
  },
  components: {
    'component-a': {
      template: '<div>Component A</div>'
    },
    'component-b': {
      template: '<div>Component B</div>'
    }
  }
}
</script>
```

**Vue3：**

```html
<template>
  <component :is="currentComponent"></component>
</template>

<script setup>
import { ref } from 'vue'
import ComponentA from './ComponentA.vue'
import ComponentB from './ComponentB.vue'

const currentComponent = ref(ComponentA) // 可以是组件对象或组件名
</script>
```

#### 3.4.2 组件缓存（keep-alive）

```html
<keep-alive>
  <component :is="currentComponent"></component>
</keep-alive>
```

`keep-alive`属性：

- `include` - 字符串或正则表达式，只有名称匹配的组件会被缓存
- `exclude` - 字符串或正则表达式，名称匹配的组件不会被缓存
- `max` - 数字，最多可以缓存多少组件实例

### 3.5 异步组件

#### 3.5.1 Vue2中的异步组件

```javascript
export default {
  components: {
    'async-component': () => import('./AsyncComponent.vue')
  }
}

// 高级用法
const AsyncComponent = () => ({
  // 要加载的组件 (应该是一个 Promise)
  component: import('./MyComponent.vue'),
  // 异步组件加载时使用的组件
  loading: LoadingComponent,
  // 加载失败时使用的组件
  error: ErrorComponent,
  // 展示加载时组件的延时时间。默认值是 200 (毫秒)
  delay: 200,
  // 如果提供了超时时间且组件加载也超时了，
  // 则使用加载失败时使用的组件。默认值是：Infinity
  timeout: 3000
})
```

#### 3.5.2 Vue3中的异步组件

```javascript
// 基本用法
import { defineAsyncComponent } from 'vue'

const AsyncComponent = defineAsyncComponent(() => import('./AsyncComponent.vue'))

// 高级用法
const AsyncComponentWithOptions = defineAsyncComponent({
  loader: () => import('./AsyncComponent.vue'),
  loadingComponent: LoadingComponent,
  errorComponent: ErrorComponent,
  delay: 200,
  timeout: 3000
})
```

## 4. 响应式系统

### 4.1 Vue2响应式原理

Vue2使用`Object.defineProperty`来实现响应式系统。

#### 4.1.1 核心实现

```javascript
function defineReactive(obj, key, val) {
  // 递归处理嵌套对象
  observe(val)
  
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      console.log(`get ${key}: ${val}`)
      // 收集依赖
      dep.depend()
      return val
    },
    set(newVal) {
      if (newVal === val) return
      console.log(`set ${key}: ${newVal}`)
      val = newVal
      // 递归处理新值
      observe(newVal)
      // 触发依赖更新
      dep.notify()
    }
  })
}

function observe(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return
  }
  new Observer(obj)
}

class Observer {
  constructor(obj) {
    // 处理数组
    if (Array.isArray(obj)) {
      // 覆盖数组原型方法
      obj.__proto__ = arrayMethods
      // 递归处理数组中的每个元素
      for (let i = 0; i < obj.length; i++) {
        observe(obj[i])
      }
    } else {
      // 处理对象
      for (let key in obj) {
        defineReactive(obj, key, obj[key])
      }
    }
  }
}
```

#### 4.1.2 局限性

- 无法检测对象属性的添加或删除
- 无法检测数组索引和长度的变化
- 需要特殊处理数组方法（push, pop, shift, unshift, splice, sort, reverse）

### 4.2 Vue3响应式原理

Vue3使用`Proxy`来实现响应式系统，解决了Vue2的局限性。

#### 4.2.1 核心实现

```javascript
function reactive(obj) {
  return new Proxy(obj, {
    get(target, key, receiver) {
      const res = Reflect.get(target, key, receiver)
      console.log(`get ${key}: ${res}`)
      // 收集依赖
      track(target, key)
      // 递归处理嵌套对象
      if (typeof res === 'object' && res !== null) {
        return reactive(res)
      }
      return res
    },
    set(target, key, value, receiver) {
      const oldValue = target[key]
      const res = Reflect.set(target, key, value, receiver)
      console.log(`set ${key}: ${value}`)
      // 触发依赖更新
      if (oldValue !== value) {
        trigger(target, key)
      }
      return res
    },
    deleteProperty(target, key) {
      const hadKey = hasOwn(target, key)
      const res = Reflect.deleteProperty(target, key)
      console.log(`delete ${key}`)
      // 触发依赖更新
      if (hadKey) {
        trigger(target, key)
      }
      return res
    }
  })
}
```

#### 4.2.2 优势

- 可以检测对象属性的添加或删除
- 可以检测数组索引和长度的变化
- 不需要特殊处理数组方法
- 更好的性能
- 支持Map, Set, WeakMap, WeakSet等数据结构

### 4.3 Composition API vs Options API

#### 4.3.1 Options API

**优点：**

- 易于理解和学习
- 代码结构清晰，按功能分类（data, methods, computed等）
- 适合小型应用和简单组件

**缺点：**

- 代码复用困难（需要使用mixins，可能导致命名冲突）
- 逻辑分散，难以维护大型组件
- 类型支持有限

#### 4.3.2 Composition API

**优点：**

- 更好的代码组织和复用
- 逻辑集中，便于维护大型组件
- 更好的TypeScript支持
- 更灵活的组件逻辑提取
- 支持Tree Shaking

**缺点：**

- 学习曲线较陡
- 需要更多的代码组织技巧

#### 4.3.3 何时使用哪种API

- 小型项目或简单组件：Options API
- 大型项目或复杂组件：Composition API
- 迁移项目：可以混合使用，逐步迁移

### 4.4 响应式工具函数

#### 4.4.1 Vue2响应式工具

```javascript
// Vue.set - 添加响应式属性
Vue.set(obj, key, value)

// Vue.delete - 删除响应式属性
Vue.delete(obj, key)

// vm.$set - 实例方法
this.$set(obj, key, value)

// vm.$delete - 实例方法
this.$delete(obj, key)
```

#### 4.4.2 Vue3响应式工具

```javascript
import { ref, reactive, computed, watch, watchEffect, toRefs, toRef, isRef, isReactive, isProxy } from 'vue'

// ref - 创建响应式的基本类型值
const count = ref(0)
console.log(count.value) // 0

// reactive - 创建响应式对象
const obj = reactive({ count: 0 })

// computed - 创建计算属性
const doubleCount = computed(() => count.value * 2)

// watch - 监听响应式数据变化
watch(count, (newVal, oldVal) => {
  console.log(`count changed: ${oldVal} -> ${newVal}`)
})

// watchEffect - 自动追踪依赖并执行
watchEffect(() => {
  console.log(`count is: ${count.value}`)
})

// toRefs - 将响应式对象转换为普通对象，其中每个属性都是ref
const obj = reactive({ a: 1, b: 2 })
const refs = toRefs(obj)

// toRef - 创建一个ref，其值指向另一个对象的属性
const refA = toRef(obj, 'a')

// 类型检查
isRef(count) // true
isReactive(obj) // true
isProxy(obj) // true
```

## 5. 生命周期

### 5.1 Vue2生命周期

#### 5.1.1 生命周期钩子

1. **beforeCreate** - 实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用
2. **created** - 实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见
3. **beforeMount** - 在挂载开始之前被调用：相关的 render 函数首次被调用
4. **mounted** - el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内
5. **beforeUpdate** - 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程
6. **updated** - 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子
7. **beforeDestroy** - 实例销毁之前调用。在这一步，实例仍然完全可用
8. **destroyed** - Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁

#### 5.1.2 生命周期图示

```
beforeCreate -> created -> beforeMount -> mounted -> beforeUpdate -> updated -> beforeDestroy -> destroyed
```

### 5.2 Vue3生命周期

#### 5.2.1 选项式API生命周期钩子

Vue3仍然支持Vue2的生命周期钩子，但有两个名称变化：

- `beforeDestroy` 改为 `beforeUnmount`
- `destroyed` 改为 `unmounted`

#### 5.2.2 Composition API生命周期钩子

Vue3提供了一组新的生命周期钩子，用于Composition API：

1. **onBeforeMount** - 组件挂载前调用
2. **onMounted** - 组件挂载后调用
3. **onBeforeUpdate** - 组件更新前调用
4. **onUpdated** - 组件更新后调用
5. **onBeforeUnmount** - 组件卸载前调用
6. **onUnmounted** - 组件卸载后调用
7. **onErrorCaptured** - 捕获后代组件错误时调用
8. **onRenderTracked** - 跟踪虚拟DOM重新渲染时调用（开发模式）
9. **onRenderTriggered** - 触发虚拟DOM重新渲染时调用（开发模式）
10. **onActivated** - 被keep-alive缓存的组件激活时调用
11. **onDeactivated** - 被keep-alive缓存的组件停用时调用

#### 5.2.3 Composition API生命周期使用示例

```javascript
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

export default {
  setup() {
    onBeforeMount(() => {
      console.log('组件挂载前')
    })
    
    onMounted(() => {
      console.log('组件挂载后')
    })
    
    onBeforeUpdate(() => {
      console.log('组件更新前')
    })
    
    onUpdated(() => {
      console.log('组件更新后')
    })
    
    onBeforeUnmount(() => {
      console.log('组件卸载前')
    })
    
    onUnmounted(() => {
      console.log('组件卸载后')
    })
    
    return {}
  }
}
```

### 5.3 生命周期对比

| Vue2生命周期  | Vue3选项式API | Vue3组合式API   |
| ------------- | ------------- | --------------- |
| beforeCreate  | beforeCreate  | setup()         |
| created       | created       | setup()         |
| beforeMount   | beforeMount   | onBeforeMount   |
| mounted       | mounted       | onMounted       |
| beforeUpdate  | beforeUpdate  | onBeforeUpdate  |
| updated       | updated       | onUpdated       |
| beforeDestroy | beforeUnmount | onBeforeUnmount |
| destroyed     | unmounted     | onUnmounted     |
| activated     | activated     | onActivated     |
| deactivated   | deactivated   | onDeactivated   |
| errorCaptured | errorCaptured | onErrorCaptured |

## 6. 状态管理

### 6.1 Vuex（Vue2）

#### 6.1.1 核心概念

- **State** - 存储应用状态
- **Getter** - 从State中派生出新状态
- **Mutation** - 修改State的唯一方法（同步）
- **Action** - 处理异步操作，提交Mutation
- **Module** - 模块化组织Vuex代码

#### 6.1.2 基本用法

```javascript
// store/index.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    doubleCount: state => state.count * 2
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }
  },
  modules: {
    // 模块化
  }
})

// 在组件中使用
// 通过this.$store访问
this.$store.state.count
this.$store.getters.doubleCount
this.$store.commit('increment')
this.$store.dispatch('incrementAsync')

// 或使用辅助函数
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['count']),
    ...mapGetters(['doubleCount'])
  },
  methods: {
    ...mapMutations(['increment']),
    ...mapActions(['incrementAsync'])
  }
}
```

### 6.2 Pinia（Vue3推荐）

#### 6.2.1 核心概念

- **State** - 存储应用状态
- **Getter** - 从State中派生出新状态
- **Action** - 处理同步和异步操作
- **Module** - 自动模块化（每个store都是一个模块）

#### 6.2.2 基本用法

```javascript
// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    },
    incrementAsync() {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.count++
          resolve()
        }, 1000)
      })
    }
  }
})

// main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)
app.use(createPinia())
app.mount('#app')

// 在组件中使用
<script setup>
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()

// 访问状态
console.log(counter.count)
console.log(counter.doubleCount)

// 修改状态
counter.increment()
counter.incrementAsync()

// 直接修改状态（Pinia允许）
counter.count++

// 批量修改状态
counter.$patch({
  count: counter.count + 1,
  // 其他状态...
})

// 使用$reset重置状态
counter.$reset()
</script>
```

#### 6.2.3 Pinia vs Vuex

| 特性     | Vuex                               | Pinia                     |
| -------- | ---------------------------------- | ------------------------- |
| 语法     | 复杂                               | 简洁                      |
| 类型支持 | 有限                               | 优秀                      |
| 模块化   | 手动                               | 自动                      |
| 异步操作 | Actions（异步）+ Mutations（同步） | Actions（支持同步和异步） |
| 状态修改 | 只能通过Mutations                  | 直接修改或通过Actions     |
| 体积     | 较大                               | 较小                      |
| 开发体验 | 一般                               | 优秀                      |

### 6.3 状态管理最佳实践

1. **单一数据源** - 应用的状态应该集中在一个store中
2. **状态是只读的** - 唯一改变状态的方法是提交mutation（Vuex）或直接修改（Pinia）
3. **使用模块化** - 将大型应用的状态拆分为多个模块
4. **保持状态扁平** - 避免深层嵌套的状态结构
5. **使用getters派生状态** - 避免在组件中重复计算
6. **合理使用Actions** - 处理复杂的业务逻辑和异步操作

## 7. 路由

### 7.1 Vue Router基础

Vue Router是Vue.js官方的路由管理器，用于构建单页应用。

### 7.2 路由配置与导航

**Vue2 + Vue Router 3：**

```javascript
// router/index.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // 懒加载
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history', // 或 'hash'
  base: process.env.BASE_URL,
  routes
})

export default router

// main.js
import Vue from 'vue'
import App from './App.vue'
import router from './router'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// App.vue
<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>
```

**Vue3 + Vue Router 4：**

```javascript
// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')

// App.vue
<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>
```

### 7.3 路由守卫

路由守卫用于控制路由的访问权限和导航行为。

#### 7.3.1 全局守卫

```javascript
// 全局前置守卫
router.beforeEach((to, from, next) => {
  // to: 即将要进入的目标路由对象
  // from: 当前导航正要离开的路由
  // next: 一定要调用该方法来 resolve 这个钩子
  
  // 验证用户是否登录
  const isLoggedIn = localStorage.getItem('token')
  if (to.meta.requiresAuth && !isLoggedIn) {
    next('/login')
  } else {
    next()
  }
})

// 全局解析守卫
router.beforeResolve((to, from, next) => {
  // 与beforeEach类似，但在所有组件内守卫和异步路由组件被解析之后调用
  next()
})

// 全局后置钩子
router.afterEach((to, from) => {
  // 导航完成后调用，不接受next函数
  console.log('Navigation completed')
})
```

#### 7.3.2 路由独享守卫

```javascript
const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      // 路由独享守卫，只在进入该路由时调用
      next()
    }
  }
]
```

#### 7.3.3 组件内守卫

```javascript
// Vue2（Options API）
export default {
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    next(vm => {
      // 通过vm访问组件实例
    })
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 可以访问组件实例 `this`
    next()
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    next()
  }
}

// Vue3（Composition API）
import { onBeforeRouteEnter, onBeforeRouteUpdate, onBeforeRouteLeave } from 'vue-router'

export default {
  setup() {
    onBeforeRouteEnter((to, from, next) => {
      // 不能访问组件实例
      next(vm => {
        // 通过vm访问组件实例
      })
    })
    
    onBeforeRouteUpdate((to, from, next) => {
      // 可以访问组件实例
      next()
    })
    
    onBeforeRouteLeave((to, from, next) => {
      // 可以访问组件实例
      next()
    })
  }
}
```

### 7.4 动态路由与嵌套路由

#### 7.4.1 动态路由

```javascript
const routes = [
  {
    path: '/user/:id',
    component: User,
    props: true // 将路由参数作为props传递给组件
  }
]

// 在组件中访问
// Vue2
this.$route.params.id

// Vue3（Options API）
this.$route.params.id

// Vue3（Composition API）
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route.params.id)
```

#### 7.4.2 嵌套路由

```javascript
const routes = [
  {
    path: '/user/:id',
    component: User,
    children: [
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'profile',
        component: UserProfile
      },
      {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 会被渲染在 User 的 <router-view> 中
        path: 'posts',
        component: UserPosts
      }
    ]
  }
]
```

### 7.5 Vue3路由新特性

1. **组合式API支持** - 提供了`useRoute`和`useRouter`钩子
2. **更简单的路由配置** - 使用`createRouter`和`createWebHistory`
3. **更好的TypeScript支持**
4. **导航守卫的变化** - 支持组合式API的导航守卫
5. **动态路由匹配改进**
6. **滚动行为改进**

## 8. 高级特性

### 8.1 自定义指令

#### 8.1.1 Vue2中的自定义指令

```javascript
// 全局指令
Vue.directive('focus', {
  // 指令第一次绑定到元素时调用
  bind(el, binding, vnode) {
    // 做一次性的初始化设置
  },
  // 被绑定元素插入父节点时调用
  inserted(el, binding, vnode) {
    // 聚焦元素
    el.focus()
  },
  // 所在组件的 VNode 更新时调用
  update(el, binding, vnode, oldVnode) {
    // 响应式数据更新时的逻辑
  },
  // 所在组件的 VNode 及其子 VNode 全部更新后调用
  componentUpdated(el, binding, vnode, oldVnode) {
    // 组件更新完成后的逻辑
  },
  // 指令与元素解绑时调用
  unbind(el, binding, vnode) {
    // 清理工作
  }
})

// 局部指令
export default {
  directives: {
    focus: {
      // 指令定义
      inserted(el) {
        el.focus()
      }
    }
  }
}

// 使用
<input v-focus>
```

#### 8.1.2 Vue3中的自定义指令

```javascript
// 全局指令
const app = createApp(App)

app.directive('focus', {
  // 生命周期钩子
  mounted(el) {
    el.focus()
  },
  updated(el) {
    // 响应式数据更新时的逻辑
  }
})

// 局部指令
<script setup>
const vFocus = {
  mounted(el) {
    el.focus()
  }
}
</script>

<template>
  <input v-focus>
</template>

// 或

export default {
  directives: {
    focus: {
      mounted(el) {
        el.focus()
      }
    }
  }
}
```

#### 8.1.3 指令钩子函数对比

| Vue2指令钩子     | Vue3指令钩子 |
| ---------------- | ------------ |
| bind             | beforeMount  |
| inserted         | mounted      |
| update           | beforeUpdate |
| componentUpdated | updated      |
| unbind           | unmounted    |

### 8.2 混入（Mixins）

#### 8.2.1 Vue2中的Mixins

```javascript
// 定义Mixin
const myMixin = {
  data() {
    return {
      message: 'Hello from mixin'
    }
  },
  methods: {
    greet() {
      console.log(this.message)
    }
  },
  mounted() {
    this.greet()
  }
}

// 使用Mixin
export default {
  mixins: [myMixin],
  data() {
    return {
      message: 'Hello from component' // 会覆盖mixin中的message
    }
  }
}
```

#### 8.2.2 Vue3中的Mixins

Vue3仍然支持Mixins，但推荐使用Composition API替代，因为Mixins存在以下问题：

- 命名冲突
- 隐式依赖
- 难以追溯
- 可读性差

#### 8.2.3 Composition API替代方案

```javascript
// 提取可复用逻辑
function useCounter() {
  const count = ref(0)
  const increment = () => count.value++
  
  return {
    count,
    increment
  }
}

// 在组件中使用
<script setup>
import { useCounter } from './useCounter'

const { count, increment } = useCounter()
</script>
```

### 8.3 插件开发

#### 8.3.1 插件定义

Vue插件是一个包含`install`方法的对象，或者直接是一个安装函数。

```javascript
// 插件对象
const MyPlugin = {
  install(app, options) {
    // 1. 添加全局属性或方法
    app.config.globalProperties.$myMethod = () => {
      // 逻辑
    }
    
    // 2. 添加全局指令
    app.directive('my-directive', {
      // 指令定义
    })
    
    // 3. 注入依赖
    app.provide('myInjection', 'some value')
    
    // 4. 添加全局组件
    app.component('MyComponent', {
      // 组件定义
    })
  }
}

// 使用插件
const app = createApp(App)
app.use(MyPlugin, { /* 可选的选项 */ })
```

### 8.4 渲染函数与JSX

#### 8.4.1 渲染函数基础

Vue2的渲染函数与Vue3有所不同，Vue3使用了更简洁的API。

**Vue3渲染函数：**

```javascript
import { h } from 'vue'

export default {
  render() {
    return h('div', {
      class: 'container'
    }, [
      h('h1', 'Hello World'),
      h('p', 'This is a paragraph')
    ])
  }
}
```

#### 8.4.2 JSX

JSX允许你在JavaScript中编写HTML-like语法，更适合复杂的组件。

**使用JSX：**

1. 安装必要的依赖（@vitejs/plugin-vue-jsx 或 babel-plugin-transform-vue-jsx）
2. 配置构建工具
3. 在组件中使用JSX

**Vue3 JSX示例：**

```javascript
// MyComponent.jsx
import { ref } from 'vue'

const MyComponent = () => {
  const count = ref(0)
  
  const increment = () => {
    count.value++
  }
  
  return (
    <div class="container">
      <h1>Hello JSX</h1>
      <p>Count: {count.value}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default MyComponent
```

## 9. 构建工具

### 9.1 Vue CLI（Vue2）

#### 9.1.1 核心功能

- 项目脚手架
- 插件系统
- 零配置开发服务器
- 构建优化
- 代码分割
- 自动注入环境变量

#### 9.1.2 常用命令

```bash
# 创建项目
vue create project-name

# 启动开发服务器
npm run serve

# 构建生产版本
npm run build

# 分析构建结果
npm run build -- --report

# 检查代码规范
npm run lint
```

### 9.2 Vite（Vue3推荐）

Vite是一个新一代前端构建工具，提供了极速的开发体验。

#### 9.2.1 核心优势

- 极速的冷启动
- 即时的热模块替换（HMR）
- 优化的构建输出
- 支持多种框架（Vue, React, Svelte等）
- 原生ESM支持

#### 9.2.2 常用命令

```bash
# 创建项目
npm create vite@latest project-name -- --template vue

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

#### 9.2.3 Vite vs Vue CLI

| 特性        | Vue CLI        | Vite             |
| ----------- | -------------- | ---------------- |
| 底层工具    | Webpack        | Rollup + ESBuild |
| 开发服务器  | 较慢           | 极速             |
| HMR         | 较慢           | 即时             |
| 构建速度    | 一般           | 较快             |
| 配置复杂度  | 高             | 低               |
| 原生ESM支持 | 否             | 是               |
| 适用场景    | Vue2, 大型项目 | Vue3, 现代浏览器 |

### 9.3 构建优化

1. **代码分割** - 将代码拆分为多个小文件，按需加载
2. **Tree Shaking** - 移除未使用的代码
3. **懒加载** - 按需加载组件和路由
4. **压缩资源** - 压缩JS, CSS, HTML, 图片等
5. **CDN加速** - 使用CDN加载第三方库
6. **缓存策略** - 合理设置缓存头
7. **预加载** - 使用`<link rel="preload">`预加载关键资源
8. **减少HTTP请求** - 合并资源，使用HTTP/2

## 10. 最佳实践

### 10.1 代码规范

1. **使用ESLint** - 配置ESLint规则，保持代码风格一致
2. **使用Prettier** - 自动格式化代码
3. **命名规范** - 
   - 组件名：大驼峰命名（PascalCase）
   - 变量名：小驼峰命名（camelCase）
   - 文件名：kebab-case或PascalCase
4. **注释** - 添加必要的注释，解释复杂逻辑
5. **代码结构** - 保持代码结构清晰，模块化组织

### 10.2 性能优化

1. **响应式数据优化** - 
   - 避免不必要的响应式数据
   - 使用`shallowRef`和`shallowReactive`处理大型对象
   - 使用`markRaw`标记不需要响应式的对象
2. **组件优化** - 
   - 使用`v-memo`缓存组件
   - 合理使用`keep-alive`
   - 拆分大型组件为小型组件
3. **渲染优化** - 
   - 避免在模板中使用复杂表达式
   - 合理使用`v-if`和`v-show`
   - 使用`key`属性优化列表渲染
4. **网络优化** - 
   - 减少HTTP请求
   - 使用缓存
   - 压缩资源
5. **打包优化** - 
   - 代码分割
   - Tree Shaking
   - 懒加载

### 10.3 测试

1. **单元测试** - 测试单个组件或函数
   - 使用Jest + Vue Test Utils
2. **集成测试** - 测试组件之间的交互
3. **端到端测试** - 测试完整的用户流程
   - 使用Cypress或Playwright

### 10.4 部署

1. **构建生产版本** - 
   - Vue2: `npm run build`
   - Vue3: `npm run build`
2. **选择部署平台** - 
   - 静态网站：Vercel, Netlify, GitHub Pages
   - 服务器部署：Nginx, Apache
   - 容器化部署：Docker + Kubernetes
3. **配置域名和HTTPS** - 确保网站使用HTTPS
4. **监控和日志** - 配置监控和日志系统，及时发现问题

## 11. 迁移指南

### 11.1 从Vue2迁移到Vue3

1. **更新依赖** - 
   - Vue: 2.x → 3.x
   - Vue Router: 3.x → 4.x
   - Vuex: 3.x → 4.x 或 Pinia
   - 其他依赖：检查兼容性
2. **更新API** - 
   - 替换已废弃的API
   - 更新生命周期钩子名称
   - 替换事件API（$on, $off, $once）
   - 移除过滤器，使用计算属性替代
3. **考虑使用Composition API** - 逐步迁移组件到Composition API
4. **测试** - 确保迁移后的代码正常工作

### 11.2 迁移工具

- **vue-migration-helper** - 检查代码中使用的已废弃API
- **@vue/compat** - Vue3兼容层，允许在Vue3中运行Vue2代码

## 12. 学习资源

### 12.1 官方文档

- Vue2文档：https://v2.vuejs.org/
- Vue3文档：https://v3.vuejs.org/
- Vue Router文档：https://router.vuejs.org/
- Vuex文档：https://vuex.vuejs.org/
- Pinia文档：https://pinia.vuejs.org/
- Vite文档：https://vitejs.dev/

### 12.2 社区资源

- Vue Mastery - 高质量Vue教程
- Vue School - 互动式Vue课程
- Medium - Vue相关文章
- GitHub - Vue相关开源项目
- Stack Overflow - Vue相关问题
- Vue DevTools - 浏览器开发工具

# 总结

Vue是一个渐进式JavaScript框架，具有易学易用、性能优秀、生态丰富等特点。Vue2和Vue3各有优势，Vue2稳定成熟，适合现有项目；Vue3性能更优，支持TypeScript，适合新项目。

本笔记涵盖了Vue2和Vue3的核心知识点，包括基础语法、组件化开发、响应式系统、生命周期、状态管理、路由、高级特性、构建工具和最佳实践等。希望这份笔记能帮助你更好地学习和复习Vue知识