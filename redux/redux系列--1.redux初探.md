redux的思想是将整个应用的state储存在一棵object tree中，并且这个object tree只存在于唯一一个store中，唯一改变state的方法就是触发action，action是一个用于描述已发生事件的普通对象。为了将state和action联系起来，我们需要编写纯函数reducer，它接收先前的state和action，并返回新的state。redux使用的是观察者模式，我们将state的变更提前subscribe（订阅）好，在需要改变的时候通过发布（dispatch）来修改。

在应用中使用react有如下好处：
预测：始终有一个准确的数据源，就是store, 对于如何将actions以及应用的其他部分和当前的状态同步可以做到绝不混乱。
维护：具备可预测结果的性质和严格的组织结构让代码更容易维护。
组织：对代码应该如何组织更加严苛，这使代码更加一致，对团队协作更加容易。
测试：编写可测试代码的首要准则就是编写可以仅做一件事并且独立的小函数。Redux的代码几乎全部都是这样的函数：短小、纯粹、分离。
服务端渲染：可以带来更好的用户体验并且有助于搜索引擎优化，尤其是对于首次渲染。仅仅是把服务端创建的store传递给客户端就可以。
开发者工具：开发者可以实时跟踪在应用中正在发生的一切，从actions到状态的改变。
社区与生态圈：存在很多支持Redux的社区，使它能够吸引更多的人来使用。

<!DOCTYPE html>
<html>
<head>
    <title>Redux basic example</title>
    <script src="https://unpkg.com/redux@latest/dist/redux.min.js"></script>
</head>
<body>
    <div>
        <p>
            Clicked: <span id="value">0</span> times
            <button id="increment">+</button>
            <button id="decrement">-</button>
            <button id="incrementIfOdd">Increment if odd</button>
            <button id="incrementAsync">Increment async</button>
        </p>
    </div>
    <script>
        let $_ = function(id) {
            return document.getElementById(id);
        }
        let reducer = function(state = 0, action) {
            switch (action.type) {
                case 'INCREMENT':
                    return state + 1
                case 'DECREMENT':
                    return state - 1
                default:
                    return state
            }
        }
        let store = Redux.createStore(reducer)
        function render() {
            $_('value').innerHTML = store.getState().toString()
        }
        render()
        store.subscribe(render)
        $_('increment').addEventListener('click', function () {
            store.dispatch({ type: 'INCREMENT' })
        })
        $_('decrement').addEventListener('click', function () {
            store.dispatch({ type: 'DECREMENT' })
        })
        $_('incrementIfOdd').addEventListener('click', function () {
            store.getState() & 1 !== 0 && store.dispatch({ type: 'INCREMENT' })
        })
        $_('incrementAsync').addEventListener('click', function () {
            setTimeout(function () {
                store.dispatch({ type: 'INCREMENT' })
            }, 1000)
        })
    </script>
</body>

</html>