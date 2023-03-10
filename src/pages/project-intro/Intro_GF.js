import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Scroll from "../../components/Scroll";
import { LazyLoadImage } from "react-lazy-load-image-component";
import SideBar from "../../components/SideBar";

const Intro_GF = () => {
  const [title, setTitle] = useState("");
  useEffect(() => {
    setTitle((pre) => {
      return (pre = document.querySelectorAll(".post-content h4"));
    });
  }, []);
  return (
    <div className="intro-bg">
      <Banner data={"pj-gofreight-website"} />
      <Scroll />
      {/* h5改成h4  */}
      {/* span改成div  */}
      <div className="post-grid">
        <SideBar title={title} />
        <div className="post-content">
          <div className="post-wrap">
            <div>
              <p>
                在新版本 GoFreight 官網更新中負責部分為圖片製作以及部分頁面
                layout ，上線後為達到更好的網站成效持續執行網站調研與測試。
                此案例將會分享排版設計、插圖以及對官網功能的調研結果。
              </p>
            </div>
            <div>
              <h4>01. Layout | UX Writing</h4>
              <p>◼ 404 Page</p>
              <p>
                設計上主要目標為避免因錯誤原因來到404頁面的使用者得到差勁的體驗。在畫面上採模擬水中的影片做背景，加上與使用者對話的文案，希望用詼諧的方式讓使用者願意導向首頁繼續瀏覽網站。
              </p>
              <a
                href="https://www.gofreight.com/404"
                target="_blank"
                rel="noreferrer"
                className="sort-content"
              >
                <div className="button">View Online</div>
              </a>
              <figure>
                <LazyLoadImage
                  src="/portfolio/images/GoFreight/MU_404page.jpg"
                  alt=""
                />
              </figure>
              <p>◼ Solution - Managed Business Page</p>
              <figure>
                <LazyLoadImage
                  src="/portfolio/images/GoFreight/MU_Solution.jpg"
                  alt=""
                />
              </figure>
              <p>◼ Blog首頁</p>
              <p>
                主要目標：視覺與新官網統一、增加使用者在網站停留時間。
                <br></br>
                舊版 Blog
                獨立，需要回到官網才能繼續閱讀產品相關資訊頁面，可能導致從 Blog
                文章進入官網的使用者在看完文章就離開網站。
                <br></br>
                新版 layout
                能和其他頁面共用上方選單，方便觀看完文章後還能引導至產品資訊頁面。
              </p>
              <figure>
                <LazyLoadImage
                  src="/portfolio/images/GoFreight/MU_blog-1.jpg"
                  alt=""
                />
              </figure>
              <p>◼ Blog內頁</p>
              <p>
                主要目標：改善閱讀體驗
                <br></br>
                最大更動為調整定義文字區塊寬度，使用者能更輕易的觀看下一行文字。
              </p>
              <figure>
                <LazyLoadImage
                  src="/portfolio/images/GoFreight/MU_blog-2.jpg"
                  alt=""
                />
              </figure>
            </div>
            <div>
              <h4>02. 新版網站調研</h4>
              <p>
                我們從其他競品、 B2B
                產品網站進行分析。從視覺（包含設計與排版）、功能、內容、資訊架構四個層面切入。
                整理條列出認為可以優化或新增的功能，再以此為參考調查其他 2B
                網站。
              </p>
              <figure>
                <LazyLoadImage
                  src="/portfolio/images/GoFreight/web_survey-1.jpg"
                  alt=""
                />
                <figcaption>討論板示意圖</figcaption>
              </figure>
              <p>調研之 B2B 網站比較圖如下：</p>
              <figure>
                <LazyLoadImage
                  src="/portfolio/images/GoFreight/web_survey-2.jpg"
                  alt=""
                />
              </figure>
              <p>
                繪製出其他網站的 wireframe
                幫助找出共通點，並比較舊有官網的架構，方便定義官網首頁的目的性。
              </p>
              <figure>
                <LazyLoadImage
                  src="/portfolio/images/GoFreight/web_survey-3.jpg"
                  alt=""
                />
              </figure>
              <p>
                搜集共通點後，我們的結論如下，後續將由這三個方向做 Section
                改版測試成效：
              </p>
              <div className="circle-highlight">
                <div className="circle-highlight-1">
                  <h6 className="text-secondary">減少停留時間</h6>
                  <p>減少使用者在首頁的停留時間，快速取得他們所需的資訊。</p>
                </div>

                <div className="circle-highlight-1">
                  <h6 className="text-secondary">增加不同層級 BTN</h6>
                  <p>
                    多一個第二層級的 CTA 按鈕，讓使用者對其他 CTA
                    不感興趣或動機不強時增加機會與使用者互動。
                  </p>
                </div>

                <div className="circle-highlight-1">
                  <h6 className="text-secondary">網站內容</h6>
                  <p>豐富網站內容，提供資訊不同來源給不同受眾。</p>
                </div>
              </div>
            </div>
            <div>
              <h5>[ 釐清首頁的目標 ]</h5>
              <p>
                ◼ 給予使用者找齊需要的資訊入口
                <br></br>◼
                目標讓使用者在首頁停留時間減少：使其快速到達想去的頁面，最終目標為增加在官網的總停留時間
                <br></br>◼ 針對不同使用者提供不同面向的入口（引導式閱讀）
              </p>
            </div>
            <div>
              <h5>[ 我們的下一步 ]</h5>
              <p>
                ◼ 找出能讓 TA 產生信賴感的編排方式（顏色、排版）
                <br></br>◼ 調整字之間層級的關係
                <br></br>◼
                首頁使用方法轉向橋樑（或入口），引導不同身份使用者到其感興趣的頁面
                <br></br>◼
                以調研為基礎重新規劃網站資訊架構與資訊區塊排列方式，並進行 A/B
                Test
              </p>
            </div>
            <div>
              <h5>[ 調整首頁目標後上線結果 ]</h5>
              <p>
                取 2022-12-05~12-14 與 2022-12-15 至 2023-01-03
                的資料做對比（以進入 Hompage 如數相當的時段對比）
                <br></br>Click 數：🔺 6.8 倍 (2022-12-05~12-14.: 0.5% -{">"}
                2022-12-15~2023-01-03: 3.9%)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro_GF;
