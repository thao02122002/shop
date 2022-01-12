import data from "../utils/data";

const DetailPage = {
    render(id) {
        const result = data.find((post) => post.id === id);
        return /* html */`
            <div>
                <h1>${result.title}</h1>
                <img src="${result.img}" alt="" />
                <p>${result.desc}</p>
            </div>
        `;
    },
};
export default DetailPage;