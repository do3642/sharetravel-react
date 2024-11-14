function TravelInfo() {
  return(
    <section id="travel-info">
      <h2>추천 여행지</h2>
      <div className="flex-box">

        {/* 추천지 사진들 */}
        <article className="left-travel-info">
          <div><img src="" alt=""></img></div>
          <div>
            <p><img src="" alt=""></img></p>
            <p><img src="" alt=""></img></p>
            <p><img src="" alt=""></img></p>
          </div>
        </article>

        {/* 추천지 관련 댓글들 */}
        <article className="right-travel-info">
          <div className="comments-list">
            <div className="comments">
              <div className="comments-info">
                <p><img src="" alt="사용자 프사"></img></p>
                <div>
                  <span>닉네임</span>
                  <span><strong>작성수:</strong><strong>댓글수:</strong></span>
                </div>
                <span>작성일:</span>
              </div>
              <div className="comments-content">
                <span>댓글쓴거</span>
              </div>
            </div>
          </div>

          {/* 여행팁 게시물*/}
          <div className="tips-list">
            <ul className="tip">
              <li>카테고리</li>
              <li>제목</li>
              <li>추천수</li>
              <li>댓글수</li>
              <li>작성자</li>
            </ul>
          </div>
        </article>
      </div>

    </section>
  )
}

export default TravelInfo;