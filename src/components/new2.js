import news from "../utils/data";

const News2 = {

    render() {
        return `
    
    ${news.map((post) => `
    <div class="hd1 col-span-4 border border-black">
    <div class="p-4 ">
        <a href="/product/${post.id}" ><img src="${post.img}" alt="" width="500px" /></a>
    <h2 class="text-red-600 text-xl py-2">${post.title}</h2>
    <p>${post.desc}</p>
    </div>
    </div>
    `).join("")}
      
    `;
    },
};
export default News2;