import React from 'react'
import './article.css'

interface ArticleProps {
  imgUrl: string,
  title: string,
  date: string
}

export default function Article({ imgUrl, date, title }: ArticleProps) {
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container_article-image'>
        <img src={imgUrl} alt="Blog Image" />
      </div>
      <div className='gpt3__blog-container_article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}
