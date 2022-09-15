import axios from 'axios';
import type { NextPage } from 'next';
import { useState } from 'react';
import Contact from '../../../Components/Contact/Contact';
import Header from '../../../Components/Header/Header';
import Title from '../../../Components/Title/Title';
import { FormDiv, FormInput, FormText, PostDiv, PostImg } from './styles';

const AddNew: NextPage = () => {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');

  const [error, setError] = useState(false);

  const submit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const data = {
      Title: title,
      Image: imageUrl,
      ShortDescription: shortDescription,
      LongDescription: longDescription,
      DatePost: new Date(),
    };

    const emptyFields =
      title === '' ||
      imageUrl === '' ||
      shortDescription === '' ||
      longDescription === '';

    if (emptyFields) {
      setError(true);
    } else {
      setError(false);
      axios
        .post('http://localhost:1337/api/titles', { data })
        .then((response) => {
          console.log(response.data.data);
          alert('post added');
        })
        .catch((error) => console.error(error));
    }
  };

  //https://cdn.shopify.com/s/files/1/0056/1952/files/21-bourbon-on-guitar-1180x1480_600x600.jpg?v=1646331096
  return (
    <div>
      <Header />
      <div>
        <Title texto="New Post" />

        <PostDiv>
          <PostImg src={imageUrl} alt="" />
          <div style={{ width: '600px' }}>
            <form onSubmit={submit}>
              <FormDiv>
                <label>Title</label>
                <FormInput
                  placeholder="Post title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />

                <label>Image</label>
                <FormInput
                  placeholder="Enter your image url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                />

                <label>Short Description</label>
                <FormText
                  name="mensagem"
                  placeholder="Add a short description"
                  rows={5}
                  value={shortDescription}
                  onChange={(e) => setShortDescription(e.target.value)}
                />

                <label>Long Description</label>
                <FormText
                  name="mensagem"
                  placeholder="Add your post text"
                  rows={5}
                  value={longDescription}
                  onChange={(e) => setLongDescription(e.target.value)}
                />

                {error && (
                  <p style={{ color: 'red' }}>All fields must be filled</p>
                )}
                <button type="submit">Submit</button>
              </FormDiv>
            </form>
          </div>
        </PostDiv>
      </div>
      <Contact />
    </div>
  );
};

export default AddNew;
