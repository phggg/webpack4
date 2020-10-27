import React from 'react'

export default class Table extends React.Component {

  state = {
    currentSort: 'default',
  };

  sortTypes = {
    up: (a, b) => {
      let { sortItemProps } = this.state
      if (typeof a[sortItemProps] === 'string') {
        return a[sortItemProps].localeCompare(b[sortItemProps])
      } else {
        return a[sortItemProps] - b[sortItemProps]
      }
    },
    down: (a, b) => {
      let { sortItemProps } = this.state
      if (typeof a[sortItemProps] === 'string') {
        return b[sortItemProps].localeCompare(a[sortItemProps])
      } else {
        return b[sortItemProps] - a[sortItemProps]
      }
    },
    default: (a, b) => a
  }

  onSortChange = (sortItem) => () => {
    const { currentSort } = this.state;
    let nextSort;
    this.setState({
      sortItemProps: sortItem
    })
    // console.log(this.state.sortItemProps);
    if (currentSort === 'default') nextSort = 'up';
    else if (currentSort === 'up') nextSort = 'down';
    else if (currentSort === 'down') nextSort = 'default';

    this.setState({
      currentSort: nextSort
    });
  }

  render () {
    const { data, columns } = this.props;
    const { currentSort } = this.state;

    return (
      data.length > 0 && (
        <table className='text-left'>
          <thead>
            <tr>
              {
                columns.map((item) => (
                  <th key={item.id}>
                    {item.title}
                    {item.sort ? (
                      <button onClick={this.onSortChange(item.id)}>
                        排序
                      </button>
                    ) : ''}
                  </th>
                ))
              }
            </tr>
          </thead>
          <tbody>
            {[...data].sort(this.sortTypes[currentSort]).map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.net_worth}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )
    );
  }
}