import React, { useEffect, useState } from 'react';
import { SketchPicker } from 'react-color';
import axios from 'axios';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [color, setColor] = useState();

  useEffect(() => {
    axios.get('/categories')
      .then((res) => {
        console.log(res);
        setCategories(res.data.categories);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <div className='categories mt-8'>
      <div className='categories-heading'>
        <h5 className='lg:text-xs'>
          Categories
          <a href='#'>
            <i className='fas fa-plus'></i>
          </a>
        </h5>
        <div className='new-category-box'>
          <SketchPicker color={color} onChangeComplete={setColor} />
          <input type="text" name='category_name' id='categoryName' />
          <button className='btn btn-sm btn-green'>
            <i className='fas fa-save mr-1'></i>
              Save
          </button>
        </div>
      </div>
      <div className='sidebar-navigation'>
        {categories.map((cat, i) => (
          <a
            href='#'
            className='sidebar-item'
            key={i}>
            <span className={`w-2 h-2 bg-${cat.color}-400 rounded-full`}></span>
            <span className='ml-3 mr-auto'>{cat.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Categories;
