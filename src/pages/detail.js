import data from "../utils/data";
import Header from "../components/header";
import Footer from "../components/footer";

const DetailPage = {
    render(id) {
        const result = data.find((post) => post.id === id);
        return /* html */`
        ${Header.render()}
            <div>
                <h1>${result.title}</h1>
                <img src="${result.img}" alt="" />
                <p>${result.desc}</p>
            </div>
            ${Footer.render()}
        `;
    },
};
export default DetailPage;