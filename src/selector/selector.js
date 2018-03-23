// import {createSelector} from 'reselect'
/**
 * 尽管 React Redux 已经优化并尽量减少对 mapStateToProps 的调用次数，
 * 加快 mapStateToProps 执行并减少其执行次数仍然是非常有价值的。
 * 普遍的推荐方式是利用 Reselect 创建可记忆（memoized）的 “selector” 方法。
 * 这样，selector 就能被组合在一起，并且同一管道（pipeline）后面的 selector 只有当输入变化时才会执行。
 * 意味着你可以像筛选器或过滤器那样创建 selector，并确保任务的执行时机。
 * 
 * 示例代码：
 * 
const getVisibilityFilter = (state) => state.visibilityFilter
const getTodos = (state) => state.todos

export const getVisibleTodos = createSelector(
  [ getVisibilityFilter, getTodos ],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case 'SHOW_ALL':
        return todos
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed)
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed)
    }
  }
)

如果你在使用 React Redux，你可以在 mapStateToProps() 中当正常函数来调用 selectors
const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state)
  }
}
 */