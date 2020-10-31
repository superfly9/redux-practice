import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [articles,setArticles] = useState([]);
  const [isError, setIsError] = useState(false);
  const getArticlesPromise = () => {
    return new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve([
            {id: 1, title: 'article title sample1'},
            {id: 2, title: 'article title sample2'},
            {id: 3, title: 'article title sample3'},
            {id: 4, title: 'article title sample4'},
            {id: 5, title: 'article title sample5'}
            ]);
        }, 1000);
    });
  };
  useEffect(()=>{
    console.log('use Effect');
    const fetchArticles = async ()=>{
        setIsError(false);
        try {
            const articleData = await getArticlesPromise(); // resolve에 담겨있는 저 배열이 변수에 담긴다
            setArticles(articleData);

        } catch (e) {
            setIsError(true);
        }
    }
    fetchArticles();
    //async함수의 정의와 실행을 다 effect hook 안에서 실행, useEffect의 첫번째 인자로 async function을 전달할 수는 없기에
  },[])
  console.log('=== render ===');
  console.log('articles', articles);
    return (
        <div className="container">
            <ul>
                {articles.map(article => (
                <li key={article.id}>{article.title}</li>
                ))}
            </ul>
        </div>
    );
  }
  
  
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
