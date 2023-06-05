import React from 'react';

import { SearchbarForm } from './Searchbar/Searchbar';
import { fetchGallery } from './Api/ApiGallery';
export class App extends React.Component {
  state = {
    search: '',
    page: 1,
    perPage: 12,
    totalPages: 0,
    images: [],
    error: null,
    isLoading: false,
    largeImage: {},
    showModal: false,
  };

  async componentDidUpdate(_, prevState) {
    const { searchText, page, perPage } = this.state;

    console.log('updcomp');
    if (page !== prevState.page || searchText !== prevState.searchText) {
      this.setState({ isLoading: true });
      try {
        const response = await fetchGallery({ searchText, page, perPage });
        if (response.hits.length === 0) {
          throw new Error(`Sorry, no photo from ${searchText}!`);
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...response.hits],
          totalPages: Math.ceil(response.totalHits / perPage),
          error: null,
        }));
      } catch (error) {
        this.setState({ error: error.message, isLoading: false });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleSearch = searchText => {
    this.setState({ search: searchText });
    console.log('Appstate', searchText);
  };
  render() {
    return (
      <div>
        <SearchbarForm onSubmit={this.handleSearch} />
      </div>
    );
  }
}
