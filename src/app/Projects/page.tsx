"use client";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

const CarruselProyectos = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/diego422/repos')
      .then(response => response.json())
      .then(data => setRepos(data))
      .catch(error => console.error('Error fetching GitHub repos:', error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="body2 bg-gradient-to-br from-gray-300 to-gray-500-lg">
      <div className="container3">
        <div className='titulorepo'>
          <h2>Repositorios Github</h2>
        </div>
        <Slider {...settings}>
          {repos.map(repo => (
            <div key={repo.id} className="card">
              <h3>{repo.name}</h3>
              <p>{repo.description || 'Sin descripción'}</p>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                Ver en GitHub
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarruselProyectos;