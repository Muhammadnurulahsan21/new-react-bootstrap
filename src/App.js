import "./App.css";
import Card from "./Components/Card/Card";

function App() {
  const item = [
    { name: "First item",
      Description:
        "Spark ReactJS Admin & Dashboard Template is a theme built with Bootstrap 4 and React, the most popular frameworks. Spark includes over 45+ pages including many components.  leader boards, and much more. Spark ReactJS is developed with the latest & trusted technologies, such as ReactJS, HTML5, CSS3 (using Sass preprocessor), and NPM.",
      img: "https://images.pexels.com/photos/1767434/pexels-photo-1767434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    { name: "First item",
      Description:
        "Spark ReactJS Admin & Dashboard Template is a theme built with Bootstrap 4 and React, the most popular frameworks. Spark includes over 45+ pages including many components.  leader boards, and much more. Spark ReactJS is developed with the latest & trusted technologies, such as ReactJS, HTML5, CSS3 (using Sass preprocessor), and NPM.",
      img: "https://images.pexels.com/photos/1767434/pexels-photo-1767434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    { name: "First item",
      Description:
        "Spark ReactJS Admin & Dashboard Template is a theme built with Bootstrap 4 and React, the most popular frameworks. Spark includes over 45+ pages including many components.  leader boards, and much more. Spark ReactJS is developed with the latest & trusted technologies, such as ReactJS, HTML5, CSS3 (using Sass preprocessor), and NPM.",
      img: "https://images.pexels.com/photos/1767434/pexels-photo-1767434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    { name: "First item",
      Description:
        "Spark ReactJS Admin & Dashboard Template is a theme built with Bootstrap 4 and React, the most popular frameworks. Spark includes over 45+ pages including many components.  leader boards, and much more. Spark ReactJS is developed with the latest & trusted technologies, such as ReactJS, HTML5, CSS3 (using Sass preprocessor), and NPM.",
      img: "https://images.pexels.com/photos/1767434/pexels-photo-1767434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    { name: "First item",
      Description:
        "Spark ReactJS Admin & Dashboard Template is a theme built with Bootstrap 4 and React, the most popular frameworks. Spark includes over 45+ pages including many components.  leader boards, and much more. Spark ReactJS is developed with the latest & trusted technologies, such as ReactJS, HTML5, CSS3 (using Sass preprocessor), and NPM.",
      img: "https://images.pexels.com/photos/1767434/pexels-photo-1767434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    { name: "First item",
      Description:
        "Spark ReactJS Admin & Dashboard Template is a theme built with Bootstrap 4 and React, the most popular frameworks. Spark includes over 45+ pages including many components.  leader boards, and much more. Spark ReactJS is developed with the latest & trusted technologies, such as ReactJS, HTML5, CSS3 (using Sass preprocessor), and NPM.",
      img: "https://images.pexels.com/photos/1767434/pexels-photo-1767434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    { name: "First item",
      Description:
        "Spark ReactJS Admin & Dashboard Template is a theme built with Bootstrap 4 and React, the most popular frameworks. Spark includes over 45+ pages including many components.  leader boards, and much more. Spark ReactJS is developed with the latest & trusted technologies, such as ReactJS, HTML5, CSS3 (using Sass preprocessor), and NPM.",
      img: "https://images.pexels.com/photos/1767434/pexels-photo-1767434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    { name: "First item",
      Description:
        "Spark ReactJS Admin & Dashboard Template is a theme built with Bootstrap 4 and React, the most popular frameworks. Spark includes over 45+ pages including many components.  leader boards, and much more. Spark ReactJS is developed with the latest & trusted technologies, such as ReactJS, HTML5, CSS3 (using Sass preprocessor), and NPM.",
      img: "https://images.pexels.com/photos/1767434/pexels-photo-1767434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    
  ];

  return (
    <div className="App">
      <button type="button" className="btn nbtn btn-primary">
        Primary
      </button>
      <button type="button" className="btn nbtn btn-secondary">
        Secondary
      </button>
      <button type="button" className="btn nbtn btn-success">
        Success
      </button>
      <button type="button" className="btn nbtn btn-danger">
        Danger
      </button>
      <button type="button" className="btn nbtn btn-warning">
        Warning
      </button>
      <button type="button" className="btn nbtn btn-info">
        Info
      </button>
      <button type="button" className="btn nbtn btn-dark">
        Dark
      </button>

      <div className="row row-cols-1 row-cols-md-4 g-4">
        {
          item.map(item => <Card item={item}></Card>)
        }
      </div>  
    </div>
  );
}

export default App;
