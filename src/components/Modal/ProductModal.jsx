import axios from 'axios';
import CloseBtn from 'components/Btn/closeBtn';
import { useState } from 'react';
import styled from 'styled-components';
import { useDropzone } from 'react-dropzone';
import { useCallback } from 'react';

const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  padding: 10px;
  background: white;
  transform: translate(-50%, -50%);
`;

const dropzoneStyle = {
    width: '100%',
    height: '100px',
    border: '2px dashed #ccc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

const initialState = {
  product_name: '',
  quantity: 0,
  price_per_item: 0,
  image_url: '',
};
export default function ProductModal({ visibleHandler, setProduct }) {
  const [productForm, setProductForm] = useState(initialState);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const hendlerForm = e => {
    setProductForm(prevForm => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  };
  const submitForm = () => {
    setProduct(prevProduct => ({
      ...prevProduct,
      products: [...prevProduct.products, productForm],
    }));
    visibleHandler();
  };

  const onDrop = useCallback(async (acceptedFiles) => {
    // Загрузка файлов на сервер
    const formData = new FormData();
    acceptedFiles.forEach((file) => {
      formData.append('file', file);
    });

    try {
      const response = await axios.post('http://localhost:4545/load', formData, {
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          console.log(percentCompleted);
          setUploadProgress(percentCompleted) 
          // Здесь вы можете использовать значение percentCompleted, чтобы обновлять UI или как-то еще отображать прогресс
        },
      });

      if (response.status === 200) {
        // const { data } = response.data;
        // Добавление ссылок на загруженные файлы в массив
        setUploadedFiles([...uploadedFiles, response.data]);
        setProductForm((prevForm) => ({
            ...prevForm,
            image_url: prevForm.image_url ? prevForm.image_url + ',' + response.data : response.data,
          }));
      }
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  }, [uploadedFiles]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: true,
  });
  return (
    <Modal>
      <h2>Додати продукт</h2>
      <CloseBtn toggelModal={visibleHandler} />
      {/* <div
        onDragOver={e => e.preventDefault()}
        onDrop={handleFileDrop}
        style={{ width: '300px', height: '100px', border: '2px dashed #ccc' }}
      >
        Перетащите файл сюда
      </div> */}
      
      
      {uploadProgress > 0 && (
      <div>
        <p>Прогресс загрузки: {uploadProgress}%</p>
      </div>
    )}
      <div>
        <input
          name="product_name"
          onChange={hendlerForm}
          value={productForm.product_name}
        />
        <input
          name="quantity"
          onChange={hendlerForm}
          value={productForm.quantity}
        />
        <input
          name="price_per_item"
          onChange={hendlerForm}
          value={productForm.price_per_item}
        />
      </div>
      <div {...getRootProps()} style={dropzoneStyle}>
        <input {...getInputProps()} />
        <p>Перетащите файлы сюда для загрузки</p>
      </div>
      <div>
        <p>Ссылки на загруженные файлы:</p>
        {uploadedFiles.map((fileUrl, index) => (
          <a key={index} href={fileUrl} target="_blank" rel="noopener noreferrer">
            {fileUrl}
          </a>
        ))}
      </div>
      <button onClick={submitForm}>Додати до замовлення</button>
    </Modal>
  );
}
