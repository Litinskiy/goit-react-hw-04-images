import axios from 'axios';
import { Component } from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import css from '../../src/styles.module.css';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    imageData: [],
    isLoading: false,
  };

  componentDidUpdate = async (_, prevState) => {
    const { query, page } = this.state;

    if (prevState.page !== page || prevState.query !== query) {
      try {
        this.setState({ isLoading: true });
        const image = await axios
          .get(
            `?q=${query}&page=${page}&key=31487679-f74d16d66b223008c42dbbdd0&image_type=photo&orientation=horizontal&per_page=12`
          )
          .then(res => res.data.hits);

        this.setState(prevState => ({
          imageData: [...prevState.imageData, ...image],
          isLoading: false,
        }));
      } catch (error) {
        console.log(error);
      }
    }
  };

  onSubmit = searchQuery => {
    this.setState({
      page: 1,
      query: searchQuery,
      imageData: [],
      isLoading: false,
    });
  };

  onLoadMore = () => {
    this.setState(prev => ({
      page: prev.page + 1,
    }));
  };

  render() {
    const { isLoading, imageData } = this.state;

    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.onSubmit} isLoading={isLoading} />
        <ImageGallery imageData={imageData} />

        {isLoading && <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass={css.spinner}
            glassColor="#c0efff"
            color="#e15b64"
          />
        }
        {!!imageData.length && <Button onLoadMore={this.onLoadMore} />}
      </div>
    );
  }
}
