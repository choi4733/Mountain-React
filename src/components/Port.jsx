import React from "react";
import { siteText } from "../datas/data";

const Site = () => {
  return (
    <section id="site">
      <div className="site_inner">
        <h2 className="site_title">Great Mountains</h2>
        <div className="site_wrap">
          {siteText.map((site, key) => (
            <article className={`site_item ${site.className}`} key={key}>
              <span className="num">{key + 1}.</span>
              <div className="text">
                <div>{site.text[0]}</div>
                <div>{site.text[1]}</div>
              </div>
              <h3 className="title">{site.title}</h3>
              <div className="btn">
                <a href="#">site</a>
                <a href="#">view</a>
              </div>
              <div className="info">
                {site.info.map((info, index) => (
                  <span key={index}>{info}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Site;
