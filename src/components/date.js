// 시간 표시
const timeFormat = (content) => {
    const dateObj = new Date(content.createDate);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작
    const day = String(dateObj.getDate()).padStart(2, "0");
    const hours = String(dateObj.getHours()).padStart(2, "0"); // 로컬 시간
    const minutes = String(dateObj.getMinutes()).padStart(2, "0");
    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}`;

    return formattedDateTime;
}

export default timeFormat;