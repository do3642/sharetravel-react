import { useState } from 'react';
import '../styles/MarketSell.css';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axios/axiosInstance';

function MarketSell({ user }) {
  const navigate = useNavigate()
  const [data, setData] = useState({
    title:'',
    area:'',
    price:'',
    information:'',
    writer: user
  })

  const [files, setFiles] = useState([])

  const onChangeHandler = (e) => {
    const targetName = e.target.name;

    if(targetName !== 'files') {
      setData({
        ...data,
        [targetName] : e.target.value
      });
      
    }
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    
    const form = new FormData();

    // `files` 객체 또는 배열을 FormData에 추가
    files.forEach(file => {
      form.append("files", file); // 서버가 기대하는 키로 추가
    });

    form.append('title', data.title);
    form.append('area', data.area);
    form.append('information', data.information);
    form.append('price', data.price);
    form.append('writer', data.writer);


    axiosInstance.post('/marketsell/upload', form, {
      headers : {
        "Content-Type" : "multipart/form-data"
      }
    }).then(response => {
      alert(response.data)
      navigate('/')
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <section className="market-sell">
      <form onSubmit={onSubmitHandler}>
        <ul className="sell-info">
          <li>상품명:<input type="text" id="title" name="title" onChange={onChangeHandler}/></li>
          <li>지역: <input type="text" id="area" name="area" onChange={onChangeHandler}/></li>
          <li>가격: <input type="number" id="price" name="price" onChange={onChangeHandler}/>원</li>
          <li>상품이미지: <input type="file" multiple id="img" name="img" onChange={(e) => {
            setFiles([...e.target.files])}}/></li>
          <li>상품 정보: 
            <textarea id="information" name='information' rows='9' onChange={onChangeHandler}></textarea>
          </li>
          <input type='submit' value='상품등록' className='button'/>
        </ul>
      </form>

    </section>
  )
}

export default MarketSell;
