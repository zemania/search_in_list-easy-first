import React from 'react';
import ReactDOM from 'react-dom';

const propsValues = {
    title: "Список телефонов",
    items: [
      "HTC U Ultra", 
      "iPhone 7", 
      "Google Pixel", 
      "Hawei P9", 
      "Meizu Pro 6", 
      "Asus Zenfone 3"
    ]
  }

  class Item extends React.Component {
      render() {
          return <li>{this.props.name}</li>
      }
  }

  class SearchPlagin extends React.Component {
      constructor(props) {
          super(props);
          this.onTextChange = this.onTextChange.bind(this);
      }

      onTextChange(e) {
          let text = e.target.value.trim();
          this.props.filter(text);
      }
      render() {
          return(
              <input type="text" placeholder="Поиск" onChange={this.onTextChange} />
          )
      }
  }

  class ItemList extends React.Component {
      constructor(props) {
          super(props);
          this.state = {items: this.props.data.items};
          this.filterList = this.filterList.bind(this);
      }
      filterList(text) {
          let filteredList = this.props.data.items.filter((item) => {
              return item.toLowerCase().search(text.toLowerCase()) !== -1;
          });
          this.setState({
              items: filteredList
          });
      }
      render() {
          return(
              <div>
                  <h2>{this.props.data.title}</h2>
                  <SearchPlagin filter={this.filterList} />
                  <ul>
                      {
                          this.state.items.map((item) => {
                              return <Item key={item} name={item}/>
                          })
                      }
                  </ul>
              </div>
          );
      }
  }

  ReactDOM.render(
      <ItemList data={propsValues} />,
      document.getElementById('root')
  )