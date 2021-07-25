import React, { Component } from 'react';

import ApiService from 'components/ApiService';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Modal from 'components/Modal';

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    largeImage: '',
    isLoading: false,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchPictures();
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      images: [],
      currentPage: 1,
    });
  };

  fetchPictures = () => {
    const { searchQuery, currentPage } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    // setTimeout для лоадера
    setTimeout(() => {
      ApiService(options)
        .then(images =>
          this.setState(prevState => {
            return {
              images: [...prevState.images, ...images],
              currentPage: prevState.currentPage + 1,
            };
          }),
        )
        .then(this.smoothScroll)
        .finally(this.setState({ isLoading: false }));
    }, 500);
  };

  smoothScroll = () => {
    if (this.state.currentPage > 2) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  modalOpen = largeImage => {
    this.setState({
      showModal: true,
      largeImage,
    });
  };

  modalClose = () => {
    this.setState({
      showModal: false,
      largeImage: '',
    });
  };

  render() {
    const { images, largeImage, isLoading, showModal } = this.state;
    const { modalOpen, modalClose, onChangeQuery, fetchPictures } = this;

    return (
      <>
        <Searchbar onSubmit={onChangeQuery} />
        <ImageGallery images={images} modalOpen={modalOpen} />
        {showModal && <Modal modalClose={modalClose} largeImage={largeImage} />}
        {isLoading && <Loader />}
        {images.length > 0 && <Button onClick={fetchPictures} />}
      </>
    );
  }
}

export default App;
