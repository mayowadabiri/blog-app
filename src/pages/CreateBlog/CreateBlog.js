import './CreateBlog.css';
import FormGroup from '../../components/UI/FormGroup/FormGroup';
import { useState } from 'react';
import Button from '../../components/UI/Button/Button';
import axios from 'axios';

const CreateBlog = (props) => {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);

  const [createForm, setCreateForm] = useState({
    title: '',
    content: '',
  });

  const [loading, setLoading] = useState(false);
  const handleImage = (evt) => {
    console.log('jhdsvg');
    const file = evt.target.files[0];
    setFile(file);
    setImage(URL.createObjectURL(file));
  };

  const handleText = (evt, type) => {
    setCreateForm({
      ...createForm,
      [type]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    setLoading(true);
    evt.preventDefault();
    const data = new FormData();
    data.append('image', file);
    data.append('title', createForm.title);
    data.append('content', createForm.content);
    const token = localStorage.getItem('token');
    console.log(token);
    axios
      .post('http://localhost:4002/api/v1/blog/post-blog', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setLoading(false);
        console.log(res);
        props.history.push('/blog');
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="create">
      <form className="create_container" onSubmit={handleSubmit}>
        <div className="create_img">
          {!image && <div className="img_before"></div>}
          {image && <img src={image} alt="dp" className="img_after" />}
          <input
            onChange={handleImage}
            type="file"
            accept=".jpg,.jpeg, .png "
            hidden
            id="upload"
          />
          <label htmlFor="upload" className="create_label">
            Upload Image
          </label>
        </div>
        <div className="create_form">
          <FormGroup
            label="Title"
            type="text"
            placeholder="Enter blog title"
            name="title"
            required={true}
            value={createForm.title}
            onChange={(event) => handleText(event, 'title')}
          />
          <div style={{ marginBottom: '30px' }}>
            <label className="form-label">Content</label>
            <textarea
              className="form-input create_text"
              onChange={(event) => handleText(event, 'content')}
              value={createForm.content}
            ></textarea>
          </div>
        </div>
        <Button isLoading={loading} type="submit">
          Create Blog
        </Button>
      </form>
    </div>
  );
};

export default CreateBlog;
// email: 'buju@yopmail.com';
// id: '62446a7b5413b22f2843c690';
// message: 'Loggedin successfully';
// token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJ1anVAeW9wbWFpbC5jb20iLCJpZCI6IjYyNDQ2YTdiNTQxM2IyMmYyODQzYzY5MCIsImlhdCI6MTY0OTA3OTYzOCwiZXhwIjoxNjQ5MDg2ODM4fQ.5xaacGgxfi3mR1rHoZnccf8_zV0DfakwgH88EmVRuMY';
// username: 'janedoe';

// token: '
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJ1anVAeW9wbWFpbC5jb20iLCJpZCI6IjYyNDQ2YTdiNTQxM2IyMmYyODQzYzY5MCIsImlhdCI6MTY0OTA3OTYzOCwiZXhwIjoxNjQ5MDg2ODM4fQ.5xaacGgxfi3mR1rHoZnccf8_zV0DfakwgH88EmVRuMY';
