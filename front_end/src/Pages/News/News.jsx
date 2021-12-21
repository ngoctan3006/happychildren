import React, {useEffect} from "react";
import "./news.sass";
// import { Link } from "react-router-dom";
import {tags, news_list, news_list_grid} from './data.js';

const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="heading">ニュース・活動報告</div>
      <div className="tags">
        <div className="tags_wrapper">
          <button className="add_tags">ALL TAGS</button>
          <div className="list_tags">
            {
              tags.map((item, index) => (
                <div className="list_tags_name">{item.name}</div>
              ))
              }
          </div>
        </div>
      </div>
      <h2 className="title">
        <span>すべての記事</span>
      </h2>
      <div className="news">
        <div className="news_list">
          {
            news_list.map((item, index) => (
              <div className="news_list_item">
                <div className="news_list_item_image">
                  <img src={item.image} alt=""/>
                </div>
                <div className="news_list_item_content">
                  <div className="news_list_item_info">
                    <div className="news_list_item_time">{item.time}</div>
                    <div className="news_list_item_tag">{item.tag}</div>
                  </div>
                  <div className="news_list_item_title">{item.title}</div>
                  <div className="news_list_item_desc"><p>{item.description}</p></div>
                </div>
              </div>
            ))
          }
        </div>
        <div className="news_list_grid">
          {
            news_list_grid.map((item, index) => (
              <div className="news_list_item">
                <div className="news_list_item_image">
                  <img
                    src={item.image}
                    alt="News 1"
                  />
                </div>
                <div className="news_list_item_info">
                  <div className="news_list_item_time">{item.time}</div>
                  <div className="news_list_item_tag">{item.tag}</div>
                </div>
                <div className="news_list_item_title">{item.title}</div>
              </div>
            ))
          }
        </div>
        <div className="news_navigation">
          <div className="news_navigation_left news_navigation_transparent news_navigation_item">
            <img
              src={require("../../images/body/news/right_end.png")}
              alt="left_end"
            />
          </div>
          <div className="news_navigation_left news_navigation_transparent news_navigation_item">
            <img src={require("../../images/body/news/right.png")} alt="left" />
          </div>
          <div className="news_navigation_item">1</div>
          <div className="news_navigation_item">2</div>
          <div className="news_navigation_item">3</div>
          <div className="news_navigation_item">4</div>
          <div className="news_navigation_item">5</div>
          <div className="news_navigation_right news_navigation_transparent news_navigation_item">
            <img src={require("../../images/body/news/right.png")} alt="right" />
          </div>
          <div className="news_navigation_right news_navigation_transparent news_navigation_item">
            <img
              src={require("../../images/body/news/right_end.png")}
              alt="right_end"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
